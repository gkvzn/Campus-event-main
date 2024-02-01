<?php

namespace App\Models;

use App\Notifications\EmailVerificationNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, HasRoles, Notifiable;

    const API_HIDDEN = [
        // 'role_id',
        // 'user_type',
        // 'verification_code',
        // 'new_email_verification_code',
        // 'postal_code',
        // 'user_balance',
        // 'is_banned',
        // 'shop_id',
        // 'customer_id',
        // 'setup_intent',
        // 'email_verified_at',
        // 'created_at',
        // 'updated_at',
        // 'deleted_at'
    ];

    const GENDER = [
        'male',
        'female',
        'other',
    ];

    protected $hiddens = ['added_by', 'brand_id', 'unit_id', 'thumbnail_image', 'gallery_images', 'product_tags', 'sell_target', 'is_published', 'is_featured', 'min_purchase_qty', 'max_purchase_qty', 'has_variation', 'has_warranty', 'total_sale_count', 'standard_delivery_hours', 'express_delivery_hours', 'size_guide', 'meta_title', 'meta_description', 'meta_img', 'created_at', 'updated_at', 'deleted_at'];

    // email verification notification
    public function sendVerificationNotification()
    {
        $this->notify(new EmailVerificationNotification());
    }

    // fillables
    protected $fillable = [
        'name',
        'email',
        'phone',
        'gender',
        'password',
        'city',
        'email_verified_at',
        'email_or_otp_verified',
    ];

    // hidden for serializations
    protected $hidden = [
        'role_id',
        'user_type',
        'verification_code',
        'new_email_verification_code',
        'provider_id',
        'user_balance',
        'is_banned',
        'shop_id',
        'customer_id',
        'email_verified_at',
        'deleted_at',
        'password',
        'remember_token',
    ];

    // should be casted
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // /with
    protected $with = ['roles'];

    // user shop
    public function shop()
    {
        return $this->hasOne(Shop::class, 'id', 'shop_id');
    }

    // role
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    // address
    public function addresses()
    {
        return $this->hasMany(UserAddress::class);
    }

    // order Group
    public function orderGroups()
    {
        return $this->hasMany(OrderGroup::class);
    }

    // orders
    public function orders()
    {
        return $this->hasMany(Order::class)->with('orderGroup');
    }

    // carts
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    // wishlist
    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }

    // get fcm tokens
    public function get_fcm_tokens()
    {
        return $this->hasMany(Fcmtoken::class);
    }
}
