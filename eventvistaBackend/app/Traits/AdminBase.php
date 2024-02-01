<?php

namespace App\Traits;

use App\Models\Business\Events;
use App\Models\Business\Wallet;
use App\Models\Business\WorkSpace\WorkSpace;
use App\Models\Order;

trait AdminBase
{

    protected function wallet()
    {
        $wallet = Wallet::MyWallet()->firstOrNew();

        if (!$wallet->exists()) {

            $wallet->user_id = auth()->user()->id;

            $wallet->amount = 0.00;

            $wallet->pending_amount = 0.00;

            $wallet->withdraw_amount = 0.00;

            $wallet->save();
        }

        return $wallet;
    }


    protected function __update_status($request)
    {

        // if (isset($request['maincheck'])) {
        //     $orders = Order::where('user_id', '!=', null)->get();

        //     foreach ($orders as $order) {
        // if ($order->delivery_status != orderCancelledStatus() && $request->status == orderCancelledStatus()) {
        //     $this->addQtyToStock($order);
        // }

        // if ($order->delivery_status == orderCancelledStatus() && $request->status != orderCancelledStatus()) {
        //     $this->removeQtyFromStock($order);
        // }
        //     $order->delivery_status = $request['delivery_status'];
        //     $order->save();

        //     SendNotifications([
        //         "receiver_id" => $order->user_id,
        //         "title" => ucwords(str_replace('-', ' ', $request['delivery_status'])),
        //         "body"  => " Your order " . getSetting('order_code_prefix') . $order->orderGroup->order_code . " status updated to" . ucwords(str_replace('-', ' ', $request['delivery_status'])) . '.'
        //     ]);
        // }
        // } else {
        Order::whereIn('id', $request['orders'])
            ->update(['delivery_status' => $request['delivery_status']]);

        foreach ($request['orders'] as $ord) {
            $order = Order::findOrFail((int) $ord);
            // if ($order->delivery_status != orderCancelledStatus() && $request->status == orderCancelledStatus()) {
            //     $this->addQtyToStock($order);
            // }
            // if ($order->delivery_status == orderCancelledStatus() && $request->status != orderCancelledStatus()) {
            //     $this->removeQtyFromStock($order);
            // }

            SendNotifications([
                'receiver_id' => $order->user_id,
                'title' => ucwords(str_replace('-', ' ', $request['delivery_status'])),
                'body' => ' Your order '.getSetting('order_code_prefix').$order->orderGroup->order_code.' status updated to'.ucwords(str_replace('-', ' ', $request['delivery_status'])).'.',
            ]);
        }
        // }
    }

    protected function __events_update_status($request)
    {
        try {
            if ($request['update_status'] == 'add_featured') {
                $update = [
                    'is_featured' => 1,
                ];
            }
            if ($request['update_status'] == 'remove_featured') {
                $update = [
                    'is_featured' => 0,
                ];
            }
            if ($request['update_status'] == 'cancel_events') {
                $update = [
                    'status' => 0,
                ];
            }
            if ($request['update_status'] == 'accept_events') {
                $update = [
                    'status' => 1,
                ];
            }
            Events::whereIn('id', $request['events'])->update($update);
        } catch (\Throwable $th) {
        }
    }


    protected function __workspace_update_status($request)
    {
        try {
            if ($request['update_status'] == 'add_featured') {
                $update = [
                    'is_featured' => 1,
                ];
            }
            if ($request['update_status'] == 'remove_featured') {
                $update = [
                    'is_featured' => 0,
                ];
            }
            if ($request['update_status'] == 'cancel_workspace') {
                $update = [
                    'status' => 0,
                ];
            }
            if ($request['update_status'] == 'accept_workspace') {
                $update = [
                    'status' => 1,
                ];
            }
            WorkSpace::whereIn('id', $request['workspaces'])->update($update);
        } catch (\Throwable $th) {
        }
    }
}
