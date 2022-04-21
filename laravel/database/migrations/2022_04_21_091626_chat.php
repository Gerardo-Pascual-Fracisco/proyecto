<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Chat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('chats', function (Blueprint $table) {
            $table->bigIncrements('id_chat');
            $table->unsignedBigInteger('id_receiver')->nullable();
            $table->unsignedBigInteger('id_transmitter')->nullable();
            $table->string('message');
            $table->timestamps();

            $table
            ->foreign('id_transmitter')
            ->references('user_id')
            ->on('users')
            ->onDelete('set null')
            ->onUpdate('cascade');        
            $table
            ->foreign('id_receiver')
            ->references('user_id')
            ->on('users')
            ->onDelete('set null')
            ->onUpdate('cascade');        
            
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
