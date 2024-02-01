<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait ModelExtension
{
    public function scopeSetEmptyString($query, $columnName)
    {
        return $query->select('*', DB::raw("'' as $columnName"));
    }
    
}
