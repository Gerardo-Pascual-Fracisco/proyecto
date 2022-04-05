<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

/**
 * Class CategoryController
 * @package App\Http\Controllers
 */
class CategoryController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
          $category = Category::all();
          return $this->showAll($category);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $category = Category::find($request);
        return response()->json($category);
        //return $this->showAll($category);
    
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Category $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $category = Category::findOrFail($request->id);
        $category->name = $request->name;

        $category->save();
        return $this->showAll($category);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id_category){

        Category::destroy($id_category);
        //return $this->showAll($category,200);

        return response()->json(["mensaje" => "Categoria eliminada"], 201);
}
}
