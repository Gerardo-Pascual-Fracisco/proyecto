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
        $detalls = Detall::All();

        return $detall;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $detall = new Detall();
        return view('detall.create', compact('detall'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Detall::$rules);

        $detall = Detall::create($request->all());

        return redirect()
            ->with('success', 'Detall created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $detall = Detall::find($id);

        return view('detall.show', compact('detall'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $detall = Detall::find($id);

        return view('detall.edit', compact('detall'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Detall $detall
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Detall $detall)
    {
        request()->validate(Detall::$rules);

        $detall->update($request->all());

        return redirect()
            ->with('success', 'Detall updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $detall = Detall::find($id)->delete();

        return redirect()
            ->with('success', 'Detall deleted successfully');
    }
}
