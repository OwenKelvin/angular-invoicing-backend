<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use App\Models\PaymentMethod;
use App\Helpers\FIFO;
use App\Models\SoldProduct;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        if ($request->sale_dates) {
            return response()->json(
                SoldProduct::selectRaw('date(created_at) as date')
                    ->distinct()->get()->pluck('date')
            );
        }
        if ($request->sale_date) {
            return response()->json(
                SoldProduct::whereDate('created_at',Carbon::create($request->sale_date))->get()
            );
        }
        return response()->json(

            ['2020-06-05', '2020-06-04', '2020-05-02']
        );
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
        $sale = Sale::create($request->discount);

        $paymentMethod = PaymentMethod::where('name', $request->payment['method'])->first();
        $creditorId = null;
        $amount = null;
        if (key_exists('creditor_id', $request->payment)) {
            $creditorId = $request->payment['creditor_id'];
        }
        if (key_exists('amount', $request->payment)) {
            $amount = $request->payment['amount'];
        }

        $paymentMethod->sales()->save($sale,
            ['creditor_id' => $creditorId],
            ['amount' => $amount]
        );

        foreach ($request->products as $product) {
            $product['fifo_purchase_price'] = FIFO::price($product['product_id'], $product['quantity']);
            $sale->products()->create($product);
        }
        return response()->json([
            'saved' => true,
            'message' => 'Sale Completed Successfully',
            'data' => $sale
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Sale $sale
     * @return JsonResponse
     */
    public function show(SoldProduct $sale)
    {
        return response()->json($sale);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Sale $sale
     * @return Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Sale $sale
     * @return JsonResponse
     */
    public function update(Request $request, SoldProduct $sale)
    {
        $updateData = [
            'fifo_purchase_price' => $request->price,
            'quantity' => $request->quantity,
            'selling_price' => $request->sellingPrice,
        ];
        $sale->update($updateData);
        return response()->json([
            'saved' => true,
            'message' => 'Successfully deleted sold item',
            'data' => SoldProduct::find($sale->id)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Sale $sale
     * @return JsonResponse
     */
    public function destroy(SoldProduct $sale)
    {
        $sale->delete();
        return response()->json([
            'saved' => true,
            'message' => 'Successfully deleted sold item'
        ]);
    }
}
