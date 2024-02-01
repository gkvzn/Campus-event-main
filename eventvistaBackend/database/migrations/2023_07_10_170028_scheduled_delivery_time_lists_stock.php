<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScheduledDeliveryTimeListsStock extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scheduled_delivery_time_lists_stock', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('slot_id');
            $table->foreign('slot_id')->references('id')->on('scheduled_delivery_time_lists')->onDelete('cascade');
            $table->unsignedBigInteger('product_variation_id');
            $table->foreign('product_variation_id')->references('id')->on('product_variations')->onDelete('cascade');
            $table->integer('qty');
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scheduled_delivery_time_lists_stock');
    }
}
