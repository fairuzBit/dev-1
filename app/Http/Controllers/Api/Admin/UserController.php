<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\UserService;

/**
 * @tags Admin Users
 */
class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $users = $this->userService->getAllUsers();

        return response()->json([
            'data' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->roles->first()->name ?? 'learner',
                    'avatar' => $user->avatar,
                    'created_at' => $user->created_at->format('d M Y'),
                    'suspended_until' => $user->suspended_until,
                ];
            })
        ]);
    }

    public function destroy($id)
    {
        $this->userService->destroyUser($id);

        return response()->json(['message' => 'Pengguna berhasil diblokir/dihapus']);
    }

    public function suspend(\App\Http\Requests\Admin\SuspendUserRequest $request, $id)
    {
        $duration = $request->validated('duration');
        $user = $this->userService->suspendUser($id, $duration);

        return response()->json([
            'success' => true,
            'message' => 'Pengguna berhasil disuspend',
            'data' => $user
        ]);
    }

    public function unsuspend($id)
    {
        $user = $this->userService->unsuspendUser($id);

        return response()->json([
            'success' => true,
            'message' => 'Suspend pengguna berhasil dicabut',
            'data' => $user
        ]);
    }
}
