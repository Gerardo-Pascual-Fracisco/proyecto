<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\MethodPayment;
use App\Service;
use App\Detall;
use App\User;
use App\Sale;
use App\serviceUser;
use App\Chat;
class DataSeeder extends Seeder
{
    public function run()
    {
        factory('App\Category', 10)->create();
        factory('App\MethodPayment', 3)->create();
        factory('App\Service', 10)->create();
        factory('App\User', 10)->create();
        factory('App\Detall', 10)->create();
        factory('App\Sale', 10)->create();
        factory('App\serviceUser', 10)->create();
        factory('App\Chat', 20)->create();

    }
}
