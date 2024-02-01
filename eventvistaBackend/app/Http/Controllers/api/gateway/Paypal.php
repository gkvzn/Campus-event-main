<?php

namespace App\Http\Controllers\api\gateway;

use App\Http\Controllers\Controller;
use App\Traits\UserBase;
use Exception;
use Illuminate\Support\Facades\Http;

class Paypal extends Controller
{
    use UserBase;

    // use PaymentIntent;
    protected $paypal_config = [];

    public function __construct()
    {
        // code...
        $this->paypal_config = config('services.paypal')[env('PAYPAL_MODE')];
    }

    // public function createOrder(Request $request)
    // {
    //     try {
    //         $accessToken = $this->generateAccessToken();
    //         $url = $this->paypal_config['base_url'] . '/v2/checkout/orders';
    //         $payload = [
    //             'intent' => 'CAPTURE',
    //             'purchase_units' => [
    //                 [
    //                     'amount' => [
    //                         'currency_code' => 'USD',
    //                         'value' => '100.00',
    //                     ],
    //                 ],
    //             ]
    //         ];
    //         $response = Http::withHeaders([
    //             'Content-Type' => 'application/json',
    //             'Authorization' => 'Bearer ' . $accessToken,
    //         ])->post($url, $payload);
    //         return $response->json();
    //     } catch (Exception $error) {
    //         return $this->redirectIfNotAvailable(400, $error->getMessage());
    //     }
    // }

    public function captureOrder($orderID)
    {

        // echo $orderID;
        try {
            $accessToken = $this->generateAccessToken();
            $url = $this->paypal_config['base_url'].'/v2/checkout/orders/'.$orderID.'/capture';

            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Accept-Language' => 'en_US',
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer '.$accessToken,
            ])->post($url, ['body' => '']);

            // $client = new Client();
            // $response = $client->post($url, [
            //     'headers' => [
            //         'Accept' => 'application/json',
            //         'Accept-Language' => 'en_US',
            //         'Content-Type' => 'application/json',
            //         'Authorization' => "Bearer " . $accessToken,
            //     ],
            // ]);

            return $this->handleResponse($response);
        } catch (Exception $error) {
            return response()->json(['error' => 'Failed to capture order.'], 500);
        }
    }

    private function generateAccessToken()
    {

        try {
            if (! $this->paypal_config['client_id'] || ! $this->paypal_config['client_secret']) {
                throw new Exception(localize('missing_api_credentials'));
            }

            $auth = base64_encode($this->paypal_config['client_id'].':'.$this->paypal_config['client_secret']);

            $response = Http::withHeaders([
                'Authorization' => 'Basic '.$auth,
                'Content-Type' => 'application/x-www-form-urlencoded',
            ])->asForm()->post($this->paypal_config['base_url'].'/v1/oauth2/token', [
                'grant_type' => 'client_credentials',
            ]);

            $data = $response->json();
            if (! array_key_exists('access_token', $data)) {
                throw new Exception($data['error_description']);
            }

            return $data['access_token'];
        } catch (Exception $er) {
            throw new Exception($er->getMessage());
        }
    }

    private function handleResponse($response)
    {
        $jsonResponse = $response->json();

        // $httpStatusCode = $response->status();
        return $jsonResponse;
    }
}
