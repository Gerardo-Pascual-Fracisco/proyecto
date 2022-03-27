<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Service;
use Faker\Generator as Faker;

$factory->define(Service::class, function (Faker $faker) {
    return [
		'id_category' => $faker->numberBetween($min = 1, $max = 3), // 8567,
		'service_n' => $faker->bs,
    ];
});
