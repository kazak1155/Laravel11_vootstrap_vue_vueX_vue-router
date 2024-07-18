<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

Route::get('{page?}', [IndexController::class, 'index'])->name('home')->where('page', '[\/\w\.-]*');

Auth::routes();

