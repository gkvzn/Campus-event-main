<?php

namespace App\Traits;

use Exception;
use Illuminate\Support\Facades\Http;
use Stripe\PaymentIntent as StripePaymentIntent;
use Stripe\Refund;
use Stripe\Stripe;

trait PaymentIntent
{
    protected $STRIPE_VIA_PAYMENT_METHOD = 'STRIPE_VIA_PAYMENT_METHOD';

    protected $STRIPE_VIA_CORE = 'STRIPE_VIA_CORE';

    protected $STRIPE_VIA_FUTURE = 'STRIPE_VIA_FUTURE';

    protected function __intent_create($payment_method, $payload)
    {
        Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
        if (in_array($payment_method, ['STRIPE', 'APPLE_PAY', 'GOOGLE_PAY'])) {
            // Without Future Payment one time payment no card safve
            if ($payload['payment_type'] == $this->STRIPE_VIA_CORE && $payload['card'] == null) {
                try {
                    $intent = StripePaymentIntent::create([
                        'customer' => auth()->user()->customer_id,
                        'amount' => $payload['amount'],
                        'currency' => $payload['currency'],
                        'description' => $payload['description'],
                        'metadata' => $payload['meta'],
                        'payment_method_types' => [
                            'card',
                        ],
                    ]);

                    return [
                        'flag' => 1,
                        'intent' => $intent,
                    ];
                } catch (Exception $err) {
                    return [
                        'flag' => 0,
                        'message' => $err->getMessage(),
                    ];
                }
            }
            //via futre payments save card automatically
            if ($payload['payment_type'] == $this->STRIPE_VIA_FUTURE && $payload['card'] == null) {
                try {
                    $intent = StripePaymentIntent::create([
                        'customer' => auth()->user()->customer_id,
                        'amount' => $payload['amount'],
                        // Amount in cents
                        'currency' => $payload['currency'],
                        'description' => $payload['description'],
                        'setup_future_usage' => 'off_session',
                        'metadata' => $payload['meta'],
                        'automatic_payment_methods' => [
                            'enabled' => true,
                        ],
                    ]);

                    return [
                        'flag' => 1,
                        'intent' => $intent,
                    ];
                } catch (Exception $err) {
                    return [
                        'flag' => 0,
                        'message' => $err->getMessage(),
                    ];
                }
            }
            // via STRIPE_VIA_PAYMENT_METHOD automatic payments for backend
            if ($payload['payment_type'] == $this->STRIPE_VIA_PAYMENT_METHOD && $payload['card'] != null) {
                try {
                    // create intetnet
                    $intent = StripePaymentIntent::create([
                        'amount' => $payload['amount'],
                        'currency' => $payload['currency'],
                        'description' => $payload['description'],
                        'customer' => auth()->user()->customer_id,
                        'payment_method' => $payload['card'],
                        'off_session' => true,
                        'metadata' => $payload['meta'],
                        'confirm' => true,
                    ]);

                    // after payment intent suceeded
                    if ($intent->status == 'succeeded') {
                        return ['flag' => 2, 'intent' => $intent];
                    }

                    // resposne return
                    return [
                        'flag' => 1,
                        'intent' => $intent,
                    ];
                } catch (\Stripe\Exception\CardException $err) {
                    $error_code = $err->getError()->code;
                    // auth required
                    if ($error_code == 'authentication_required') {
                        // resposne return
                        return [
                            'flag' => 1,
                            'message' => $err->getMessage(),
                            'intent' => \Stripe\PaymentIntent::retrieve($err->getError()->payment_intent), //return client_secret
                        ];
                    } elseif ($error_code && $err->getError()->payment_intent != null) {
                        // The card was declined for other reasons (e.g. insufficient funds)
                        // Bring the customer back on-session to ask them for a new payment method
                        return [
                            'flag' => 1,
                            'message' => $err->getMessage(),
                            'intent' => \Stripe\PaymentIntent::retrieve($err->getError()->payment_intent), //return client_secret
                        ];
                    } else {
                        // resposne return
                        return [
                            'flag' => 0,
                            'message' => $err->getMessage(),
                        ];
                    }
                }
            }
        }

        // create order using paypal
        if ($payment_method == 'PAYPAL') {
            try {
                $paypal_config = config('services.paypal')[env('PAYPAL_MODE')];
                // get access token
                $accessToken = $this->generateAccessToken();
                $url = $paypal_config['base_url'].'/v2/checkout/orders';
                $payload = [
                    'intent' => 'CAPTURE',
                    'purchase_units' => [
                        [
                            'amount' => [
                                'currency_code' => 'USD',
                                'value' => $payload['amount'],
                            ],
                        ],
                    ],
                ];
                $response = Http::withHeaders([
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Bearer '.$accessToken,
                ])->post($url, $payload);

                return [
                    'flag' => 1,
                    'paypal' => $response->json(),
                ];
            } catch (Exception $error) {
                return [
                    'flag' => 0,
                    'message' => $error->getMessage(),
                ];
            }
        }
    }

    protected function __intent_refund($payment_method, $payload)
    {
        if ($payment_method == 'STRIPE' || $payment_method == 'APPLE_PAY') {
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
            try {
                $refund = Refund::create(
                    [
                        'payment_intent' => $payload['intent_id'],
                    ]
                );

                return [
                    'flag' => 1,
                    'intent' => $refund,
                ];
            } catch (Exception $err) {
                return [
                    'flag' => 0,
                    'message' => $err->getMessage(),
                ];
            }
        }
    }

    private function generateAccessToken()
    {
        try {

            $paypal_config = config('services.paypal')[env('PAYPAL_MODE')];

            if (! $paypal_config['client_id'] || ! $paypal_config['client_secret']) {
                throw new Exception(localize('missing_api_credentials'));
            }

            $auth = base64_encode($paypal_config['client_id'].':'.$paypal_config['client_secret']);

            $response = Http::withHeaders([
                'Authorization' => 'Basic '.$auth,
                'Content-Type' => 'application/x-www-form-urlencoded',
            ])->asForm()->post($paypal_config['base_url'].'/v1/oauth2/token', [
                'grant_type' => 'client_credentials',
            ]);

            $data = $response->json();
            if (! array_key_exists('access_token', $data)) {
                throw new Exception($data['error_description']);
            }

            return $data['access_token'];
        } catch (Exception $er) {
            throw new Exception($er->getMessage());
        }
    }
}
