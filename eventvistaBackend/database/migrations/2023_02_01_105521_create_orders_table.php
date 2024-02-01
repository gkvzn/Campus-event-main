<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('order_group_id');
            $table->integer('shop_id');
            $table->integer('user_id')->nullable();
            $table->string('delivery_status')->default('order-placed');
            $table->string('payment_status')->default('unpaid');
            $table->string('payment_method')->nullable();
            $table->string('payment_type')->default('cash_on_delivery')->nullable(); //cash_on_delivery online
            $table->string('applied_coupon_code')->nullable();
            $table->double('coupon_discount_amount')->default('0.00');
            $table->double('admin_earning_percentage')->default('0.00');
            $table->double('total_admin_earnings')->default('0.00');
            $table->double('total_vendor_earnings')->default('0.00');
            $table->double('shipping_cost')->default('0.00');
            $table->text('intent')->nullable();
            $table->longText('refund')->nullable();
            $table->text('address')->nullable();
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
        Schema::dropIfExists('orders');
    }
}
