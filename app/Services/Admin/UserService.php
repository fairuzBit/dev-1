<?php

namespace App\Services\Admin;

use App\Models\User;

class UserService
{
    public function getAllUsers()
    {
        return User::with('roles')->get();
    }

    public function destroyUser(int $id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return true;
    }
}
