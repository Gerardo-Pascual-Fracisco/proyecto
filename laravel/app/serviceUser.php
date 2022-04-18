<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class serviceUser extends Model
{
  protected $table = "service_user";
  protected $primaryKey = 'service_user_id';
// const UPDATED_AT = null;
public $timestamps = false;
    static $rules = [
		'service_service_id' => 'required',
		'user_user_id' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['user_user_id','service_service_id'];


  

}
