<?php

namespace App\Http\Middleware;

use App\Models\Location;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Session;
use Illuminate\Support\Facades\Log;

class StockLocation
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Session::has('stock_location_id')) {
            $location = Location::where('is_default', 1)->first();

            if ($location) {
                $request->session()->put('stock_location_id', $location->id);
            } else {
                // Log an error and handle the case where the default location is not found
                Log::error('Default location not found in StockLocation middleware.');
                // You can log more information or take additional actions based on the error.
                // For now, set a default location ID or redirect to an error page
                $request->session()->put('stock_location_id', 1);
            }
        }

        return $next($request);
    }
}
