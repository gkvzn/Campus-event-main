<?php

namespace App\Exports;

use App\Models\Category;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CategoryExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Category::orderBy('total_sale_count')->get();
    }

    public function map($category): array
    {
        return [
            $category->id,
            $category->collectLocalization('name'),
            $category->total_sale_count,

            // Add more fields/columns here
        ];
    }

    public function headings(): array
    {
        return [
            'S/L',
            'Category Name',
            'Total Sales',
        ];
    }
}
