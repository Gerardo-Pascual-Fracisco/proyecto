<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Detall extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalls', function (Blueprint $table) {
            $table->id('id_detall');
            $table->unsignedBigInteger('id_service');
            $table->string('detall');
            $table->string('price');
            $table->timestamps();
            $table->foreign('id_service')->references('id_service')->on('services');
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
