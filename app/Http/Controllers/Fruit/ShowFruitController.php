<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Models\Fruit;
use Illuminate\Http\Request;

class ShowFruitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function showAllFruits()
    {

        return  [
            'data' => Fruit::all()
        ];
    }

    public function test()
    {

        return  111;
    }

    /**
     * Display one object from DataBase.
     */
    public function snowFruit(Fruit $fruit)
    {

        return $fruit;
    }

}
