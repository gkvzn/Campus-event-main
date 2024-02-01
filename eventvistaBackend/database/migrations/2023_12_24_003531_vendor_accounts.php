<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class VendorAccounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendor_accounts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vendor_id');
            $table->string('title');
            $table->string('account_number');
            $table->string('account_name');
            $table->string('bank_name');
            $table->string('branch_name');
            $table->integer('is_default')->default(0);
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
        Schema::create('vendor_withdraws', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vendor_id');
            $table->double('transaction_amount')->default(0.00);
            $table->double('before_transaction_amount')->default(0.00);
            $table->string('currency', 10)->default("AED");
            $table->text('description')->nullable();
            $table->text('reason')->nullable();
            $table->double('account')->default(0.00);
            $table->string('payment_channel')->default('bank');
            $table->unsignedBigInteger('approved_by');
            $table->string('status', 60)->default('pending')->comment('pending | reject | approve');
            $table->string('image')->nullable();
            $table->string('transaction_id')->nullable();
            $table->timestamps();
        });
    }
}
