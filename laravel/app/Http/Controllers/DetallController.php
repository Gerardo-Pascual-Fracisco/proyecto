<?php

namespace App\Http\Controllers;

use App\Detall;
use Illuminate\Http\Request;

/**
 * Class DetallController
 * @package App\Http\Controllers
 */
class DetallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detall = Detall::find($request);
        return response()->json($detall);
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
        $detall = new Detall();
        $detall->name = $request->name;

        $detall->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($request)
    {
        $detall = Detall::find($request);
        return response()->json($detall);
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
     * @param  Detall $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $detall = Detall::findOrFail($request->id);
        $detall->name = $request->name;

        $detall->save();
        return $detall;
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($request)
    {
        $detall = Detall::destroy($request->id);
        return $detall;
    }
}
