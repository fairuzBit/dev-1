<?php

namespace App\Services\Tutor;

use App\Models\Tutor;
use Exception;

class TutorProfileService
{
    /**
     * Update tutor profile
     */
    public function updateProfile(Tutor $tutor, array $data)
    {
        $tutor->update($data);
        return $tutor;
    }
}
