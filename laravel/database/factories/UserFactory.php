<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'username' => $faker->username,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'address' => $faker->address,
        'password' => '$2y$10$rCzUGmm4Bj5RCXI9q.M76OM3H1I2A4g0gt/VIjtPBMdwjp2pfrCIm', // password
        'remember_token' => Str::random(10),
        'foto' => $faker->numerify('https://picsum.photos/id/###/136/108'),

        //'id_typeUser'=> $faker->numberBetween($min = 1, $max = 2),
    ];
});
