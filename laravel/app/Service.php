<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Service
 *
 * @property $id_service
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
    public $timestamps = false;
    static $rules = [
		'id_service' => 'required',
		'id_category' => 'required',
		'service_n' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_service','id_category','service_n'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function category()
    {
        return $this->hasOne('App\Category', 'id_category', 'id_category');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function detalls()
    {
        return $this->hasMany('App\Detall', 'id_service', 'id_service');
    }
    

}
