<?php

use App\Http\Controllers\api\gateway\Paypal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
require __DIR__ . '/v1/Auth.php';
require __DIR__ . '/v1/user.php';
require __DIR__ . '/v1/gateway.php';

// events routes
require __DIR__ . '/v1/events.php';



Route::post('/orders', [Paypal::class, 'createOrder']);
Route::get('/orders', function () {
    return response()->json(['asdasd' => 'asdasdasdasdasd']);
});
Route::post('/orders/{orderID}/capture', [Paypal::class, 'captureOrder']);