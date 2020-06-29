<?php

namespace Okotieno\MPesa\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Okotieno\MPesa\Models\MPesaPayment;

class MPesaPaymentController extends Controller
{
    public function index(Request $request){
        return response()->json(
            MPesaPayment::all()
        );
    }
}
