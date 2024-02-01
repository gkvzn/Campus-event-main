<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MostViewsCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
    ];


    protected $table = "most_views_categories";
}