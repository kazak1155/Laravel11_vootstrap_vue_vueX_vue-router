<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function test()
    {
        return 111;
    }

}
