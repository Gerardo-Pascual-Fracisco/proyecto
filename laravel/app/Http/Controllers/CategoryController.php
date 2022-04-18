<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ApiController;

class CategoryController extends ApiController
{

    public function index()
    {
          $category = Category::all();
          return $this->showAll($category);
    }

    public function create()
    {
      //
    }

    public function store(Request $request)
    {
        $category = new Category;
        $data = $request->json()->all();
        $name = $data['name'];
        $category->name=$name;
        $category->save();
        return json_encode([ "msg"=>"categoria agregada"]); // return
        //return $this->showAll($category, 201);
    }

    public function show(Request $request)
    {
        $category = Category::find($request);
        return response()->json($category);
        //return $this->showAll($category);
    
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
        $category = Category::findOrfail($id);
         $category->fill($request->only([
            'name',
            'foto',
        ]));
       
        /**  el metodo isclean() verifica que la instancia o los datoso no hayan cambio de ser 
         * así retornamos un errors*
        */
       
        if($category->isClean()){
            return $this->errorResponse('Debes Especificar almenos un campo diferente', 422);
        }
        /** Si detatmos un cambio en datos procedemos a el metodo save() */

        $category->save();
        return $this->showOne($category);
    }

    public function destroy($id_category){

        Category::destroy($id_category);
        //return $this->showAll($category,200);

        return response()->json(["mensaje" => "Categoria eliminada"], 201);
}


public function showById($id_category){//criterio de busqueda


    $consulta = Category::with('services')->get();


    return response()->json($consulta[$id_category-1], 201);
    

}
}
