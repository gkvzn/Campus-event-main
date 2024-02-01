<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class DashboardArrayExport implements FromArray, WithHeadings, WithMapping
{
    protected $data;

    protected $headings;

    public function __construct(array $data, array $headings)
    {

        $this->data = $data;
        $this->headings = $headings;
    }

    public function array(): array
    {
        return $this->data;
    }

    public function headings(): array
    {
        return $this->headings;
    }

    public function map($row): array
    {

        return [
            $row['totalSalesData']->totalEarning.'DH',
            $row['totalSalesData']->totalCategorySalesCount,
            $row['totalOrdersData']->totalOrders,
            $row['totalSalesData']->total_order,
            $row['totalSalesData']->pending_order,
            $row['totalSalesData']->processing,
            $row['totalSalesData']->delivered,
        ];
    }
}
