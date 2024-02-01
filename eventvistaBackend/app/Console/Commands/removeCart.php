<?php

namespace App\Console\Commands;

use App\Models\Cart;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class removeCart extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'delete:remove-cart-items';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'remove-cart-items';

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
        $one_hour_ago = now()->subHour();
        $cart = Cart::where('created_at', '<', $one_hour_ago);
        DB::table('test')->insert([
            'data' => json_encode([
                'message' => $cart->count().'cart items deleted',
                'date' => date('Y-m-d', strtotime('today')),

            ]),
        ]);

        return $cart->delete();
    }
}
