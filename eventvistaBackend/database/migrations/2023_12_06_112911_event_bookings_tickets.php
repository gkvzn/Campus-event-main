<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EventBookingsTickets extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_bookings_tickets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('event_booking_id');
            $table->foreign('event_booking_id')->references('id')->on('event_bookings')->onDelete('cascade');
            $table->string('name');
            $table->double('price');
            $table->string('token');
            $table->integer('qty');
            $table->integer('is_verified')->default(0)->comment('0 is unveirfied 1 veirfied 2 cancel'); //
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
        Schema::dropIfExists('event_bookings_tickets');
    }
}
