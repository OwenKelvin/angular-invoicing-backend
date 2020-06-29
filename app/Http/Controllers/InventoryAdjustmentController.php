<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\InventoryAdjustment;
use Illuminate\Http\Request;

class InventoryAdjustmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        $noOfPurchases = $product->purchases()->select('quantity')->get()->sum('quantity');
        $noOfSales = $product->sales()->select('quantity')->get()->sum('quantity');
        return $noOfPurchases - $noOfSales;
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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function store(Request $request, Product $product)
    {
        $adjustment = $product->inventoryAdjustment()->create([
            'adjustment' => $request->adjustment,
            'reason'=> $request->reason
        ]);
        return [
            'saved' => true,
            'message' => 'Successfully adjusted inventory',
            'data' => $adjustment
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\InventoryAdjustment  $inventoryAdjustment
     * @return \Illuminate\Http\Response
     */
    public function show(InventoryAdjustment $inventoryAdjustment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\InventoryAdjustment  $inventoryAdjustment
     * @return \Illuminate\Http\Response
     */
    public function edit(InventoryAdjustment $inventoryAdjustment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\InventoryAdjustment  $inventoryAdjustment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InventoryAdjustment $inventoryAdjustment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\InventoryAdjustment  $inventoryAdjustment
     * @return \Illuminate\Http\Response
     */
    public function destroy(InventoryAdjustment $inventoryAdjustment)
    {
        //
    }
}
