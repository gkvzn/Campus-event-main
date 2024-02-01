<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MostViewsEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'event_id',
    ];


    protected $table = "most_views_events";
}
