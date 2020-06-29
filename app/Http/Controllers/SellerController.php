<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SellerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Seller::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $seller = Seller::create($request->all());
        return response()->json([
            'saved' => 'true',
            'message' => 'Successfully Saved Seller',
            'data' => $seller
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Seller $seller
     * @return JsonResponse
     */
    public function show(Seller $seller)
    {
        return response()->json($seller);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Seller $seller
     * @return Response
     */
    public function edit(Seller $seller)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Seller $seller
     * @return Response
     */
    public function update(Request $request, Seller $seller)
    {
        $seller->update($request->all());
        return response()->json([
            'saved' => 'true',
            'message' => 'Successfully Updated Seller',
            'data' => Seller::find($seller->id)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Seller $seller
     * @return Response
     */
    public function destroy(Seller $seller)
    {
        $seller->delete();
        return response()->json([
            'saved' => 'true',
            'message' => 'Successfully Deleted Seller',
            'data' => []
        ]);
    }
}
