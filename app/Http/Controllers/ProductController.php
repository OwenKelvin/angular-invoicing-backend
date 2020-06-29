<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Requests\ProductDestroyRequest;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        if ($request->stock_count != null) {
            $response = [];
            foreach (Product::all() as $product) {
                $response[] = [
                    'id' => $product->id,
                    'name' => $product->name,
                    'count' => $product->purchases()->sum('quantity')
                        - $product->sales()->sum('quantity')
                        + $product->inventoryAdjustment()->sum('adjustment'),
                    'min' => $product->min,
                    'max' => $product->max,
                ];
            }
            return $response;
        }
        return Product::all();
    }

    public function store(ProductStoreRequest $request)
    {
        $product = Product::create($request->all());
        return [
            'saved' => true,
            'message' => 'Successfully saved Product',
            'data' => $product
        ];
    }

    public function update(ProductUpdateRequest $request, Product $product)
    {
        $product->update($request->all());

        return [
            'saved' => true,
            'message' => 'Successfully updated Product',
            'data' => Product::find($product->id)
        ];
    }

    public function destroy(ProductDestroyRequest $request, Product $product)
    {
        $product->delete();

        return [
            'saved' => true,
            'message' => 'Successfully Deleted Product',
            'data' => []
        ];
    }
}
