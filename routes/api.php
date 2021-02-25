<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/password/email', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/token', 'ResetPasswordController@tokenLogin');

Route::middleware('auth:api')->group(function () {
    Route::post('/password/reset', 'ResetPasswordController@reset');
});

Route::middleware('auth:api')->resource('/products', 'ProductController');

Route::middleware('auth:api')->resource('/sellers', 'SellerController');

Route::middleware('auth:api')->resource('/purchases', 'PurchaseController');

Route::middleware('auth:api')->resource('/sales', 'SaleController');

Route::middleware('auth:api')->get('/reports/sales', 'ReportsController@sales');
Route::middleware('auth:api')->get('/reports/purchases', 'ReportsController@purchases');

Route::middleware('auth:api')->resource('/products/{product}/inventory-quantity', 'InventoryAdjustmentController');
Route::middleware('auth:api')->get('/products/{product}/inventory-changes-statement', 'InventoryMovementStatementController@index');

Route::middleware('auth:api')->get('/users/auth', 'AuthController@authenticatedUser');
Route::middleware('auth:api')->get('/users/auth/logout', 'AuthController@logout');

Route::middleware('auth:api')->resource('/users', 'UserController');

Route::middleware('auth:api')->get('/users/profile-picture/{id}', 'UserApiController@getProfilePic');

Route::middleware('auth:api')->post('/users/{user}/password-reset', 'UserApiController@resetUserPassword');



