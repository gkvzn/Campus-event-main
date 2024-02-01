<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventsLocalization extends Model
{
    use HasFactory;

    protected $table = 'event_localization';

    protected $fillable = ['lang_key', 'event_id'];
}
