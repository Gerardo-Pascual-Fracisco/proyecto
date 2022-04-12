<?php
$faker = Faker\Factory::create();
$faker->addProvider(new Bluemmb\Faker\PicsumPhotosProvider($faker));
/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use Faker\Generator as Faker;

$factory->define(App\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->jobTitle,
        'foto' => $faker->imageUrl(136,108)

    ];
});
//factory(category::class, 1)->create();