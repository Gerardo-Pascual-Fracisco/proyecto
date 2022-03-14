<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SaleDetall extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('saleDetall', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_service');
            $table->unsignedBigInteger('id_metodoPago');
            $table->foreign('id_service')->references('id')->on('service');
            $table->foreign('id_metodoPago')->references('id')->on('metodoPago');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('saleDetall');
    }
}
