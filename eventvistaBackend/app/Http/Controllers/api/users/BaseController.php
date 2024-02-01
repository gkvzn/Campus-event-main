<?php

namespace App\Http\Controllers\api\users;

use App\Http\Controllers\Controller;
use App\Models\Fcmtoken;
use App\Models\Otp;
use App\Models\User;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Carbon\Carbon;
use Exception;
use Google\Client;
use GuzzleHttp\Client as Guzzleclient;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Session;

class BaseController extends Controller
{
    use ApiBase, UserBase;

    // signin
    public function signin(Request $request)
    {
        $rules = [
            'email' => 'required|email', 'password' => 'required',
        ];
        // validation response
        $Response = $this->Response($request, $rules);
        // redirect if response not valid
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        // credentials
        // atttempt auth for email and password
        $auth = Auth::attempt(['email' => $request->email, 'password' => $request->password]);

        if ($auth) {


            $this->Response['flag'] = 1;
            $this->Response['message'] = localize('User Login Successfully');
            $this->Response['user'] = Auth::user();


            Auth::login(Auth::user());


            $this->Response['access_token'] = auth()->user()->createToken('UserApiToken')->plainTextToken;



            if ($request->has('fcm_token')) {
                $this->__fcm_save($request->fcm_token);
            }

            return response()->json($this->Response, 200);
            // resposne send
        } else {
            return $this->redirectIfNotAvailable(400, 'Pease add a correct email and passowrd.');
        }
    }


    public function saveCategories(Request $request)
    {
        return response()->json(['status', 1, $request->all()]);
    }
   
    // signup
    public function signup(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'gender' => 'required',
            'password' => 'required',
        ];

        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        // /check gender string i s coorect
        if (!in_array($request->gender, User::GENDER)) {
            return $this->redirectIfNotAvailable(400, localize('add_correct_gender'));
        }
        // verify phone
        if (!$this->__verify_unique('phone', $request->phone)) {
            return $this->redirectIfNotAvailable(400, localize('phone_already_exist'));
        }
        // verify email
        if (!$this->__verify_unique('email', $request->email)) {
            return $this->redirectIfNotAvailable(400, localize('email_already_exist'));
        }
        // /create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'city' => $request->city,
            'password' => Hash::make($request->password),
        ]);

        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('user_signup_successfully');
        Auth::login($user);
        // if ($request->through == 'email')
        //     $this->__create_otp_send_email();
        // $this->__create_stripe_customer();
        if ($request->guest_id != null) {
            $this->__cart_connection($request->guest_id, Auth::user()->id);
        }
        $this->Response['user'] = User::where('id', Auth::user()->id)->first();
        $this->Response['access_token'] = auth()->user()->createToken('UserApiToken')->plainTextToken;
        if ($request->has('fcm_token')) {
            $this->__fcm_save($request->fcm_token);
        }

        return response()->json($this->Response, 200);
    }



    //google photos save in storage
    protected function StoreAvatar($blob, $id): string
    {
        try {
            $img = file_get_contents($blob);
            Storage::disk('local')->put('uploads/profiles/' . $id . '.jpg', $img);

            return 'uploads/profiles/' . $id . '.jpg';
        } catch (\Throwable $th) {
            return 'uploads/profiles/default.jpg';
        }
    }


    //new password
    //resetVerify
    public function forgetPassword(Request $request)
    {
        $rules = [
            'phone' => 'required',
            'otp' => 'required',
            'password' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $user = User::where('phone', $request->phone)->where('verification_code', $request->otp)->update(
            [
                'verification_code' => null,
                'password' => Hash::make($request->password),
            ]
        );
        if ($user) {
            $this->Response['flag'] = 1;
            $this->Response['message'] = 'Your password has been successfully changed.';

            return response()->json($this->Response, 200);
        } else {
            $this->Response['flag'] = 0;
            $this->Response['errors'][0] = 'The OTP has expired. Please request a new OTP.';

            return response()->json($this->Response, 400);
        }
    }

    public function logOut(Request $request)
    {
        // $request->user()->tokens()->delete();
        if ($request->has('fcm_token')) {
            $this->__fcm_delete($request->fcm_token);
        }
        $request->user()->currentAccessToken()->delete();
        $this->Response['flag'] = 1;
        $this->Response['message'] = 'uccessfully logged out.';

        return response()->json($this->Response, 200);
    }


    // Reset Password
    public function ResetPasswordEmail(Request $request)
    {
        $rules = [
            'email' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        if (User::where('email', $request->email)->count() == 0) {
            return $this->redirectIfNotAvailable(400, localize('email_not_found_please_check_email'));
        }
        if (!$this->__create_otp_send_email($request->email, true)) {
            return $this->redirectIfNotAvailable(400, localize('email_not_found_please_check_email'));
        }
        $this->Response['flag'] = 1;
        $this->Response['email'] = $request->email;
        $this->Response['message'] = localize('otp_send_to_email');

        return response()->json($this->Response, 200);
    }

    public function ResetPasswordUpdate(Request $request)
    {
        $rules = [
            'email' => 'required',
            'otp' => 'required',
            'password' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        $user = User::where('email', $request->email)->where('verification_code', $request->otp)->update(
            [
                'verification_code' => null,
                'password' => Hash::make($request->password),
            ]
        );
        if ($user) {
            $Auth = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
            if (!$Auth) {
                return $this->redirectIfNotAvailable(400, localize('session_not_verified_login_again'));
            }
            Auth::login(User::where('email', $request->email)->first());
            if ($request->guest_id != null) {
                $this->__cart_connection($request->guest_id, Auth::user()->id);
            }
            $this->Response['flag'] = 1;
            $this->Response['message'] = localize('password_reset_success_fully');
            $this->Response['user'] = Auth::user();
            $this->Response['access_token'] = auth()->user()->createToken('UserApiToken')->plainTextToken;
            if ($request->has('fcm_token')) {
                $this->__fcm_save($request->fcm_token);
            }

            return response()->json($this->Response, 200);
        } else {
            $this->Response['flag'] = 0;
            $this->Response['errors'][0] = localize('otp_expire_request_new_otp');

            return response()->json($this->Response, 400);
        }
    }

    protected function __fcm_save($token): bool
    {
        $check = Fcmtoken::where('user_id', Auth::user()->id)->where('token', $token)->first();
        if ($check != null) {
            $check->delete();
        }
        $FcmToken = new Fcmtoken();
        $FcmToken->user_id = Auth::user()->id;
        $FcmToken->token = $token;
        $FcmToken->save();

        return true;
    }

    protected function __fcm_delete($token): bool
    {
        return Fcmtoken::where('user_id', Auth::user()->id)->where('token', $token)->delete();
    }

    // __auth_verify
    public function __auth_verify(): JsonResponse
    {
        $this->Response['flag'] = 1;
        $this->Response['user'] = Auth::user()->makeHidden(User::API_HIDDEN);

        return response()->json($this->Response, 200);
    }
}