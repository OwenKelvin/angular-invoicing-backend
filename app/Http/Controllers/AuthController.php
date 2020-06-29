<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticatedUser() {
        $user = User::find(auth()->id());
        $response = $user->toArray();

        $response['permissions'] = $user->getAllPermissions()->pluck('name')->toArray();
        $response['roles'] = $user->roles->pluck('name')->toArray();
        return response()->json($response);
    }
    public function logout() {
        auth()->user()->token()->revoke();
        return response()->json([
           'saved' => true,
           'message' => 'Successfully logged out',
           'data' => []
        ]);
    }
}
