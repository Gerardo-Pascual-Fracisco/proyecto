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
        Schema::create('sale', function (Blueprint $table) {
            $table->id('id_sale');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_mPayment');
            $table->unsignedBigInteger('id_detall');
            $table->string('total_p');
            $table->timestamp('date_sale')->nullable();
            $table->foreign('id_user')->references('id_user')->on('user');
            $table->foreign('id_mPayment')->references('id_mPayment')->on('methodPayment');
            $table->foreign('id_detall')->references('id_detall')->on('detall');
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
