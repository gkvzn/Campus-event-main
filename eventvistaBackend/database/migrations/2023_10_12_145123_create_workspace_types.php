<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkspaceTypes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workspace_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->nullable();
            $table->integer('sorting_order_level')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.alter table `workspace` add constraint `workspace_workspace_type_id_foreign` foreign key (`workspace_type_id`) references `workspace_types` (`id`) on delete set null

     
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workspace_types');
    }
}
