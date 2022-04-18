<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Sale
 *
 * @property $id_sale
 * @property $user_id
 * @property $id_mPayment
 * @property $id_detall
 * @property $total_p
 * @property $date_sale
 *
 * @property Detall $detall
 * @property Methodpayment $methodpayment
 * @property User $user
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Sale extends Model
{
    public $timestamps = false;
    static $rules = [
		'id_sale' => 'required',
		'user_id' => 'required',
		'id_mPayment' => 'required',
		'id_detall' => 'required',
		'total_p' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_sale','user_id','id_mPayment','id_detall','total_p','date_sale'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function detall()
    {
        return $this->hasOne('App\Detall', 'id_detall', 'id_detall');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function methodpayment()
    {
        return $this->hasOne('App\Methodpayment', 'id_mPayment', 'id_mPayment');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->hasOne('App\User', 'user_id', 'user_id');
    }
    

}
