<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Typeuser;
use Faker\Generator as Faker;

$factory->define(Typeuser::class, function (Faker $faker) {
    return [
        'typeUser' => 'required',
    ];
});
