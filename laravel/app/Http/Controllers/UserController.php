<?php

namespace App\Http\Controllers;

use App\User;
use App\Service;
use App\serviceUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ApiController;

class UserController extends ApiController
{

    public function index()
    {
        $user = User::all();
        return $this->showAll($user); 
    }

    public function create()
    {
      //
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;

        $user->save();
        return $this->showOne($user, 201);
    }
    
     public function show($id)
    {
        $users = DB::table('users')
                ->where('name','=',$id)
                ->orwhere('id','=',$id)
                ->get();
        return response()->json(['usuario' => $users],200);
    }

    public function edit($id)
    {
    //
    }

    public function update(Request $request, $id )
    {
        //$this->allowedAdminAction();
        /**al hacer una modificación debe de ser un dato diferente por ello ocupamos el metodo only e intersec solo optiene 
         *el nombre y la descripción**/
        $user = User::findOrfail($id);
         $user->fill($request->only([
            'name',
            'foto',
        ]));
       
        /**  el metodo isclean() verifica que la instancia o los datoso no hayan cambio de ser 
         * así retornamos un errors*
        */
       
        if($user->isClean()){
            return $this->errorResponse('Debes Especificar almenos un campo diferente', 422);
        }
        /** Si detatmos un cambio en datos procedemos a el metodo save() */

        $user->save();
        return $this->showOne($user);
    }

    public function destroy($request)
    {
        $user = User::destroy($request->id);
        return $this->showOne($user, 200);
    }

  
   

}
