<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InventoryMovementStatementController extends Controller
{
    public function index(Product $product)
    {
        $adjustments = $product->inventoryAdjustment()
            ->select(['id', 'adjustment as quantity', 'created_at as dateTime'])
            ->get()
            ->map(function ($arr) {
                $arr['type'] = 'adjustment';
                return $arr;
            })
            ->toArray();
        $sales = $product->sales()
            ->select(['id', 'quantity', 'created_at as dateTime'])
            ->get()
            ->map(function ($arr) {
                $arr['type'] = 'sale';
                $arr['quantity'] = -$arr['quantity'];
                return $arr;
            })
            ->toArray();
        $purchases = $product->purchases()
            ->select(['id', 'created_at as dateTime', 'quantity'])
            ->get()
            ->map(function ($arr) {
                $arr['type'] = 'purchase';
                return $arr;
            })
            ->toArray();
        $combinedMovement = array_merge(
            array_merge($adjustments, $sales, $purchases)
        );

        return response()->json(
            array_merge($product->toArray(), ['inventoryStatement' => $combinedMovement])
        );
    }
}
