<?php

namespace App\Http\Controllers;

use App\TypeUser;
use Illuminate\Http\Request;

/**
 * Class TypeUserController
 * @package App\Http\Controllers
 */
class TypeUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $typeUsers = TypeUser::All();

        return $typeUsers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $typeUser = new TypeUser();
        return view('type-user.create', compact('typeUser'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(TypeUser::$rules);

        $typeUser = TypeUser::create($request->all());

        return redirect()
            ->with('success', 'TypeUser created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $typeUser = TypeUser::find($id);

        return view('type-user.show', compact('typeUser'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $typeUser = TypeUser::find($id);

        return view('type-user.edit', compact('typeUser'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  TypeUser $typeUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TypeUser $typeUser)
    {
        request()->validate(TypeUser::$rules);

        $typeUser->update($request->all());

        return redirect()
            ->with('success', 'TypeUser updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $typeUser = TypeUser::find($id)->delete();

        return redirect()
            ->with('success', 'TypeUser deleted successfully');
    }
}
