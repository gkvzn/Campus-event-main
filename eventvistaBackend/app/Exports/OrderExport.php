<?php

namespace App\Exports;

use App\Models\Order;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;

class OrderExport implements FromCollection
{
    use Exportable;

    public function collection()
    {
        return Order::all(); // Replace with your actual model query
    }
}
