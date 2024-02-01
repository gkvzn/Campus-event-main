<?php

use App\Http\Controllers\api\General;
use App\Http\Controllers\api\users\BaseController;
use App\Http\Controllers\api\users\Customers\Address;
use App\Http\Controllers\api\users\Customers\Notification;
use App\Http\Controllers\api\users\Customers\Order;
use App\Http\Controllers\api\users\Customers\Settings;
use App\Http\Controllers\api\users\Customers\StripeController;
use App\Http\Middleware\origin;
use Illuminate\Support\Facades\Route;

// orign middleware for security and prefix
Route::middleware([origin::class, 'auth:sanctum'])->group(function () {
    // address
    Route::group(['prefix' => 'v1/users/address'], function () {
        Route::controller(Address::class)->group(function () {
            Route::get('/get', 'index');
            Route::get('/default', 'get_default_address');
            Route::post('/create', 'create');
            Route::get('/edit', 'edit');
            Route::post('/update', 'update');
            Route::delete('/delete', 'destroy');
        });
    });

    Route::group(['prefix' => 'v1/users'], function () {
        Route::get('/notifications', [Notification::class, '__get_notifications']);
        // verify
        Route::get('/verify', [BaseController::class, '__auth_verify']);
    });
    Route::group(['prefix' => 'v1/users/stripe'], function () {
        Route::controller(StripeController::class)->group(function () {
            // Route::get('/get_setup_intent_secret', '__get__client_secret');
            Route::get('/get_payment_method', '__get__cards');
            Route::delete('/remove_payment_method', '__detach__card');
            Route::post('/set_default_payment_method', '__defult_payment_method');
            Route::get('/get_default_payment_method', '__get_default_payment_method');
        });
    });

    Route::group(['prefix' => 'v1/settings'], function () {
        Route::controller(BaseController::class)->group(function () {
            // Route::post('/change-phone', '__change_phone');
            // Route::post('/change-phone-verify', '__change_phone_update');
        });
        Route::controller(Settings::class)->group(function () {
            Route::post('/profile', '__profile_save');
            Route::post('/change-password', '__change_password');
            Route::delete('/delete-account', '__delete_account');
            Route::post('/profile-photo', '__update_avatar');
            Route::post('/fcm-on-off', '__fcm_off');
        });
    });
});

// General
Route::group(['prefix' => 'v1/app'], function () {
    Route::controller(General::class)->group(function () {
        // getslides
        Route::get('/slides', '__slides');

        // terms
        Route::get('/get-terms-and-conditions', '__get_terms_conditions');
        // data delteion
        Route::get('/data-deletion-instructions', '__data_deletion_instructions');
        // help

        Route::get('/get-help', '__get_help');
        // get page
        Route::get('/get-page', '__get_page');
        //faqs
        Route::get('/get-faqs', '__get_faqs');

        // get contacus
        Route::get('/get-contact-us', '__get_contact_us');
        Route::post('/send-contact-us', '__send_contact_us');
    });
});

Route::group(['prefix' => 'v1'], function () {
    // Route::post('/intent_refund', [Order::class, 'intent_refund']);
    Route::post('/stripe/webhook', [Order::class, 'webhook']);
});
