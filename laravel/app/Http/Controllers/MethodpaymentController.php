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
        $methodPayments = MethodPayment::All();

        return $methodPayments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $methodPayment = new MethodPayment();
        return view('method-payment.create', compact('methodPayment'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(MethodPayment::$rules);

        $methodPayment = MethodPayment::create($request->all());

        return redirect()
            ->with('success', 'MethodPayment created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $methodPayment = MethodPayment::find($id);

        return view('method-payment.show', compact('methodPayment'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $methodPayment = MethodPayment::find($id);

        return view('method-payment.edit', compact('methodPayment'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  MethodPayment $methodPayment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MethodPayment $methodPayment)
    {
        request()->validate(MethodPayment::$rules);

        $methodPayment->update($request->all());

        return redirect()
            ->with('success', 'MethodPayment updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $methodPayment = MethodPayment::find($id)->delete();

        return redirect()
            ->with('success', 'MethodPayment deleted successfully');
    }
}
