<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    // registration form validation
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    // make new registration here
    protected function create(array $data)
    {
        if (filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            // set guest_user_id to user_id from carts
            if (isset($_COOKIE['guest_user_id'])) {
                $carts = Cart::where('guest_user_id', (int) $_COOKIE['guest_user_id'])->get();
                $userId = $user->id;
                if ($carts) {
                    foreach ($carts as $cart) {
                        $existInUserCart = Cart::where('user_id', $userId)->where('product_variation_id', $cart->product_variation_id)->first();
                        if (! is_null($existInUserCart)) {
                            $existInUserCart->qty += $cart->qty;
                            $existInUserCart->save();
                            $cart->delete();
                        } else {
                            $cart->user_id = $userId;
                            $cart->guest_user_id = null;
                            $cart->save();
                        }
                    }
                }
            }

            return $user;
        }

        return null;
    }

    // register new customer here
    public function register(Request $request)
    {

        if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            if (User::where('email', $request->email)->first() != null) {
                flash(localize('Email or Phone already exists.'))->error();

                return back()->withInput();
            }
        }

        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                flash(localize($error))->error();
            }

            return back()->withInput();
        }

        $user = $this->create($request->all());

        if ($user) {
            $this->guard()->login($user);
        }

        if ($user->email != null) {
            if (getSetting('registration_verification_with') == 'email') {
                try {
                    $user->sendVerificationNotification();
                    flash(localize('Registration successful. Please verify your email.'))->success();
                } catch (\Throwable $th) {
                    $user->delete();
                    flash(localize('Registration failed. Please try again later.'))->error();
                }
            } else {
                $user->email_or_otp_verified = 1;
                $user->email_verified_at = Carbon::now();
                $user->save();
                flash(localize('Registration successful.'))->success();
            }
        }

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    // action after registration
    protected function registered(Request $request, $user)
    {
        if ($user->email == null || $user->email_or_otp_verified == 0) {
            return redirect()->route('verification.notice');
        } elseif (session('link') != null) {
            return redirect(session('link'));
        } else {
            return redirect()->route('customers.dashboard');
        }
    }
}