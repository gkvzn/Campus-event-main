<?php

namespace App\Http\Controllers\api\users\Customers;

use App\Http\Controllers\Controller;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\Customer;
use Stripe\EphemeralKey;
use Stripe\PaymentMethod;
use Stripe\SetupIntent;
use Stripe\Stripe;

class StripeController extends Controller
{
    use ApiBase, UserBase;

    public function __construct()
    {

        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    }

    public function __get__client_secret()
    {

        try {
            $getSetupIntent = SetupIntent::retrieve(
                Auth::user()->setup_intent,
                []
            );

            $ephemeralKey = EphemeralKey::create([
                'customer' => Auth::user()->customer_id,
            ], [
                'stripe_version' => '2022-08-01',
            ]);
            $this->Response['flag'] = 1;
            $this->Response['data'] = [
                'setupIntent' => $getSetupIntent->client_secret,
                'ephemeralKey' => $ephemeralKey->secret,
                'customer' => Auth::user()->customer_id,
            ];

            return response()->json($this->Response, 200);
        } catch (Exception $er) {
            $this->redirectIfNotAvailable(400, $er->getMessage());
        }
    }

    public function __get__cards()
    {

        try {
            $cards = PaymentMethod::all([
                'customer' => Auth::user()->customer_id,
                'type' => 'card',
            ]);
            $this->Response['flag'] = 1;
            $this->Response['data'] = $cards->data ?? [];

            return response()->json($this->Response, 200);
        } catch (\Throwable $th) {
            return $this->redirectIfNotAvailable(400, 'Customer Not Available.');
        }
    }

    public function __detach__card(Request $request)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));

        $rules = [
            'payment_method_id' => 'required',
        ];

        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        // $size = $request->file('avatar')->getSize();
        try {
            $paymentMethod = PaymentMethod::retrieve($request->payment_method_id, []);
            $customerId = $paymentMethod->customer;
            if ($customerId == Auth::user()->customer_id) {
                $stripe->paymentMethods->detach(
                    $request->payment_method_id,
                    []
                );
                $this->Response['flag'] = 1;
                $this->Response['message'] = 'The card has been successfully detached.';

                return response()->json($this->Response, 200);
            } else {
                return $this->redirectIfNotAvailable(400, 'This card does not belong to the current customer.');
            }
        } catch (Exception $err) {
            return $this->redirectIfNotAvailable(400, 'Payment method not found. Please add a valid payment method.');
        }
    }

    public function __defult_payment_method(Request $request)
    {
        $rules = [
            'payment_method_id' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $payment_method = $this->__check_card($request->payment_method_id);
        if ($payment_method['flag'] == 0) {
            return $this->redirectIfNotAvailable(400, $payment_method['message']);
        }
        try {
            Customer::update(
                Auth::user()->customer_id,
                ['invoice_settings' => ['default_payment_method' => $request->payment_method_id]]
            );
            $this->Response['flag'] = 1;
            $this->Response['message'] = 'Payment method set as default.';

            return response()->json($this->Response, 200);
        } catch (Exception $er) {
            return $this->redirectIfNotAvailable(400, $er->getMessage());
        }
    }

    // get fefult patyment method
    public function __get_default_payment_method()
    {
        try {
            $customer = Customer::retrieve(Auth::user()->customer_id);
            if (! isset($customer->invoice_settings->default_payment_method)) {
                return response()->json(['flag' => 1, 'data' => null], 200);
            }
            $defaultPaymentMethod = $customer->invoice_settings->default_payment_method;
            // You can now use the default payment method as needed
            // For example, you can retrieve its details:
            $paymentMethod = PaymentMethod::retrieve($defaultPaymentMethod);
            $this->Response['flag'] = 1;
            $this->Response['data'] = $paymentMethod;

            return response()->json($this->Response, 200);
        } catch (Exception $er) {
            return response()->json(['flag' => 1, 'data' => null], 200);
        }
    }
}
