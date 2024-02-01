<?php

namespace App\Traits;

use App\Facades\BaseFacade;
use App\Models\Business\EventBookingsTickets;
use App\Models\Business\TicketTypes;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

trait BookingTrait
{
    use UserBase;

    protected function __coupon_validation($ids, $cat_ids, $from_cat_id, $from_event_id)
    {
        if ($ids != null) {
            $to_ids = json_decode($ids);
            if (!in_array($from_event_id, $to_ids)) {
                return false;
            }
        }

        if ($cat_ids != null) {
            $category_ids = json_decode($cat_ids);
            if (!in_array($from_cat_id, $category_ids)) {
                return false;
            }
        }

        return true;
    }

    public function __get_coupon_discount($subTotal, $coupon)
    {
        $amount = 0;

        if ($coupon == null) {
            return $amount;
        }

        if ($coupon->discount_type == 'flat') {
            $amount = (float) $coupon->discount_value;
        }
        if ($coupon->discount_type == 'percent') {
            $amount = (float) round(($subTotal * $coupon->discount_value) / 100);
        }

        return $amount;
    }

    // get coupon details

    // get event subtota

    protected function __event_subtotal($event, $request)
    {
        $amount = 0;

        foreach ($event->types as $key => $type) {
            $qty = (float) $request[$type->name . '_qty'] ?? 0;
            $amount = $amount + ($qty * $type->price);
        }

        return round($amount);
    }
    // __workspace_subtotal

    protected function __workspace_subtotal($price, $start_time, $end_time)
    {
        $start_time = Carbon::parse(BaseFacade::date_format('H:i:s', $start_time));

        $end_time =  Carbon::parse(BaseFacade::date_format('H:i:s', $end_time));

        $hrs = $start_time->diffInHours($end_time); //default 

        return [
            round($price * $hrs),
            $hrs
        ];
    }



    protected function __dynamic_qty_rules(): array
    {

        $rules = Cache::remember('ticket_types', 3600, function (): array {
            // define rules
            $rules = [];
            // get ticket types
            $events_types = TicketTypes::latest()->get();

            foreach ($events_types as $type) {
                $rules[$type->name . '_qty'] = 'required';
            }

            return $rules;
        });

        return $rules;
    }

    // ticket genrate

    protected function __tickets_generate($booking_id, $event, $request): void
    {
        $tickets = [];
        foreach ($event->types as $type) {
            $qty = (int) $request[$type->name . '_qty'];
            // add pm
            for ($i = 0; $i < $qty; $i++) {
                $ar = [
                    'event_booking_id' => $booking_id,
                    'name' => $type->name,
                    'qty' => $qty,
                    'price' => $type->price,
                    'token' => uniqid(),
                ];
                // push values for bulk
                array_push($tickets, $ar);
            }
        }

        // add tickets
        EventBookingsTickets::insert($tickets);
    }

    // __checkout_response
    protected function __checkout_response($data): array
    {
        return [
            'client_secret' => $data,
        ];
    }
}
