<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class MethodPayment
 *
 * @property $id_mPayment
 * @property $type_method
 *
 * @property Sale[] $sales
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class MethodPayment extends Model
{
  protected $table = "methodPayments";
  public $timestamps = false;
    static $rules = [
		'id_mPayment' => 'required',
		'type_method' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_mPayment','type_method'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sales()
    {
        return $this->hasMany('App\Sale', 'id_mPayment', 'id_mPayment');
    }
    

}
