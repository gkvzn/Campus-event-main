<?php

namespace App\Facades;

use App\Models\Business\TicketTypes;
use Illuminate\Support\Facades\Cache;

class BaseFacade
{
    public static function date_format($format, $date): string
    {
        return date($format, strtotime($date));
    }

    public static function __dynamic_ticket_pricing_rules(): array
    {

        $rules = Cache::remember('ticket_price_types', 3600, function (): array {
            // define rules
            $rules = [];
            // get ticket types
            $events_types = TicketTypes::latest()->get();

            foreach ($events_types as $type) {
                $rules[$type->name.'_limit'] = 'required';
                $rules[$type->name.'_price'] = 'required';
            }

            return $rules;
        });

        return $rules;

    }
}
