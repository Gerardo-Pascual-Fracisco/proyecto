<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Detall;
use Faker\Generator as Faker;

$factory->define(Detall::class, function (Faker $faker) {
    return [
        'service_id' => $faker->numberBetween($min = 1, $max = 9),
        'detall' => $faker->text($maxNbChars = 50),
        'price' => $faker->randomNumber($nbDigits = NULL, $strict = false),
    ];
});
