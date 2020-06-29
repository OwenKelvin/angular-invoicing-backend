<?php

namespace App\Http\Controllers;

use App\Http\Requests\PurchaseDestroyRequest;
use App\Models\Purchase;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\PurchaseStoreRequest;
use App\Http\Requests\PurchaseUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        if($request->today) {
            return response()->json(
                Purchase::whereRaw('date(created_at) = ?', [Carbon::today()])->get()
            );
        }
        if ($request->purchase_dates) {
            $dates = Purchase::selectRaw('date(purchase_date) as date')->distinct()->get();
            return response()->json(
                $dates->pluck('date')
            );
        }
        if ($request->purchase_date) {
            return response()->json(

                Purchase::where('purchase_date', Carbon::create($request->purchase_date)
                    ->format('Y-m-d'))->get()
            );
        }
        return response()->json(Purchase::all());
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
     * @param PurchaseStoreRequest $request
     * @return JsonResponse
     */
    public function store(PurchaseStoreRequest $request)
    {
        $purchase = Purchase::create($request->all());
        return response()->json([
            'saved' => true,
            'message' => 'Successfully saved purchase',
            'data' => $purchase
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Purchase $purchase
     * @return JsonResponse
     */
    public function show(Purchase $purchase)
    {
        return response()->json($purchase);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Purchase $purchase
     * @return Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PurchaseUpdateRequest $request
     * @param Purchase $purchase
     * @return JsonResponse
     */
    public function update(PurchaseUpdateRequest $request, Purchase $purchase)
    {
        $purchase->update($request->all());
        return response()->json([
            'saved' => true,
            'message' => 'Successfully updated Purchase',
            'data' => Purchase::find($purchase->id)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PurchaseDestroyRequest $request
     * @param Purchase $purchase
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(PurchaseDestroyRequest $request, Purchase $purchase)
    {
        $purchase->delete();
        return response()->json([
            'saved' => true,
            'message' => 'Successfully Deleted Purchase',
            'data' => []
        ]);
    }
}
