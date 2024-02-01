<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "amount",
        "pending_amount"
    ];
    public function ScopeMyWallet($query)
    {
        return $query->where('user_id', auth()->user()->id);
    }
}
