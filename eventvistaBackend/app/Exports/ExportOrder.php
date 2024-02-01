<?php

namespace App\Exports;

use App\Models\Order;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Str;

class ExportOrder implements FromCollection, WithHeadings, WithMapping
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public $status;

    public $date = '';

    public $Customer = '';

    public function __construct($status, $date)
    {
        $this->status = $status;
        $this->date = $date;
    }

    public function collection()
    {
        $orders = Order::orderBy('schedule_date', 'desc')->withCount('orderItems')->withSum('orderItems', 'qty');
        // conditional
        if ($this->status != null) {
            $deliveryStatus = $this->status;
            $orders = $orders->where('delivery_status', $deliveryStatus);
        }
        if ($this->date != 'to') {
            if (Str::contains($this->date, 'to') && $this->date != null) {
                $date_var = explode(' to ', $this->date);
            } elseif ($this->date != null && ! Str::contains($this->date, 'to')) {
                $date_var = [date('Y-m-d', strtotime($this->date))];
            } else {
                $date_var = null;
            }
            if ($date_var != null && isset($date_var[1])) {

                $orders = $orders->whereBetween('schedule_date', [date('Y-m-d', strtotime($date_var[0])), date('Y-m-d', strtotime($date_var[1]))]);
            }

            if ($date_var != null && ! isset($date_var[1])) {
                $orders = $orders->whereDate('schedule_date', date('Y-m-d', strtotime($date_var[0])));
            }
        } else {
            $date_var = null;
        }
        if ($this->date != null) {
            $orders->orderBy('schedule_date', 'desc');
        }

        $orders = $orders->where('payment_status', '!=', unpaidPaymentStatus());

        return $orders->get();
    }

    public function map($order): array
    {
        $shippingAddress = $order->orderGroup->shippingAddress;
        $address = "• $shippingAddress->address_1 \n";
        $address .= "• $shippingAddress->address_2 \n";
        if ($order->gifting_data != null) {
            $address .= "Country : $shippingAddress->country \n";
            $address .= "City : $shippingAddress->city \n";
            $address .= "State : $shippingAddress->state \n";
        }
        $productNames = $order->orderItems->map(function ($item) {
            return "{$item->product->name} | {$item->qty}";
        });
        $productNames = $productNames->implode("\n• ");

        return [
            $order->orderGroup->order_code,
            '• '.$productNames,
            $order->gifting_data == null ? optional($order->user)->name : 'nothing',
            $order->gifting_data == null ? optional($order->user)->email : 'nothing',
            $order->gifting_data == null ? optional($order->user)->phone : $order->gifting_data->contact,
            $address,
            $order->scheduled_delivery_info->name.'  '.$order->scheduled_delivery_info->timeline ?? '',
            $order->schedule_date,
            Carbon::parse($order->created_at)->format('d M, Y'),
            $order->order_items_count,
            $order->order_items_sum_qty,
            $order->payment_status,
            Str::replace('-', ' ', $order->delivery_status),
            formatPrice($order->orderItem->unit_price),
            formatPrice($order->orderGroup->sub_total_amount),
            // formatPrice($order->orderItem->total_price),
            formatPrice($order->orderGroup->total_shipping_cost == null ? 0 : $order->orderGroup->total_shipping_cost),
            formatPrice($order->orderGroup->vat == null ? 0 : $order->orderGroup->vat),
            $order->applied_coupon_code == null ? 'nothing' : $order->applied_coupon_code,
            formatPrice($order->coupon_discount_amount),
            formatPrice($order->orderGroup->grand_total_amount),
            $order->orderGroup->payment_method,
            $order->intent_id,
            $order->gifting_data == null ? 'regular order' : 'gifted order',

            // Add more fields/columns here
        ];
    }

    public function headings(): array
    {
        return [
            'Order Code',
            'Product Name',
            'Customer Name',
            'Customer Email',
            'Customer Phone',
            'Shipping Address',
            'Slot',
            'Schedule Date',
            'Placed On',
            'Items',
            'Quantity',
            'Payment Status',
            'Delivery Status',
            'Unit Price',
            'Sub Total',
            // 'Total Price',
            'Shipping Cost',
            'Vat',
            'Applied Coupon Code',
            'Applied Coupon Discount Amount',
            'Grand Total',
            'Payment Method',
            'Payment Id',
            'Order Type',
        ];
    }
}
