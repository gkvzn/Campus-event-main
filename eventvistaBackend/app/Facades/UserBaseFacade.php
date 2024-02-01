<?php

namespace App\Facades;

use App\Mail\Invoice;
use App\Models\Order;
use Illuminate\Support\Facades\Mail;

class UserBaseFacade
{
    //  order final
    public static function SendInvoice($OrderId, $email)
    {
        $order = Order::where('id', $OrderId)->first();

        if ($order == null) {
            return false;
        }

        Mail::to($email)->send(new Invoice($order));

        return true;
    }

    // get slot stock

}
