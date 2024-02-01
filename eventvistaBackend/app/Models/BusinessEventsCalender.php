<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Business\Events;


class BusinessEventsCalender extends Model
{
    use HasFactory;

    protected $table = "event_calender";

    protected $hidden = ['user_id', 'created_at', 'updated_at', 'deleted_at'];

    public function event()
    {
        return $this->belongsTo(Events::class)->setEmptyString('description');
    }
}
