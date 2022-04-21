<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Chat;
use Faker\Generator as Faker;

$factory->define(chat::class, function (Faker $faker) {
    return [
        'id_receiver' => $faker->numberBetween($min = 1, $max = 10),
		'id_transmitter' => $faker->numberBetween($min = 1, $max = 10),
        'message' => $faker->text($min = 30, $max = 200)
    ];
});
