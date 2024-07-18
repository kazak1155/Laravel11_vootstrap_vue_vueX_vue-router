<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserStoreController extends Controller
{
    public function storeUser(UserStoreRequest $request)
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        $newUser = User::where('email', $data['email'])->first();

        if($newUser) {
            return response([
                'success' => false,
                'message' => 'User with this email already exists',
            ], 403);
        } else {
            $newUser = User::create($data);
        }

        $token = auth()->tokenByid($newUser->id);

        return  response([
            'success' => true,
            'message' => 'User with name:' . $newUser->name . ' registered',
            'token' => $token,
        ]);
    }
}
