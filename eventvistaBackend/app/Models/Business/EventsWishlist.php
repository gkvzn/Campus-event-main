<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventsWishlist extends Model
{
    use HasFactory;

    protected $table = 'events_wishlists';

    protected $hidden = ['user_id', 'created_at', 'updated_at', 'deleted_at'];

    public function event()
    {
        return $this->belongsTo(Events::class)->setEmptyString('description');
    }
}
