<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    use HasFactory;

    protected $hidden = ['user_id', 'created_at', 'updated_at', 'deleted_at', 'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function item()
    {
        return $this->hasOne(Product::class, 'id', 'product_id')->with(['variation' => function ($q) {
            $q->select(['id', 'product_id', 'sku', 'code', 'price']);
        }]);
        // return Product::with(['variation' => function ($q) {
        //     $q->select(['id', 'product_id', 'sku', 'code', 'price']);
        // }])->isPublished()->latest()->take($take)->get()->makeHidden($this->product__hidden__fields);
    }
}
