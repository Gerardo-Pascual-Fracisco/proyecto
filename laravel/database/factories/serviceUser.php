<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\serviceUser;
use Faker\Generator as Faker;

$factory->define(serviceUser::class, function (Faker $faker) {
    return [
		'service_service_id' => $faker->numberBetween($min = 1, $max = 2),
		'user_user_id' => $faker->numberBetween($min = 1, $max = 10),
	
    ];
});
