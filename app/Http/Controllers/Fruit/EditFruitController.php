<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Fruit\FruitEditRequest;
use App\Models\Fruit;
use Illuminate\Http\Request;

class EditFruitController extends Controller
{
    public function editFruit(FruitEditRequest $request, Fruit $fruit){

        $data = $request->validated();
        $fruit->update($data);

        return response([]);
    }
}
