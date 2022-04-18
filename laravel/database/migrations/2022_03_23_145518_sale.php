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
       
            $table->string('total_p');
            $table->timestamp('date_sale')->nullable();            

            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('user_id')->on('users')
            ->onDelete('set null')->onUpdate('cascade');


            $table->bigInteger('id_mPayment')->unsigned()->nullable();
            $table->foreign('id_mPayment')->references('id_mPayment')->on('methodPayments')
            ->onDelete('set null')->onUpdate('cascade');

            
            $table->bigInteger('id_detall')->unsigned()->nullable();
            $table->foreign('id_detall')->references('id_detall')->on('detalls')
            ->onDelete('set null')->onUpdate('cascade');


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
