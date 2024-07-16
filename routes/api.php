<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Fruit\DeleteFruitController;
use App\Http\Controllers\Fruit\EditFruitController;
use App\Http\Controllers\Fruit\ShowFruitController;
use App\Http\Controllers\Fruit\StoreFruitController;
use App\Http\Controllers\User\ShowUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
//
//    Route::post('logout', [AuthController::class, 'logout']);
//    Route::post('refresh', [AuthController::class, 'refresh']);
//    Route::post('me', [AuthController::class, 'me']);
//    Route::post('login', [AuthController::class, 'login']);
//
//    Route::get('test', [ShowFruitController::class, 'test']);
//
//    Route::group(['namespaces' => 'Fruit', 'prefix' => 'fruit'], function () {
//        Route::get('/', [ShowFruitController::class, 'showAllFruits'])->name('fruit.showAll');
//    });
//
//});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {

    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('login', [AuthController::class, 'login']);


    route::group(['middleware' => 'jwt.auth'], function () {

        Route::group(['namespaces' => 'Fruit', 'prefix' => 'fruit'], function () {
            Route::get('/', [ShowFruitController::class, 'showAllFruits'])->name('fruit.showAll');
            Route::get('/{fruit}', [ShowFruitController::class, 'snowFruit'])->name('fruit.showOne');
            Route::post('/', [StoreFruitController::class, 'storeFruit'])->name('fruit.post');
            Route::delete('/{fruit}', [DeleteFruitController::class, 'deleteFruit'])->name('fruit.delete');
            Route::patch('/{fruit}', [EditFruitController::class, 'editFruit'])->name('fruit.edit');
        });

        Route::group(['namespaces' => 'User', 'prefix' => 'user'], function () {
//            Route::get('/', [ShowFruitController::class, 'showAllFruits'])->name('fruit.showAll');
            Route::get('/{user}', [ShowUserController::class, 'showOne'])->name('user.showOne');
//            Route::post('', [StoreFruitController::class, 'storeFruit'])->name('fruit.post');
//            Route::delete('/{fruit}', [DeleteFruitController::class, 'deleteFruit'])->name('fruit.delete');
//            Route::patch('/{fruit}', [EditFruitController::class, 'editFruit'])->name('fruit.edit');
        });

    });

//    Route::group(['namespaces' => 'Fruit', 'prefix' => 'fruit'], function () {
//        Route::get('/', [ShowFruitController::class, 'showAllFruits'])->name('fruit.showAll');
//    });

});


//Route::get('fruit', [ShowFruitController::class, 'showAllFruits'])->name('fruit.showAll');



