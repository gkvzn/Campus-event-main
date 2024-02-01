<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Business\EventCategories;
use App\Models\Business\EventCoupon;
use App\Models\Business\Events;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CouponsController extends Controller
{

    // Coupon list
    public function index(Request $request)
    {


        $searchKey = null;
        $coupons = EventCoupon::latest();
        if ($request->search != null) {
            $coupons = $coupons->where('code', 'like', '%' . $request->search . '%');
            $searchKey = $request->search;
        }

        $coupons = $coupons->paginate(paginationNumber());

        return view('backend.events.coupons.index', compact('coupons', 'searchKey'));
    }

    // return view of create form
    public function create()
    {
        $events = Events::IsVisible()->IsStatus()->get();
        $categories = EventCategories::get();

        return view('backend.events.coupons.create', compact('categories', 'events'));
    }

    // Coupon store
    public function store(Request $request)
    {
        if (Str::contains($request->date_range, 'to')) {
            $date_var = explode(' to ', $request->date_range);
        } else {
            $date_var = [date('d-m-Y'), date('d-m-Y')];
        }
        if (EventCoupon::where('code', $request->code)->count() > 0) {
            flash(localize('Coupon already exist for this coupon code'))->error();

            return back();
        }

        $coupon = new EventCoupon();
        $coupon->code = $request->code;
        $coupon->discount_type = $request->discount_type;
        $coupon->discount_value = $request->discount_value;

        $coupon->start_date = strtotime($date_var[0]);
        $coupon->end_date = strtotime($date_var[1]);

        $coupon->min_spend = $request->min_spend;
        $coupon->max_discount_amount = $request->max_discount_amount;

        $coupon->total_usage_limit = $request->total_usage_limit;
        $coupon->customer_usage_limit = $request->customer_usage_limit;

        if ($request->event_ids) {
            $coupon->event_ids = json_encode($request->event_ids);
        }
        if ($request->category_ids) {
            $coupon->event_category_ids = json_encode($request->category_ids);
        }

        $coupon->save();

        flash(localize('Coupon has been saved successfully'))->success();

        return redirect()->route('business.events.coupons.index');
    }

    // edit Coupon
    public function edit(Request $request, $id)
    {
        $events = Events::IsVisible()->IsStatus()->get();
        $categories = EventCategories::get();

        $coupon = EventCoupon::findOrFail($id);

        return view('backend.events.coupons.edit', compact('coupon', 'events', 'categories'));
    }

    // update Coupon
    public function update(Request $request)
    {
        if (Str::contains($request->date_range, 'to')) {
            $date_var = explode(' to ', $request->date_range);
        } else {
            $date_var = [date('d-m-Y'), date('d-m-Y')];
        }

        if (EventCoupon::where('id', '!=', $request->id)->where('code', $request->code)->count() > 0) {
            flash(localize('Coupon already exist for this coupon code'))->error();

            return back();
        }

        $coupon = EventCoupon::findOrFail($request->id);
        $coupon->code = $request->code;
        $coupon->discount_type = $request->discount_type;
        $coupon->discount_value = $request->discount_value;

        $coupon->start_date = strtotime($date_var[0]);
        $coupon->end_date = strtotime($date_var[1]);

        $coupon->min_spend = $request->min_spend;
        $coupon->max_discount_amount = $request->max_discount_amount;

        $coupon->total_usage_limit = $request->total_usage_limit;
        $coupon->customer_usage_limit = $request->customer_usage_limit;

        if ($request->event_ids) {
            $coupon->event_ids = json_encode($request->event_ids);
        } else {
            $coupon->event_ids = $request->event_ids;
        }

        if ($request->category_ids != '') {
            $coupon->event_category_ids = json_encode($request->category_ids);
        } else {
            $coupon->event_category_ids = $request->category_ids;
        }

        $coupon->save();

        flash(localize('Coupon has been updated successfully'))->success();

        return back();
    }

    // delete Coupon
    public function delete($id)
    {
        $coupon = EventCoupon::findOrFail($id);

        $coupon->delete();

        flash(localize('Coupon has been deleted successfully'))->success();

        return back();
    }
}
