<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id('service_id');
            $table->string('service_n');
            $table->string('foto');

         

            $table->bigInteger('id_category')->unsigned()->nullable();
            $table->foreign('id_category')->references('id_category')->on('category')
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
