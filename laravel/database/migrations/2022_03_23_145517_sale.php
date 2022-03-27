<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Sale extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id('id_sale');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('id_mPayment');
            $table->unsignedBigInteger('id_detall');
            $table->string('total_p');
            $table->timestamp('date_sale')->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('id_mPayment')->references('id_mPayment')->on('methodPayments');
            $table->foreign('id_detall')->references('id_detall')->on('detalls');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
