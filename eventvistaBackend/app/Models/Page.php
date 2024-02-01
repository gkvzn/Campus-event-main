<?php

namespace App\Models;

use App;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $with = ['page_localizations'];

    const API_HIIDEN = [
        'id',
        'slug',
        'meta_title',
        'meta_image',
        'meta_description',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function collectLocalization($entity = '', $lang_key = '')
    {
        $lang_key = $lang_key == '' ? App::getLocale() : $lang_key;
        $page_localizations = $this->page_localizations->where('lang_key', $lang_key)->first();

        return $page_localizations != null && $page_localizations->$entity ? $page_localizations->$entity : $this->$entity;
    }

    public function page_localizations()
    {
        return $this->hasMany(PageLocalization::class);
    }
}
