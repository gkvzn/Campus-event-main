<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void 
     */
    public function up()
    {
        Schema::create('order_groups', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->bigInteger('order_code');
            $table->double('sub_total_amount')->default('0.00');
            $table->double('total_tax_amount')->default('0.00');
            $table->double('total_coupon_discount_amount')->default('0.00');
            $table->double('total_shipping_cost')->default('0.00');
            $table->double('grand_total_amount')->default('0.00');
            $table->bigInteger('vat')->nullable();
            $table->double('additional_discount_value')->default('0.00');
            $table->string('additional_discount_type')->default('flat');
            $table->double('total_discount_amount')->default('0.00');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_groups');
    }
}
