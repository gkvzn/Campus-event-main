<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DeleteUnpaidOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:delete-unpaid-orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete UnPaid Orders';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $twoDaysAgo = now()->subDays(1);
        $orders = Order::where('payment_status', unpaidPaymentStatus())->where('payment_type', 'online')->where('created_at', '<', $twoDaysAgo)->get();
        foreach ($orders as $key => $order) {
            OrderItem::where('order_id', $order->id)->delete();
            OrderGroup::where('id', $order->order_group_id)->delete();
            Order::where('id', $order->id)->delete();
        }
        DB::table('test')->insert([
            'data' => json_encode([
                'message' => $orders->count().' items deleted',
                'date' => date('Y-m-d', strtotime('today')),

            ]),
        ]);
    }
}
