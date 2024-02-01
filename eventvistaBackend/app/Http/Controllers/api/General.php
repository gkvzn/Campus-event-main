<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\contactUs;
use App\Models\FaqsDb;
use App\Models\Page;
use App\Models\Sliders;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class General extends Controller
{
    use ApiBase, UserBase;


   
    public function __data_deletion_instructions(): JsonResponse
    {
        $Page = Page::where('id', 4)->without('page_localizations')->first();
        $this->Response['flag'] = 4;
        $this->Response['data'] = $Page ? $Page->makeHidden(Page::API_HIIDEN) : '';

        return response()->json($this->Response, 200);
    }

  

    public function __get_page(Request $request): JsonResponse
    {
        $rules = [
            'page' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        $Page = Page::where('id', $request->input('page'))->without('page_localizations')->first();

        $this->Response['flag'] = 1;
        $this->Response['data'] = $Page ? $Page->makeHidden(Page::API_HIIDEN) : '';

        return response()->json($this->Response, 200);
    }


    // get contactus data

    public function __get_contact_us(): JsonResponse
    {
        $this->Response['flag'] = 1;
        $this->Response['data'] = [
            'contact_us_heading' => getSetting('contact_us_heading') ?? '',
            'contact_us_short_description' => getSetting('contact_us_short_description') ?? '',
            'contact_us_phone_number' => getSetting('contact_us_phone_number') ?? '',
            'contact_us_email' => getSetting('contact_us_email') ?? '',
            'contact_us_address' => getSetting('contact_us_address') ?? '',
        ];

        return response()->json($this->Response, 200);
    }

    public function __send_contact_us(Request $request): JsonResponse
    {
        $rules = [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'message' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $details = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'message' => $request->message,
        ];
        Mail::to(env('MAIL_TO'))->send(new contactUs($details));
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('thank_you_for_contacting_us!_we_have_received_your_message_and_will_get_back_to_you_soon');

        return response()->json($this->Response, 200);
    }
}