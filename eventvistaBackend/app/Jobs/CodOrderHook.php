<?php

namespace App\Jobs;

use App\Traits\OrderManipulation;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CodOrderHook implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, OrderManipulation, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $payload = null;

    public function __construct($payload)
    {
        $this->payload = $payload;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->__update_order_on_cod($this->payload['user_id'], $this->payload['order_id']);
    }
}
