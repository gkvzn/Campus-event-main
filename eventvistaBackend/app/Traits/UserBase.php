<?php

namespace App\Traits;

use App\Mail\SendOtp;
use App\Models\Cart;
use App\Models\Location;
use App\Models\Otp;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Stripe\Customer;
use Stripe\PaymentMethod;
use Stripe\Stripe;

trait UserBase
{
    use ApiBase;

    protected $product__hidden__fields = ['added_by', 'brand_id', 'unit_id', 'thumbnail_image', 'gallery_images', 'product_tags', 'sell_target', 'is_published', 'is_featured', 'min_purchase_qty', 'max_purchase_qty', 'has_variation', 'has_warranty', 'total_sale_count', 'standard_delivery_hours', 'express_delivery_hours', 'size_guide', 'meta_title', 'meta_description', 'meta_img', 'created_at', 'updated_at', 'deleted_at'];

    //__get_stock_location_id
    public function __get_stock_location_id()
    {
        $location = Location::where('is_default', 1)->first();

        return $location->id ?? 1;
    }

    // get solo Product With Id
    public function __get_solo_product_with_id($id = 1)
    {
        $Records = Product::where('id', $id)->with(['variation' => function ($q) {
            $q->select(['id', 'product_id', 'sku', 'code', 'price']);
        }])->isPublished()->latest()->first()->makeHidden($this->product__hidden__fields);

        return $Records ?? null;
    }

    public function __verify_unique($attribute, $value): bool
    {
        $veri = User::where($attribute, $value)->count();
        if ($veri == 0) {
            return true;
        }

        return false;
    }

    // Create Otp And Send email
    protected function __create_otp_send_email($email = null, $ResetPassword = false)
    {
        $email != null ? $user = User::where('email', $email)->first() : $user = null;
        $check = Auth::check();
        try {
            Otp::when(($ResetPassword == false && $ResetPassword == false && $email != null), function ($q) {
                $q->where('otp_user_id', Auth::user()->id);
            })->where('otp_email', $check ? Auth::user()->email : $email)->delete();
            // send email
            $limit = 6;
            $verificationcode = random_int(10 ** ($limit - 1), (10 ** $limit) - 1);
            $details = [
                'verify' => $verificationcode,
                'email' => $check ? Auth::user()->email : $email,
            ];
            Mail::to($check ? Auth::user()->email : $email)->send(new SendOtp($details));
            $TimestampGet = Carbon::now()->addMinute(10);
            $MakeOtp = new Otp();
            $MakeOtp->otp_user_id = $check ? Auth::user()->id : $user->id;
            $MakeOtp->otp_email = $check ? Auth::user()->email : $email;
            $MakeOtp->otp_token = Hash::make($verificationcode);
            $MakeOtp->created_at = $TimestampGet;
            $MakeOtp->save();
        } catch (Exception $e) {
            return $e->getMessage();
        }

        return true;
    }

    // create Stripe Customer

    protected function __create_stripe_customer()
    {
        try {
            $user = auth()->user();
            if ($user->customer_id == null) {
                Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
                $customer = Customer::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'phone' => $user->phone,
                ]);

                User::where('id', $user->id)->update([
                    'customer_id' => $customer->id,
                ]);

                return true;
            }
        } catch (\Throwable $th) {
            return false;
        }
    }

    // check card

    protected function __check_card($payment_method): array
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
            $p = PaymentMethod::retrieve(
                $payment_method,
                []
            );

            if ($p->customer == Auth::user()->customer_id) {
                return [
                    'flag' => 1,
                ];
            }

            return [
                'flag' => 0,
                'Message' => 'Payment Method Issue. Add Correct Payment Method.',
            ];
        } catch (Exception $er) {
            return [
                'flag' => 0,
                'Message' => 'Payment Method Issue. Add Correct Payment Method.',
            ];
        }
    }

    // stock Verification

    protected function __stock_verfication($carts)
    {
        try {
            foreach ($carts as $cart) {
                $productVariationStock = $cart->product_variation->product_variation_stock ? $cart->product_variation->product_variation_stock->stock_qty : 0;
                if ($cart->qty > $productVariationStock) {
                    $message = $cart->product_variation->product->collectLocalization('name').' '.localize('is out of stock');

                    return $this->redirectIfNotAvailable(400, $message);
                }
                // if ($cart->qty > ){
                //     $timeSlot = ScheduledDeliveryTimeList::where('id', $request->timeslot)->first(['id', 'timeline']);
                // }
            }
        } catch (\Exception $er) {
            return $this->redirectIfNotAvailable(400, 'SomeThing Went Wrong.');
        }
    }

    //stock lesser

    protected function __stock_decrease()
    {
        // foreach ($carts as $cart) {
        //     $productVariationStock = $cart->product_variation->product_variation_stock ? $cart->product_variation->product_variation_stock->stock_qty : 0;
        //     if ($cart->qty > $productVariationStock) {
        //         $message = $cart->product_variation->product->collectLocalization('name') . ' ' . localize('is out of stock');
        //         return $this->redirectIfNotAvailable(400, $message);
        //     }
        // }
    }

    // __previous_cart_delete
    private function __previous_cart_delete($guestId, $variation_id): int
    {
        return Cart::when(true, function ($q) use ($guestId) {
            $user = auth('sanctum')->user();
            if ($guestId != null) {
                $q->where('guest_user_id', $guestId);
            } else {
                $q->where('user_id', $user->id);
            }
        })->where('product_variation_id', $variation_id)->delete();
    }

    // guest cart connecting
    protected function __cart_connection($guest_id, $user_id)
    {
        $user = auth('sanctum')->user();
        $check_carts = Cart::where('guest_user_id', $guest_id)->count();
        if ($check_carts > 0) {
            Cart::where('user_id', $user->id)->delete();
        }
        Cart::where('guest_user_id', $guest_id)->update(['user_id' => $user_id, 'guest_user_id' => null]);
    }
}
