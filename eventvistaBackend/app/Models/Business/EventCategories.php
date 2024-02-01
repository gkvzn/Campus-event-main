<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategories extends Model
{
    use HasFactory;

    protected $hidden = [
        'slug',
        'sorting_order_level',
        'created_at',
        'updated_at',
    ];

    protected $table = 'event_categories';

    public function localization()
    {
        return $this->hasMany(EventCategoriesLocalization::class, 'event_category_id');
    }

    public function collectLocalization($entity = '', $lang_key = '')
    {
        $lang_key = $lang_key == '' ? app()->getLocale() : $lang_key;
        $localization = $this->localization->where('lang_key', $lang_key)->first();

        return $localization != null && $localization->$entity ? $localization->$entity : $this->$entity;
    }
}
