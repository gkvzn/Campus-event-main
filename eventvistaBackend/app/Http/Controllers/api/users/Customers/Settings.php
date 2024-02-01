<?php

namespace App\Http\Controllers\api\users\Customers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\User;
use App\Models\UserAddress;
use App\Traits\ApiBase;
use App\Traits\UserBase;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Stripe\Customer;
use Stripe\Stripe;
use Twilio\Rest\Client;

class Settings extends Controller
{
    use ApiBase, UserBase;

    public function __profile_save(Request $request)
    {
        $user = User::find(Auth::user()->id);
        if ($request->has('name')) {
            $user->name = $request->name;
        }
        // if ($request->has('email')) {
        //     if (!$this->__verify_unique('email', $request->email)) return $this->redirectIfNotAvailable(400, localize('this_email_already_exists_please_use_a_different_email'));
        //     $user->email = $request->email;
        // }
        if ($request->has('phone')) {
            if (! $this->__verify_unique('phone', $request->phone)) {
                return $this->redirectIfNotAvailable(400, localize('phone_already_exist'));
            }
            $user->phone = $request->phone;
            // try {
            //     $twilio = new Client(env("TWILIO_ACCOUNT_SID"), env("TWILIO_AUTH_TOKEN"));
            //     $user->phone = $request->phone;
            //     $phone_number = $twilio->lookups->v2->phoneNumbers($request->phone)
            //         ->fetch();
            //     if (!$phone_number->valid) return $this->redirectIfNotAvailable(400, 'Please add a correct phone number.');
            // } catch (\Exception $er) {
            //     return $this->redirectIfNotAvailable(400, 'There is an issue with the server. Please try again later.');
            // }
        }
        if ($request->has('gender')) {
            $user->gender = $request->gender;
        }
        if ($request->has('city')) {
            $user->city = $request->city;
        }
        $user->save();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('your_profile_has_been_successfully_updated');
        $this->Response['user'] = User::where('id', Auth::user()->id)->first();

        return response()->json($this->Response, 200);
    }

    public function __change_password(Request $request)
    {
        $rules = [
            'old_password' => 'required',
            'new_password' => 'required|min:6',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        if (! Hash::check($request->old_password, Auth::user()->password)) {
            return $this->redirectIfNotAvailable(400, localize('the_old_password_does_not_match_please_try_again'));
        }
        $User = User::find(Auth::user()->id);
        $User->password = Hash::make($request->new_password);
        $User->save();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('Your_password_has_been_successfully_changed');

        return response()->json($this->Response, 200);
    }

    public function __update_avatar(Request $request)
    {
        $rules = [
            'avatar' => 'required',
        ];
        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        // $size = $request->file('avatar')->getSize();
        $ext = $request->file('avatar')->getClientOriginalExtension();
        if (! in_array($ext, ['jpg', 'png', 'jpeg', 'PNG', 'JPG'])) {
            return $this->redirectIfNotAvailable(400, localize('please_only_upload_images_in_jpg_or_png_format'));
        }
        $avatar_name = '';
        $avatar_name = uniqid().'.'.$ext;
        $request->file('avatar')->move(public_path('uploads/profiles'), $avatar_name);
        if (file_exists(Auth::user()->avatar)) {
            unlink(Auth::user()->avatar);
        }
        User::where('id', Auth::user()->id)->update([
            'avatar' => 'uploads/profiles/'.$avatar_name,
        ]);
        $this->Response['flag'] = 1;
        $this->Response['avatar'] = 'uploads/profiles/'.$avatar_name;
        $this->Response['message'] = localize('your_profile_photo_has_been_updated');

        return response()->json($this->Response, 200);
    }

    public function __delete_account(Request $request)
    {
        $this->Response['flag'] = 0;
        $this->Response['message'] = 'depricated';

        return response()->json($this->Response, 400);
        // $rules = array(
        //     'old_password' => 'required'
        // );
        // DB::beginTransaction();
        // $customerId  = Auth::user()->customer_id;
        // try {
        //     // stripe setup
        //     $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
        //     $Response  =  $this->Response($request, $rules);
        //     if ($Response['flag'] !== 1) return response()->json($Response, 400);
        //     if (!Hash::check($request->old_password, Auth::user()->password)) return $this->redirectIfNotAvailable(400, 'The old password does not match. Please try again.');
        //     $avatar = Auth::user()->avatar;
        //     $userId = Auth::user()->id;
        //     DB::table('personal_access_tokens')->where('tokenable_id', $userId)->delete();
        //     // delete user
        //     UserAddress::where('user_id', $userId)->delete();
        //     // delete orders
        //     foreach (Order::where('user_id', $userId)->get() as $key => $order) {
        //         OrderItem::where('order_id', $order->id)->delete();
        //         OrderGroup::where('id', $order->order_group_id)->delete();
        //         Order::where('id', $order->id)->delete();
        //     }
        //     User::where('id', $userId)->delete();
        //     if (file_exists($avatar))  unlink($avatar);

        //     try {
        //         if (Auth::user()->customer_id != null) {
        //             $stripe->customers->delete(
        //                 Auth::user()->customer_id,
        //                 []
        //             );
        //         }
        //     } catch (Exception $er) {
        //         throw new Exception('FromCustomer');
        //     }
        //     $this->Response['flag'] = 1;
        //     $this->Response['message'] = 'Your Account Has Been Deleted Successfully.';
        //     DB::commit();
        //     return response()->json($this->Response, 200);
        // } catch (\Exception $er) {
        //     if ($er->getMessage() == 'FromCustomer') {
        //         $this->Response['flag'] = 1;
        //         $this->Response['message'] = 'Your Account Has Been Deleted Successfully.';
        //         DB::commit();
        //         return response()->json($this->Response, 200);
        //     }
        //     DB::rollBack();
        //     return $this->redirectIfNotAvailable(400, 'SomeThing Went Wrong..', 0);
        // }
    }

    public function __fcm_off(Request $request)
    {
        $rules = [
            'status' => 'required',
        ];

        $Response = $this->Response($request, $rules);
        if ($Response['flag'] !== 1) {
            return response()->json($Response, 400);
        }
        if (! in_array($request->status, [0, 1])) {
            return $this->redirectIfNotAvailable(400, localize('you_only_add_vlaue_0_or_1'));
        }
        $user = User::find(Auth::user()->id);
        $user->fcm = $request->status;
        $user->save();
        $this->Response['flag'] = 1;
        $this->Response['message'] = localize('push_notification_status_updated');

        return response()->json($this->Response, 200);
    }
}
