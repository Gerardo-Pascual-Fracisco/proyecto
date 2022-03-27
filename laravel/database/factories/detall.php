<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Detall;
use Faker\Generator as Faker;

$factory->define(Detall::class, function (Faker $faker) {
    return [
        'id_service' => $faker->numberBetween($min = 1, $max = 10),
        'detall' => $faker->text($maxNbChars = 50),
        'price' => $faker->randomNumber($nbDigits = NULL, $strict = false),
    ];
});
