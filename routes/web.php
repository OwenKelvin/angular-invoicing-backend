<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    echo "Cache cleared Successfully, Exit code:";
    echo $exitCode;

    $exitCode = Artisan::call('config:clear');
    echo "<br/>Config cleared Successfully, Exit code:";
    echo $exitCode;
});

Route::get('/{catchall?}', function () {
    return view('welcome');
})->where('catchall', '^(?!api).*$')->name('administration');

// Route::get('/', function () {
//     return view('welcome');
// });
