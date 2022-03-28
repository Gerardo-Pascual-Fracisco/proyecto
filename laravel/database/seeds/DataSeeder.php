<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\MethodPayment;
use App\Service;
use App\Detall;
use App\User;
use App\Sale;

class DataSeeder extends Seeder
{
    public function run()
    {
        factory('App\Category', 10)->create();
        factory('App\MethodPayment', 3)->create();
        factory('App\Service', 10)->create();
        factory('App\Detall', 10)->create();
        factory('App\User', 5)->create();
        factory('App\Sale', 10)->create();
    }
}
