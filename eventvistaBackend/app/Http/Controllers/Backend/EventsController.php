<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Jobs\EventStatus;
use App\Models\Business\EventCategories;
use App\Models\Business\Events;
use App\Models\Business\EventsLocalization;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EventsController extends Controller
{
    protected $user = null;

    // product list
    public function index(Request $request)
    {

        $searchKey = null;
        $is_published = null;

        $events = Events::IsUser()->IsStatus()->with('category');

        // conditional - search by
        if ($request->search != null) {
            $products = $events->where('name', 'like', '%' . $request->search . '%');
            $searchKey = $request->search;
        }

        if ($request->is_accepted != null) {
            $products = $events->where('status', $request->is_accepted);
        }

        if ($request->is_featured != null) {
            $products = $events->where('is_featured', $request->is_featured);
        }

        if ($request->is_published != null) {
            $events = $events->where('is_visible', $request->is_published);
        }

        $events = $events->paginate(paginationNumber());

        return view('backend.events.index', compact('events', 'searchKey', 'is_published'));
    }

    // return view of create form
    public function create()
    {
        $categories = EventCategories::get();

        return view('backend.events.create', compact('categories'));
    }

    // add new data
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
            'category_id' => 'required',
            'date_range' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'location' => 'required',
            'is_published' => 'required',
        ];


        // __dynamic_ticket_pricing_rules


        // dd($rules);
        $request->validate($rules);

        $user = auth()->user();
        // create event
        $event = new Events();
        $event->user_id = $user->id;
        $event->event_category_id = $request->category_id;
        $event->added_by = $user->name;
        $event->name = $request->name;
        $event->slug = Str::slug($request->name, '-') . '-' . strtolower(Str::random(5));

        // start date and end date
        if ($request->date_range != null) {
            if (Str::contains($request->date_range, 'to')) {
                $date_var = explode(' to ', $request->date_range);
            } else {
                $date_var = [$request->date_range, $request->date_range];
            }

            $event->start_date = $date_var[0];
            $event->end_date = $date_var[1];
        }

        $event->is_visible = $request->is_published;

        $event->start_time = $request->start_time;

        $event->end_time = $request->end_time;

        $event->location = $request->location;

        $event->thumbnail_image = $request->image;
        $event->event_banner = $request->event_banner;

        $event->description = $request->description;

        $event->save();


        // Events Localization
        $eventLocalization = EventsLocalization::firstOrNew(['lang_key' => env('DEFAULT_LANGUAGE'), 'event_id' => $event->id]);

        $eventLocalization->name = $request->name;

        $eventLocalization->description = $request->description;

        $eventLocalization->save();

        flash(localize('Events has been inserted successfully'))->success();

        return redirect()->route('admin.events.index');
    }

    // return view of edit form
    public function edit(Request $request, $id)
    {
        $lang_key = $request->lang_key;

        $categories = EventCategories::get();

        $event = Events::IsUser()->IsStatus()->where('id', $id)->firstOrFail();

        return view('backend.events..edit', compact('event', 'lang_key', 'categories'));
    }

    // update product
    public function update(Request $request)
    {

        $event = Events::IsUser()->IsStatus()->where('id', $request->id)->firstOrFail();

        if ($request->lang_key == env('DEFAULT_LANGUAGE'))
            $rules = [
                'name' => 'required',
                'description' => 'required',
                'image' => 'required',
                'category_id' => 'required',
                'date_range' => 'required',
                'start_time' => 'required',
                'end_time' => 'required',
                'location' => 'required',
                'is_published' => 'required',
            ];

        else
            $rules = [
                'name' => 'required',
                'description' => 'required'
            ];


        $request->validate($rules);

        if ($request->lang_key == env('DEFAULT_LANGUAGE')) {
            // create event

            $event->event_category_id = $request->category_id;

            $event->name = $request->name;

            $event->slug = Str::slug($request->name, '-') . '-' . strtolower(Str::random(5));

            // start date and end date
            if ($request->date_range != null) {
                if (Str::contains($request->date_range, 'to')) {
                    $date_var = explode(' to ', $request->date_range);
                } else {
                    $date_var = [$request->date_range, $request->date_range];
                }

                $event->start_date = $date_var[0];

                $event->end_date = $date_var[1];
            }

            $event->is_visible = $request->is_published;

            $event->start_time = $request->start_time;

            $event->end_time = $request->end_time;

            $event->location = $request->location;

            $event->thumbnail_image = $request->image;
            $event->event_banner = $request->event_banner;

            $event->description = $request->description;
            $event->save();
        }
        // Events Localization
        $eventLocalization = EventsLocalization::firstOrNew(['lang_key' => LangKey($request->lang_key), 'event_id' => $event->id]);

        $eventLocalization->name = $request->name;

        $eventLocalization->description = $request->description;

        $eventLocalization->save();

        flash(localize('Events has been inserted successfully'))->success();

        return back();
    }

    // update status
    public function updateFeatured(Request $request)
    {
        $product = Events::findOrFail($request->id);
        $product->is_featured = $request->status;
        if ($product->save()) {
            return 1;
        }

        return 0;
    }

    // update published
    public function update_visibility(Request $request)
    {
        $product = Events::IsUser()->IsStatus()->findOrFail($request->id);
        $product->is_visible = $request->status;
        if ($product->save()) {
            return 1;
        }

        return 0;
    }

    // delete product
    public function delete($id)
    {
        $product = Events::where('id', $id)->first();

        $product->delete();
        flash(localize('Event Deleted Successfully'))->success();
        return back();
    }
}