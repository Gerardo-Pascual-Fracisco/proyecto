<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $table = "chats";
    protected $primaryKey = 'id_chat';
   
  
      static $rules = [
          'id_receiver' => 'required',
          'id_transmitter' => 'required',
      ];
  
      protected $perPage = 20;
  
      /**
       * Attributes that should be mass-assignable.
       *
       * @var array
       */
      protected $fillable = ['id_receiver','id_transmitter'];
  
  
    
  
  }
  