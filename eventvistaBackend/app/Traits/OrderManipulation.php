<?php

namespace App\Traits;

use App\Facades\UserBaseFacade;
use App\Models\Coupon;
use App\Models\CouponUsage;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;

trait OrderManipulation
{
    // update  order after cod
    protected function __update_order_on_cod($user_id, $order_id)
    {
        try {
            $user = User::where('id', $user_id)->first();
            $order = Order::with('orderGroup', 'orderItems')->where('id', $order_id)->where('user_id', $user->id)->first();

            foreach ($order->orderItems as $orderItem) {
                try {
                    $product = Product::where('id', $orderItem->product_variation->product_id)->first();
                    $product->total_sale_count += $orderItem->qty;
                    // minus stock qty

                    // $productVariationStock = $orderItem->product_variation->product_variation_stock;
                    // $productVariationStock->stock_qty -= $orderItem->qty;
                    // $productVariationStock->save();

                    // $product->stock_qty -= $orderItem->qty;
                    $product->save();
                    if ($product->categories()->count() > 0) {
                        foreach ($product->categories as $category) {
                            $category->total_sale_count += $orderItem->qty;
                            $category->save();
                        }
                    }
                    // // save slot stock
                    // $ScheduledDeliveryTimeListStock = new ScheduledDeliveryTimeListStock();
                    // $ScheduledDeliveryTimeListStock->slot_id = $order->scheduled_delivery_info->id;
                    // $ScheduledDeliveryTimeListStock->product_variation_id = $orderItem->product_variation->id;
                    // $ScheduledDeliveryTimeListStock->qty = $orderItem->qty;
                    // $ScheduledDeliveryTimeListStock->date = Carbon::parse($order->scheduled_delivery_info->scheduled_date)->format('Y-m-d');
                    // $ScheduledDeliveryTimeListStock->save();
                } catch (\Throwable $th) {
                    //throw $th;
                }
            }
            // coupon addition
            if ($order->applied_coupon_code != null) {
                $couponUsageByUser = CouponUsage::where('user_id', $user->id)->where('coupon_code', $order->applied_coupon_code)->first();

                if (! is_null($couponUsageByUser)) {
                    $couponUsageByUser->usage_count += 1;
                } else {
                    $couponUsageByUser = new CouponUsage();
                    $couponUsageByUser->usage_count = 1;
                    $couponUsageByUser->coupon_code = $order->applied_coupon_code;
                    $couponUsageByUser->user_id = $user->id;
                }
                $couponUsageByUser->save();
            }

            // increase coupon usage
            if ($order->applied_coupon_code != null && $order->orderGroup->total_coupon_discount_amount > 0) {
                $coupon = Coupon::where('code', $order->applied_coupon_code)->first();
                if ($coupon != null) {
                    $coupon->total_usage_count += 1;
                    $coupon->save();
                }
            }

            // coupon addition
            // send notify
            SendNotifications([
                'receiver_id' => $order->user_id,
                'title' => 'Order Placed',
                'body' => 'Your order   '.getSetting('order_code_prefix').$order->orderGroup->order_code.' has been placed and is being processed.',
            ]);
            if ($user != null) {
                if ($user->email != null && $user->fcm == 1) {
                    // UserBaseFacade::SendInvoice($order->id, $user->email);
                }
            }
            // ORDER_MODEL::where('intent', $key)->update(['payment_status' => paidPaymentStatus()]);
        } catch (\Exception $er) {
        }
    }
}
