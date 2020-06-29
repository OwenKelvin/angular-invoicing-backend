<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function getProfilePic()
    {

    }

    /**
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     */
    public function resetUserPassword(Request $request, User $user)
    {
        $user->setPassword($request->reset_password);
        return response()->json([
            'saved' => true,
            'message' => 'User Password Successfully reset'
        ]);
    }
}
