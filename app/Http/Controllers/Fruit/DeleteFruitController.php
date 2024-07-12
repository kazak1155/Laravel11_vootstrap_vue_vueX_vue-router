<?php

namespace App\Http\Controllers\Fruit;

use App\Http\Controllers\Controller;
use App\Models\Fruit;
use Illuminate\Http\Request;

class DeleteFruitController extends Controller
{
    /**
     * delete object "fruit" in DataBase
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Foundation\Application|\Illuminate\Http\Response
     * return response array with result success
     */
    public function deleteFruit(Fruit $fruit)
    {
        $fruit->delete();

        return response(['result' => 'success']);
    }
}
