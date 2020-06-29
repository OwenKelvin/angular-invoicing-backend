<?php

namespace Okotieno\MPesa\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Okotieno\MPesa\Models\MPesa;

class MPesaController extends Controller {

    public function token() {
        $mPesa = new MPesa();
        return $mPesa->getAccessToken();
    }
    public function getBalance() {
        $mPesa = new MPesa();
        return $mPesa->getAccountBalance();
    }
    public function lipaNaMPesa() {
        $mPesa = new MPesa([
            "TillNumber" => "174379",
            "Amount" => "1",
            "PhoneNumber" => "254712692310"
        ]);
        return json_encode($mPesa->lipaNaMPesa());
    }

    public function callBack(Request $request) {
        return MPesa::callback($request->all());

    }
}
