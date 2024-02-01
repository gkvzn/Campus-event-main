<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ProductSalExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Product::shop()->orderBy('total_sale_count', 'DESC')->get();
    }

    public function map($product): array
    {
        return [
            $product->id,
            $product->collectLocalization('name'),
            $product->total_sale_count,
            // Add more fields/columns here
        ];
    }

    public function headings(): array
    {
        return [
            'S/L',
            'Product Name',
            'Total Sales',
        ];
    }
}
