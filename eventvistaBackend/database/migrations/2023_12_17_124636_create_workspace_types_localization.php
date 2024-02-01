<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkspaceTypesLocalization extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workspace_types_localization', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('workspace_type_id');
            $table->foreign('workspace_type_id')->references('id')->on('workspace_types')->onDelete('cascade');
            $table->string('name');
            $table->string('lang_key');
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
        Schema::dropIfExists('workspace_types_localization');
    }
}
