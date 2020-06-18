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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/')->group(function() {
    Route::get('/index',                           'DataController@index')->name('data');
    Route::get('/index/{smth}',                    'DataController@index')->name('data2');
    Route::post('/index/validata',                        'DataController@validdata')->name('validdata');
    Route::post('/index/validata2',                        'DataController@validdata2')->name('validdata2');
    Route::post('/index/store',                           'DataController@store')->name('store');
});
