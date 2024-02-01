<?php

use App\Http\Controllers\api\users\BaseController;
use Illuminate\Support\Facades\Route;

// orign middleware for security and prefix

Route::group(['prefix' => 'v1/users'], function () {
    Route::controller(BaseController::class)->group(function () {
        // signin
        Route::post('/signin', 'signin');
        //signupP
        Route::post('/signup', 'signup');
        // logout
        Route::post('/signout', 'logOut')->middleware('auth:sanctum');
        //logout
        Route::post('/email/reset/password', 'ResetPasswordEmail');
        Route::get('/email/verify', 'emailVerify');

        Route::post('/SaveCategory', 'saveCategories');

        Route::post('/email/reset/password/update', 'ResetPasswordUpdate');
        Route::post('/email/reset/password/update', 'ResetPasswordUpdate');
    });
});