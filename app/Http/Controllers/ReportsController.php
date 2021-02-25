<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;
use App\Models\SoldProduct;
use Carbon\Carbon;

class ReportsController extends Controller
{
    public function sales(Request $request)
    {
        $start_date = Carbon::parse($request->start_date)->startOfDay();
        $end_date = Carbon::parse($request->end_date)->endOfDay();
        return SoldProduct::whereDate('created_at', '>=', $start_date)
            ->whereDate('created_at', '<=', $end_date)
            ->get();
    }
    public function purchases(Request $request)
    {
        $start_date = Carbon::parse($request->start_date)->startOfDay();
        $end_date = Carbon::parse($request->end_date)->endOfDay();
        return Purchase::whereDate('created_at', '>=', $start_date)
            ->whereDate('created_at', '<=', $end_date)
            ->get();
    }
}
