<?php

Route::get('api/m-pesa/balance', 'Okotieno\\MPesa\\Controllers\\MPesaController@getBalance');

Route::middleware(['auth:api', 'bindings'])->group(function () {

    Route::get('/api/m-pesa/access-token', 'Okotieno\\MPesa\\Controllers\\MPesaController@token');
    Route::get('/api/m-pesa/access-token', 'Okotieno\\MPesa\\Controllers\\MPesaController@token');
    Route::post('/api/m-pesa/lipa-na-mpesa', 'Okotieno\\MPesa\\Controllers\\MPesaController@lipaNaMPesa');
    Route::get('/api/m-pesa/receipts', 'Okotieno\\MPesa\\Controllers\\MPesaPaymentController@index');
});
Route::middleware(['MPesaCallback'])->group(function () {
    Route::post('/api/m-pesa/callback-url', 'Okotieno\\MPesa\\Controllers\\MPesaController@callBack');

});



