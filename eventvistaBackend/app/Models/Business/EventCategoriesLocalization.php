<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventCategoriesLocalization extends Model
{
    use HasFactory;

    protected $table = 'event_categories_localization';

    protected $fillable = ['lang_key', 'event_category_id'];
}
