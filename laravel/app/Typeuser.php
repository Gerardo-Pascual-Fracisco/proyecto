<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TypeUser
 *
 * @property $id_typeUser
 * @property $typeUser
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class TypeUser extends Model
{
  public $timestamps = false;
    static $rules = [
		'id_typeUser' => 'required',
		'typeUser' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['id_typeUser','typeUser'];



}
