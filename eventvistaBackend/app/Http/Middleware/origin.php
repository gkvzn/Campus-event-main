<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class origin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
        $origin = $request->server('HTTP_REFERER');
        $Response = [];
        if ($origin != '') {
            if (in_array($origin, config('origin.origins'))) {
                return $next($request);
            }
        } else {
            $secKey = $request->header('secret');
            if (in_array($secKey, config('origin.origins'))) {
                return $next($request);
            }
        }
        $Response['flag'] = 0;
        $Response['errors'][0] = 'Access Denied';

        return response()->json($Response, 403);
    }
}
