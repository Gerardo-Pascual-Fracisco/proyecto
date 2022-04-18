<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Detall
 *
 * @property $id_detall
 * @property $service_id
 * @property $detall
 * @property $price
 * @property $created_at
 * @property $updated_at
 *
 * @property Sale[] $sales
 * @property Service $service
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Detall extends Model
{
    
    static $rules = [
		'id_detall' => 'required',
		'service_id' => 'required',
		'detall' => 'required',
		'price' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_detall','service_id','detall','price'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sales()
    {
        return $this->hasMany('App\Sale', 'id_detall', 'id_detall');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function service()
    {
        return $this->hasOne('App\Service', 'service_id', 'service_id');
    }
    

}
