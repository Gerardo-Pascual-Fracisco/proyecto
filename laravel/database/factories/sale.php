<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
		'user_id' => $faker->numberBetween($min = 1, $max = 5),
		'id_mPayment' => $faker->numberBetween($min = 1, $max = 3),
		'id_detall' => $faker->numberBetween($min = 1, $max = 10),
		'total_p' => $faker->randomNumber($nbDigits = NULL, $strict = false),
        'date_sale'=> now(),
    ];
});
