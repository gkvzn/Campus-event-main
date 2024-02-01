<?php

namespace App\Http\Middleware;

use App;
use Closure;
use Session;

class LanguageMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Session::has('locale')) {
            $locale = Session::get('locale');
        } elseif (env('DEFAULT_LANGUAGE') != null) {
            $locale = env('DEFAULT_LANGUAGE');
        } else {
            $locale = 'en';
        }

        App::setLocale($locale);
        $request->session()->put('locale', $locale);

        return $next($request);
    }
}
