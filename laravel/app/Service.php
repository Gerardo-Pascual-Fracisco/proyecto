<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 *
 * @property $service_id
 * @property $id_category
 * @property $service_n
 *
 * @property Category $category
 * @property Detall[] $detalls
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */


class Service extends Model

{
    protected $table = "services";
protected $primaryKey = 'service_id';

    public $timestamps = false;
    static $rules = [
		'service_id' => 'required',
		'id_category' => 'required',
		'service_n' => 'required'
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['service_id','id_category','service_n'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function categoria()
    {
        return $this->belongsTo('App\Category');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detalls()
    {
        return $this->hasMany('App\Detall', 'service_id', 'service_id');
    }
    
   
  
   


    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
