<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::resource('category','CategoryController');
Route::resource('detall','DetallController');
Route::resource('mp','MethodPaymentController');
Route::resource('sale','SaleController');
Route::resource('service','ServiceController');
Route::resource('user','UserController');
Route::resource('typeuser','TypeUserController');


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'api\AuthController@login');
    Route::post('signup', 'api\AuthController@signUp');

    Route::group([
      'middleware' => 'api'
    ], function() {
        Route::get('logout', 'api\AuthController@logout');
        Route::get('user', 'api\AuthController@user');
    });
});
Route::get('logout', 'api\AuthController@logout');
