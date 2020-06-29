<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Okotieno\PermissionsAndRoles\Models\Role;
use App\Http\Requests\StaffStoreRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return jsonResponse
     */
    public function store(StaffStoreRequest $request)
    {
        $role = Role::find($request->staff_type);
        if ($role->name === 'super admin') {
            abort(403, 'You do not permission to create a super admin');
        }
        if ($role->name === 'admin' && !auth()->user()->can('create admin')) {
            abort(403, 'You do not permission to create an admin');
        }
        if ($role->is_staff == true) {
            $user = User::where('email', $request->email)->first();
            if ($user == null) {
                $user = User::create(
                    array_merge(
                        $request->all(), ['password' => Str::random(50)]
                    )

                );
            }
            $user->assignRole($role->name);
            $user = User::find($user->id);
            return response()->json([
                'saved' => true,
                'message' => 'Successfully created ' . $role->name,
                'data' => [
                    'id' => $user->id,
                    'first_name' => $user->first_name,
                    'last_name' => $user->last_name,
                    'middle_name' => $user->middle_name,
                    'other_names' => $user->other_names,
                    'birth_cert_number' => $user->birth_cert_number,
                    'date_of_birth' => $user->date_of_birth,
                    'email' => $user->email,
                    'phone' => $user->phone,
                    'name_prefix_id' => $user->name_prefix_id,
                    'gender_id' => $user->gender_id,
                    'religion_id' => $user->religion_id
                ]
            ]);
        } else {
            abort(416, 'Invalid Staff Type');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return JsonResponse
     */
    public function show(User $user)
    {
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     */
    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return response()->json([
            'saved' => true,
            'message' => 'User successfully updated',
            'data' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return void
     */
    public function destroy($id)
    {
        //
    }
}
