<?php

namespace App\Http\Controllers;

use App\Chat;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ApiController;

class ChatController extends Controller
{
    public function index()
    {
        $chat = Chat::all();
        return $this->showAll($chat); 
    }

    public function create()
    {
      //
    }

    public function store(Request $request)
    {
        $chat = new Chat();
        $chat->name = $request->name;

        $chat->save();
        return $this->showOne($chat, 201);
    }
    
     public function show($id_chat)
    {
        $id_chat = DB::table('chats')
                ->where('id_chat','=',$id_chat)
                ->orwhere('id_receiver','=',$id_chat)
                ->get();
        return response()->json(['mensage' => $id_chat],200);
    }

    public function edit($id)
    {
    //
    }

    public function update(Request $request, $id )
    {
        //$this->allowedAdminAction();
        /**al hacer una modificación debe de ser un dato diferente 
         * por ello ocupamos el metodo only e intersec solo optiene 
         *el nombre y la descripción**/
        $chat = Chat::findOrfail($id);
         $chat->fill($request->only([
            'id_receiver',
            'id_transmitter',
            'message',
        ]));
       
        /**  el metodo isclean() verifica que la instancia o los datoso no hayan cambio de ser 
         * así retornamos un errors*
        */
       
        if($chat->isClean()){
            return $this->errorResponse('Debes Especificar almenos un campo diferente', 402);
        }
        /** Si detatmos un cambio en datos procedemos a el metodo save() */
        $chat->save();
        return $this->showOne($chat);
    }

    public function destroy($request)
    {
        $chat = Chat::destroy($request->id);
        return $this->showOne($chat, 200);
    }

    public function showChat($id_chat){//criterio de busqueda


        $consulta = Service::with('chats')->get();
        return response()->json($consulta[$id_chat-1], 201);
        

    
    }
}
