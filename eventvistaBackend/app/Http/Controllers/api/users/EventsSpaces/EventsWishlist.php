<?php

namespace App\Http\Controllers\api\users\EventsSpaces;

use App\Http\Controllers\Controller;
use App\Models\Business\Events;
use App\Models\Business\EventsWishlist as BusinessEventsWishlist;
use App\Models\BusinessEventsCalender;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Illuminate\Http\Request;

class EventsWishlist extends Controller
{
    use ApiBase, UserBase;

    public function __get_wishlist()
    {
        // get wishlist
        $wishlist = BusinessEventsWishlist::where('user_id', auth()->user()->id)
            ->with('event')
            ->get();
        // response
        $this->Response['flag'] = 1;
        $this->Response['data'] = $wishlist;


        return response()->json($this->Response, 200);
    }


    public function __get_calendar()
    {
        // get calender
        $wishlist = BusinessEventsCalender::where('user_id', auth()->user()->id)->with('event')->get();
        // response
        $this->Response['flag'] = 1;
        $this->Response['data'] = $wishlist;


        return response()->json($this->Response, 200);
    }

    // add to wishlist
    public function __add_wishlist(Request $request)
    {
        $rules = [
            'event_id' => 'required',
        ];

        $Response = $this->Response($request, $rules);

        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        if (Events::find($request->event_id) == null) {
            return $this->redirectIfNotAvailable(400, localize('Event not found in yourwishlist'));
        }

        $userId = auth()->user()->id;

        $wishlist = BusinessEventsWishlist::select('id', 'event_id')->where('user_id', $userId)->where('event_id', $request->event_id)->count();

        if ($wishlist > 0) {
            return $this->redirectIfNotAvailable(400, localize('Event already exist in your wishlist'));
        }

        $wishlist = new BusinessEventsWishlist();

        $wishlist->user_id = $userId;

        $wishlist->event_id = $request->event_id;

        $wishlist->save();

        $this->Response['message'] = localize('Event added to your wishlist');

        // $this->Response['data'] = $wishlist;
        return response()->json($this->Response, 200);
    }


    // add to wishlist
    public function __add_calendar(Request $request)
    {
        $rules = [
            'event_id' => 'required',
        ];

        $Response = $this->Response($request, $rules);

        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        if (Events::find($request->event_id) == null) {
            return $this->redirectIfNotAvailable(400, localize('Event not found in your Calendar'));
        }

        $userId = auth()->user()->id;

        $wishlist = BusinessEventsCalender::select('id', 'event_id')->where('user_id', $userId)->where('event_id', $request->event_id)->count();

        if ($wishlist > 0) {
            return $this->redirectIfNotAvailable(400, localize('Event already exist in your Calendar'));
        }

        $wishlist = new BusinessEventsCalender();

        $wishlist->user_id = $userId;

        $wishlist->event_id = $request->event_id;

        $wishlist->save();

        $this->Response['message'] = localize('Event added to your calendar');

        // $this->Response['data'] = $wishlist;
        return response()->json($this->Response, 200);
    }


    // delete Calendar
    public function __delete_calendar(Request $request)
    {
        $rules = [
            'event_id' => 'required',
        ];

        $userId = auth()->user()->id;

        $Response = $this->Response($request, $rules);

        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        $wishlist = BusinessEventsCalender::where('event_id', $request->event_id)->where('user_id', $userId)->first();

        if ($wishlist == null) {
            return $this->redirectIfNotAvailable(400, localize('Event not found in your Calendar'));
        }

        $wishlist = BusinessEventsCalender::where('event_id', $request->event_id)->where('user_id', $userId)->first();


        $wishlist->delete();

        $this->Response['flag'] = 1;

        $this->Response['message'] = localize('Event remove from your Calender');

        return response()->json($this->Response, 200);
    }





    // delete wishlist
    public function __delete_wishlist(Request $request)
    {
        $rules = [
            'event_id' => 'required',
        ];

        $userId = auth()->user()->id;

        $Response = $this->Response($request, $rules);

        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        $wishlist = BusinessEventsWishlist::where('event_id', $request->event_id)->where('user_id', $userId)->first();

        if ($wishlist == null) {
            return $this->redirectIfNotAvailable(400, localize('Event not found in your wishlist'));
        }

        $wishlist->delete();

        $this->Response['flag'] = 1;

        $this->Response['message'] = localize('Event remove from your wishlist');

        return response()->json($this->Response, 200);
    }
}
