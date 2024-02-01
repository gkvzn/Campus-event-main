<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserAddress extends Model
{
    use HasFactory, SoftDeletes;

    protected $hidden = [
        'user_id',
        'address_2',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    const HIDDEN_API = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
}
