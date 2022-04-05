<?php

namespace App\Http\Controllers;

use App\MethodPayment;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

/**
 * Class MethodPaymentController
 * @package App\Http\Controllers
 */
class MethodPaymentController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $methodPayments = MethodPayments::find($request);
        return $this->showAll($methodPayments);
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
        $methodPayments = new MethodPayments();
        $methodPayments->name = $request->name;

        $methodPayments->save();
        return $this->showAll($methodPayments,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($request)
    {
        $methodPayments = MethodPayments::find($request);
        return response()->json($methodPayments);
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
     * @param  MethodPayments $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $methodPayments = MethodPayments::findOrFail($request->id);
        $methodPayments->name = $request->name;

        $methodPayments->save();
        return $this->showAll($methodPayments);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($request)
    {
        $methodPayments = MethodPayments::destroy($request->id);
        return $this->showAll($methodPayments,200);
    }
}
