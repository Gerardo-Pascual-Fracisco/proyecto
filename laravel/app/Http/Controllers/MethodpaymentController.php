<?php

namespace App\Http\Controllers;

use App\MethodPayment;
use Illuminate\Http\Request;

/**
 * Class MethodPaymentController
 * @package App\Http\Controllers
 */
class MethodPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $methodPayments = MethodPayments::find($request);
        return response()->json($methodPayments);
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
        return $methodPayments;
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($request)
    {
        $methodPayments = MethodPayments::destroy($request->id);
        return $methodPayments;
    }
}
