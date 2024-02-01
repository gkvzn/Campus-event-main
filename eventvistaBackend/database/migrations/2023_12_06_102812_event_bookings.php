<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EventBookings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_bookings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('event_id');
            $table->bigInteger('from_id');
            $table->bigInteger('to_id');
            $table->string('payment_status')->default('unpaid');
            $table->string('payment_method');
            $table->string('payment_type')->default('cash_on_the_ticket_box'); //cash_on_box online
            $table->string('applied_coupon_code')->nullable();
            $table->double('coupon_discount_amount')->default('0.00');
            $table->double('total_admin_earnings')->default('0.00');
            $table->double('total_vendor_earnings')->default('0.00');
            $table->double('sub_total_amount')->default('0.00');
            $table->double('grand_total_amount')->default('0.00');
            $table->text('intent')->nullable();
            $table->longText('refund')->nullable();
            $table->integer('booking_mode')->default(1)->comment('1 means booking running and date not pass and 0 means booking date pass forchecking event updations');
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
        Schema::dropIfExists('event_bookings');
    }
}
