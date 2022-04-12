<?php
$faker = Faker\Factory::create();
$faker->addProvider(new Bluemmb\Faker\PicsumPhotosProvider($faker));
/** @var \Illuminate\Database\Eloquent\Factory $factory */
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Service;
use Faker\Generator as Faker;

$factory->define(Service::class, function (Faker $faker) {
    return [
		'id_category' => $faker->numberBetween($min = 1, $max = 3), // 8567,
		'service_n' => $faker->bs,
    'foto' => $faker->imageUrl(136,108)

    ];
});
