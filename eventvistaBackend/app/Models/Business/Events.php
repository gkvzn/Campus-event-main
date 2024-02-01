<?php

namespace App\Models\Business;

use App\Facades\BaseFacade;
use App\Models\BusinessEventsCalender;
use App\Traits\LocalizationModelTrait;
use App\Traits\ModelExtension;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Events extends Model
{
    use HasFactory, LocalizationModelTrait, ModelExtension, SoftDeletes;

    protected $hidden = [
        'user_id',
        'added_by',
        'thumbnail_image',
        'is_visible',
        'total_tickets_sale_count',
        'priority',
        'event_banner',
        'status',
        'deleted_at',
    ];

    protected $table = 'events';

    protected $appends = ['feature_image', 'feature_banner', 'start_time_renew', 'end_time_renew', 'is_wishlist', 'is_calendar'];

    // protected $fillable = ['status','is_featured'];

    public function getFeatureImageAttribute(): string
    {
        return uploadedAsset($this->thumbnail_image);
    }

    public function getFeatureBannerAttribute(): string
    {
        return uploadedAsset($this->event_banner);
    }

    public function setStartTimeAttribute($value)
    {
        $this->attributes['start_time'] = BaseFacade::date_format('H:i', $value);
    }

    public function setEndTimeAttribute($value)
    {
        $this->attributes['end_time'] = BaseFacade::date_format('H:i', $value);
    }

    public function getStartTimeRenewAttribute()
    {
        return BaseFacade::date_format('h:i a', $this->start_time);
    }

    public function getEndTimeRenewAttribute()
    {
        return BaseFacade::date_format('h:i a', $this->end_time);
    }

    public function setStartDateAttribute($value)
    {
        $this->attributes['start_date'] = BaseFacade::date_format('Y-m-d', $value);
    }

    public function setEndDateAttribute($value)
    {
        $this->attributes['end_date'] = BaseFacade::date_format('Y-m-d', $value);
    }



    public function category()
    {
        return $this->belongsTo(EventCategories::class, 'event_category_id');
    }

    public function localization()
    {
        return $this->hasMany(EventsLocalization::class, 'event_id');
    }

    public function ScopeIsUser($query)
    {
        if (!auth()->user()->can('all_events')) {
            return $query->where('user_id', auth()->user()->id ?? 0);
        }
    }

    public function ScopeIsStatus($query)
    {

        if (auth()->check() && !auth()->user()->can('all_events')) {
            return $query->where('status', 1);
        }

        if (!auth()->check()) {
            return $query->where('status', 1);
        }
    }

    public function scopeIsVisible($query)
    {
        return $query->where('is_visible', 1);
    }

    public function events_wishlist()
    {
        return $this->hasOne(EventsWishlist::class, 'event_id');
    }

    public function events_calender()
    {
        return $this->hasOne(BusinessEventsCalender::class, 'event_id');
    }

    public function getIsWishlistAttribute()
    {
        if (auth('sanctum')->check()) {
            $wishlist = $this->events_wishlist()
                ->where('user_id', auth('sanctum')->user()->id)
                ->count();

            return $wishlist > 0 ? true : false;
        }

        return false;
    }

    public function getIsCalendarAttribute()
    {
        if (auth('sanctum')->check()) {
            $calendar = $this->events_calender()
                ->where('user_id', auth('sanctum')->user()->id)
                ->count();

            return $calendar > 0 ? true : false;
        }

        return false;
    }
}
