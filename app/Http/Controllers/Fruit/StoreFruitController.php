<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Fruit\FruitStoreRequest;
use App\Models\Fruit;

class StoreFruitController extends Controller
{
    public function storeFruit(FruitStoreRequest $request)
    {
        $data = $request->validated();
        $fruit = Fruit::create($data);

        return $fruit;
    }
}
