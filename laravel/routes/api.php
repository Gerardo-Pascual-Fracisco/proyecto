<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\RegisterController;
use phpDocumentor\Reflection\Types\Resource_;
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

# GET /api/user
Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
  });


# POST /api/auth/login  || Register
Route::post('/api/auth/login');
Route::post('/api/auth/register');