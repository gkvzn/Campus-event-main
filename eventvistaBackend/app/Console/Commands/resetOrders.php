<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Order;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ScheduledDeliveryTimeListStock;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class resetOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset:orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'reset orders';

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
        $orders = Order::get();

        ScheduledDeliveryTimeListStock::when(true, function () {
        })->delete();

        foreach ($orders as $key => $order) {
            OrderItem::where('order_id', $order->id)->delete();
            OrderGroup::where('id', $order->order_group_id)->delete();
            Order::where('id', $order->id)->delete();
        }

        Product::when(true, function () {
        })->update([
            'total_sale_count' => 0,
        ]);

        Category::when(true, function () {
        })->update([
            'total_sale_count' => 0,
        ]);

        DB::table('test')->insert([
            'data' => json_encode([
                'message' => $orders->count().' items deleted',
                'date' => date('Y-m-d', strtotime('today')),

            ]),
        ]);

        return 0;
    }
}
