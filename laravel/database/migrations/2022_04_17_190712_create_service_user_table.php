<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_user', function (Blueprint $table) {
            $table->id('service_user_id');
            $table->UnsignedBigInteger('service_service_id')->nullable();
            $table->UnsignedBigInteger('user_user_id')->nullable();
            $table
                ->foreign('service_service_id')
                ->references('service_id')
                ->on('services')
                ->onDelete('set null')
                ->onUpdate('cascade');
            $table
                ->foreign('user_user_id')
                ->references('user_id')
                ->on('users')
                ->onDelete('set null')
                ->onUpdate('cascade');

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
        Schema::dropIfExists('service_user');
    }
}
