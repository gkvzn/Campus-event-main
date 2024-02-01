<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketTypesLocalization extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ticket_types_localization', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ticket_type_id');
            $table->foreign('ticket_type_id')->references('id')->on('events')->onDelete('cascade');
            $table->string('name');
            $table->string('lang_key');
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
        Schema::dropIfExists('ticket_types_localization');
    }
}
