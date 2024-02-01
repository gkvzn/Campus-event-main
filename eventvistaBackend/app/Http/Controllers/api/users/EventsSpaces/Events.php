<?php

namespace App\Http\Controllers\api\users\EventsSpaces;

use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use App\Models\Business\EventCategories;
use App\Models\Business\Events as EventsModel;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Business\EventsWishlist as BusinessEventsWishlist;
use App\Models\MostViewsCategory;
use App\Models\MostViewsEvent;
use Session;

class Events extends Controller
{
    use ApiBase, UserBase;

    // get all events
    public function __all(Request $request)
    {
        // totoal records
        $take = 20;
        $query = $request->query;
        $category = $request->category;

        if ($request->has('take')) {
            $take = $request->take;
        }

        if ($request->has('take')) {
            $take = $request->take;
        }

        if ($request->has('all')) {
            $Records = EventsModel::when($request->has('category'), function ($q) use ($category) {
                $q->where('event_category_id', $category);
            })->when($request->has('query'), function ($q) use ($query) {
                $q->where('name', 'LIKE', '%' . $query . '%');
            })->whereDate('end_date', '>=', now()) // Filter events with a date greater than or equal to the current date
                ->IsVisible()->IsStatus()->setEmptyString('description')->latest()->paginate($take);
        } else {
            $Records = EventsModel::when($request->has('query'), function ($q) use ($query) {
                $q->where('name', 'LIKE', '%' . $query . '%');
            })
                ->join('most_views_categories', 'most_views_categories.category_id', '=', 'events.event_category_id')
                ->whereDate('events.end_date', '>=', now()) // Filter events with a date greater than or equal to the current date
                ->IsVisible()->IsStatus()->setEmptyString('description')
                ->groupBy('events.id') // Group by event ID to avoid duplicates
                ->orderByDesc(DB::raw('COUNT(most_views_categories.id)')) // Order by the count of views for each category
                ->select('events.*')
                ->latest()
                ->paginate($take);
        }






        $this->Response['flag'] = 1;
        $this->Response['data'] = $Records;

        return response()->json($this->Response, 200);
    }

    //categories
    public function __categories()
    {
        $this->Response['flag'] = 1;
        $this->Response['data'] = EventCategories::latest()->get();

        return response()->json($this->Response, 200);
    }

    // get solo events
    public function __solo(Request $request)
    {

        $rules = [
            'item' => 'required',
        ];;


        $Response = $this->Response($request, $rules);

        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        // get products
        $item = EventsModel::where('id', $request->item)->IsVisible()->IsStatus()->first();



        if ($item == null) {
            return $this->redirectIfNotAvailable(400, localize('event_not_found'));
        }


        if (isset($request->user)) {

            $find = MostViewsCategory::where('category_id', $item->event_category_id)->where('user_id', $request->user)->first();

            if ($find == null) {
                $mostViewCateory = new  MostViewsCategory();
                $mostViewCateory->user_id = $request->user;
                $mostViewCateory->category_id = $item->event_category_id;
                $mostViewCateory->save();
            }

            $finds = MostViewsEvent::where('event_id', $item->id)->where('user_id', $request->user)->first();
            if ($finds == null) {

                $mostViewEvent = new  MostViewsEvent();
                $mostViewEvent->event_id = $item->id;
                $mostViewEvent->user_id = $request->user;;
                $mostViewEvent->save();
            }
        }


        $this->Response['flag'] = 1;

        $this->Response['data'] = $item;

        // $this->Response['user'] = auth()->user()->id;

        return response()->json($this->Response, 200);
    }
}
