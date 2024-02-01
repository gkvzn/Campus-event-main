<?php

namespace App\Console\Commands;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Console\Command;

class slotconnection extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'slot:connect';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Slot Connection';

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
        $orders = Order::get();
        foreach ($orders as $key => $item) {
            Order::where('id', $item->id)->update([
                // "slot_id" => $item->scheduled_delivery_info->id
                'schedule_date' => Carbon::parse($item->scheduled_delivery_info->scheduled_date)->format('Y-m-d'),
            ]);
        }
        dd($orders);
    }
}
