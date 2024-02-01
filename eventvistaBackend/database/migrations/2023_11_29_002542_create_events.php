<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->unsignedBigInteger('event_category_id')->nullable();
            $table->foreign('event_category_id')->references('id')->on('event_categories')->nullOnDelete();
            $table->string('added_by')->default('business_manager');
            $table->string('name');
            $table->string('slug');
            $table->date('start_date');
            $table->date('end_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->text('location');
            $table->double('lat');
            $table->double('long');
            $table->string('thumbnail_image')->nullable();
            $table->text('event_banner')->nullable();
            $table->longText('description')->nullable();
            $table->tinyInteger('is_visible')->default(0);
            $table->tinyInteger('is_featured')->default(0);
            $table->bigInteger('total_tickets_sale_count')->default(0);
            $table->integer('priority')->default(0);
            $table->integer('status')->default(1); //0 means disable automate 1 means enable automate
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
        Schema::dropIfExists('events');
    }
}
