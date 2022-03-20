<?php

namespace App\Http\Controllers\api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Notifications\SignupActivate;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:user',
            'password' => 'required|confirmed',
            'id_typeUser' => 'required'
        ]);

        if ($request->hasFile('image')) {
            $rules = [
                'image' => 'mimes:jpg,jpeg,png|max:2048',
            ];

            $this->validate($request, $rules);
        }

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'id_typeUser' => $request->id_typeUser='1',
        ]);

        if ($request->hasFile('image')) {
            $image = file_get_contents($request->file('image')->path());
            $base64Image = base64_encode($image);
            $user->image = $this->saveImages($base64Image, 'users', $user->id);
        }
        $user->save();

        $user->notify(new SignupActivate($user));

        return response()->json(
            [
                'message' =>
                    'Por favor, confirme haciendo clic en el botón verificar usuario que se le envió en su correo electrónico',
            ],
            201
        );
    }
}
