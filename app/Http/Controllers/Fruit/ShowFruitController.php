<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResourse;
use App\Models\Fruit;
use Illuminate\Http\Request;

class ShowFruitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function showAllFruits()
    {
        return FruitResourse::collection(Fruit::all());
    }

    /**
     * Display one object from DataBase.
     */
    public function snowFruit(Fruit $fruit)
    {
        return new FruitResourse($fruit);
    }

}
