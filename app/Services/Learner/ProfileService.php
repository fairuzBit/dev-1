<?php

namespace App\Services\Learner;

use App\Models\User;

class ProfileService
{
    /**
     * Mengambil profil user berdasarkan ID
     */
    public function getProfile(int $userId)
    {
        return User::findOrFail($userId);
    }
}
