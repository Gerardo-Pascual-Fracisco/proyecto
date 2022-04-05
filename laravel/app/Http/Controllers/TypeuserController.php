<?php

namespace App\Http\Controllers;

use App\TypeUser;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

/**
 * Class TypeUserController
 * @package App\Http\Controllers
 */
class TypeUserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $typeUser = User::all();
        return $this->showAll($typeUser);
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
        $typeUser = new TypeUser();
        $typeUser->name = $request->name;

        $typeUser->save();
        return $this->showOne($typeUser,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($request)
    {
        $typeUser = TypeUser::find($request);
        return response()->json($typeUser);
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
     * @param  TypeUser $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $typeUser = TypeUser::findOrFail($request->id);
        $typeUser->name = $request->name;

        $typeUser->save();
        return $this->showOne($typeUser);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($request)
    {
        $typeUser = TypeUser::destroy($request->id);
        return $this->showOne($typeUser,200);
    }
}
