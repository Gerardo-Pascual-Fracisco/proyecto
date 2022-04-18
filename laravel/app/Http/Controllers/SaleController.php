<?php

namespace App\Http\Controllers;

use App\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ApiController;

/**
 * Class SaleController
 * @package App\Http\Controllers
 */
class SaleController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sale = Sale::find($request);
        return $this->showAll($sale);
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
        $sale = new Sale();
        $sale->name = $request->name;

        $sale->save();
        return $this->showAll($sale,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($request)
    {
        $sale = Sale::find($request);
        return response()->json($sale);
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
     * @param  Sale $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $sale = Sale::findOrFail($request->id);
        $sale->name = $request->name;

        $sale->save();
        return $this->showAll($sale);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($request)
    {
        $sale = Sale::destroy($request->id);
        return $this->showAll($sale,200);
    }
}
