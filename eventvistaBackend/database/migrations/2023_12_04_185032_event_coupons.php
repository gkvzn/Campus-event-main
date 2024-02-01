<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EventCoupons extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_coupons', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('discount_type')->comment('flat/percentage');
            $table->double('discount_value')->default(0.00);
            $table->text('start_date')->nullable();
            $table->text('end_date')->nullable();
            $table->double('min_spend')->default(0.00);
            $table->double('max_discount_amount')->default(0.00);
            $table->integer('total_usage_limit')->default(1);
            $table->integer('total_usage_count')->default(0);
            $table->integer('customer_usage_limit')->default(1);
            $table->longText('event_ids')->nullable()->comment('Coupon will be applicable only for the events selected');
            $table->longText('event_category_ids')->nullable()->comment('Coupon will be applicable only for   categories selected');
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
        Schema::dropIfExists('event_coupons');
    }
}
