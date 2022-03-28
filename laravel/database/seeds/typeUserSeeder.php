<?php

use Illuminate\Database\Seeder;
use App\TypeUser;

class typeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('typeusers')->insert([
            'typeUser' => 'user',
        ]);
        DB::table('typeusers')->insert([
            'typeUser' => 'admin'
        ]);
    }
}
