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
    'service_n' =>$faker->randomElement([
      'Reparacion de tuberia',
      'Instalacion de baño',
      'Clses de Guitarra'
     ,'Clses de Piano',
     'Elaborar mueble de madera',
      ' Reparacion de mueble', 
      ' Herreria en general', 
      ' Servicio a automovil', 
      ' Clases de ingles', 
      ' Clases de chino mandarin']),
    'foto' => $faker->numerify('https://picsum.photos/id/###/136/108'),

    ];
});


