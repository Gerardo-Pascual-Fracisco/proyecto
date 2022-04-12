<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Category
 *
 * @property $id_category
 * @property $detall
 *
 * @property Service[] $services
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Category extends Model
{
  protected $table = "category";
  protected $primaryKey = 'id_category';
// const UPDATED_AT = null;
public $timestamps = false;
    static $rules = [
		'id_category' => 'required',
		'name' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_category','name','foto'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function services()
    {
        return $this->hasMany('App\Service', 'id_category', 'id_category');
    }
    

}
