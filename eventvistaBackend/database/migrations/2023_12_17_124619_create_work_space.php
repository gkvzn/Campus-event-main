<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkSpace extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workspace', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->unsignedBigInteger('workspace_type_id')->nullable();
            $table->foreign('workspace_type_id')->references('id')->on('workspace_types')->nullOnDelete();
            $table->string('added_by')->default('business_manager');
            $table->string('name');
            $table->string('slug');
            $table->string('venue_type')->default('outdoor');
            $table->double('price')->default(0.00); //per hour
            $table->integer('number_of_guests_allowed');
            $table->time('opening_time')->nullable();
            $table->time('closing_time')->nullable();
            $table->text('location');
            $table->double('lat');
            $table->double('long');
            $table->string('thumbnail_image');
            $table->longText('gallery_images');
            $table->longText('gallery_videos')->nullable();
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->tinyInteger('is_visible')->default(0);
            $table->tinyInteger('is_featured')->default(0);
            $table->bigInteger('total_space_sale_count')->default(0);
            $table->integer('priority')->default(0);
            $table->integer('status')->default(1); //0 means disable automate 1 means enable automate
            $table->double('service_charges')->default(0.00);
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
        Schema::dropIfExists('workspace');
    }
}
