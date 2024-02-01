<?php

namespace App\Http\Controllers\api\users\Customers;

use App\Http\Controllers\Controller;
use App\Models\UserAddress;
use App\Traits\ApiBase;
use Illuminate\Http\Request;

class Address extends Controller
{
    use ApiBase;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        $addresses = UserAddress::where('user_id', $user->id)->get();
        $this->Response['flag'] = 1;
        $this->Response['data'] = $addresses;

        return response()->json($this->Response, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = auth()->user();

        $rules = [
            'name' => 'required',
            'city' => 'required',
            'address_1' => 'required',
            'is_default' => 'required',
            'lat' => 'required',
            'long' => 'required',
        ];

        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }

        if ($request->has('is_default')) {
            if ($request->is_default != 1 && $request->is_default != 0) {
                return $this->redirectIfNotAvailable(400, localize('add_correct_default_address'));
            }
        }

        $addresses = $user->addresses()->latest()->count();
        if ($addresses >= 4) {
            return $this->redirectIfNotAvailable(400, localize('you_have_reached_the_maximum_limit_for_addresses'));
        }
        $address = new UserAddress();
        $address->name = $request->name;
        $address->user_id = $user->id;
        $address->city = $request->city;
        $address->address_1 = $request->address_1;
        // if ($request->has('postal'))
        //     $address->postal      =    $request->postal;
        // if ($request->has('state'))F
        //     $address->state       =    $request->state;
        $address->lat = $request->lat;
        $address->long = $request->long;
        if ($request->is_default == 1) {
            $prevDefault = UserAddress::where('user_id', $user->id)->where('is_default', 1)->first();
            if (! is_null($prevDefault)) {
                $prevDefault->is_default = 0;
                $prevDefault->save();
            }
        }
        $address->is_default = $request->is_default;
        $address->save();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('the_address_has_been_successfully_added');

        return response()->json($this->Response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $rules = [
            'id' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $user = auth()->user();
        $address = $user->addresses()->where('id', $request->id)->first();
        if ($address == null) {
            return $this->redirectIfNotAvailable(400, localize('the_address_you_entered_could_not_be_found_please_check_and_try_again'));
        }
        $this->Response['flag'] = 1;
        $this->Response['data'] = $address;

        return response()->json($this->Response, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = auth()->user();
        $rules = [
            'id' => 'required',
            'name' => 'required',
            'city' => 'required',
            'address_1' => 'required',

        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        // check is default is same
        if ($request->has('is_default')) {
            if ($request->is_default != 1 && $request->is_default != 0) {
                return $this->redirectIfNotAvailable(400, localize('add_correct_default_address'));
            }
        }
        // check is default is same
        $address = UserAddress::where('id', $request->id)->where('user_id', $user->id)->first();
        if ($address == null) {
            return $this->redirectIfNotAvailable(400, localize('the_address_you_entered_could_not_be_found_please_check_and_try_again'));
        }
        $address->name = $request->name;
        $address->city = $request->city;
        $address->address_1 = $request->address_1;
        if ($request->has('lat')) {
            $address->lat = $request->lat;
        }
        if ($request->has('long')) {
            $address->long = $request->long;
        }
        // if ($request->has('postal'))
        //     $address->postal      =    $request->postal;
        // if ($request->has('state'))
        //     $address->state       =    $request->state;
        if ($request->is_default == 1) {
            $prevDefault = UserAddress::where('user_id', $user->id)->where('id', '!=', $request->id)->where('is_default', 1)->first();
            if (! is_null($prevDefault)) {
                $prevDefault->is_default = 0;
                $prevDefault->save();
            }
        }
        $address->is_default = $request->is_default;
        $address->save();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('the_address_has_been_successfully_updated');

        return response()->json($this->Response, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $user = auth()->user();
        $rules = [
            'id' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $address = UserAddress::where('id', $request->input('id'))->where('user_id', $user->id)->first();
        if ($address == null) {
            return $this->redirectIfNotAvailable(400, localize('the_address_you_entered_could_not_be_found_please_check_and_try_again'));
        }
        if ($address->is_default == 1) {
            return $this->redirectIfNotAvailable(400, localize('you_cannot_delete_the_default_address'));
        }
        $address->delete();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('the_address_has_been_successfully_deleted');

        return response()->json($this->Response, 200);
    }

    // get solo
    public function get_default_address()
    {
        $this->Response['flag'] = 1;
        $this->Response['data'] = UserAddress::where('user_id', auth()->user()->id)->where('is_default', 1)->first();

        return response()->json($this->Response, 200);
    }
}
