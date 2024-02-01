<?php

use App\Http\Controllers\api\users\EventsSpaces\Events;
use App\Http\Controllers\api\users\EventsSpaces\EventsBooking;
use App\Http\Controllers\api\users\EventsSpaces\EventsWishlist;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1/events'], function () {

    Route::controller(Events::class)->group(function () {
        Route::get('/all', '__all');
        // __categories
        Route::get('/categories', '__categories');
        // get solo
        Route::get('/item', '__solo');
    });
    // events wishlist
    Route::group(['prefix' => 'wishlist', 'middleware' => ['auth:sanctum']], function () {
        Route::controller(EventsWishlist::class)->group(function () {
            Route::get('/get', '__get_wishlist');
            Route::post('/add', '__add_wishlist');
            Route::delete('/remove', '__delete_wishlist');

            // Calender APi
            Route::post('/calender', '__add_calendar');
            Route::get('/get_calendars', '__get_calendar');
            Route::delete('/remove_calendar', '__delete_calendar');
        });
    });
});
