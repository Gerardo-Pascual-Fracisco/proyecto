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
            $table->id();
            $table->unsignedBigInteger('id_service');
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_service')->references('id')->on('service');
            $table->foreign('id_user')->references('id')->on('users');
            $table->string('Total');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sale');
    }
}
