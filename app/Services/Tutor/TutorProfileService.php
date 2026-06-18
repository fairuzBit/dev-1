<?php

namespace App\Services\Tutor;

use App\Models\Tutor;
use Exception;

class TutorProfileService
{
    /**
     * Update tutor profile
     */
    public function updateProfile($user, Tutor $tutor, array $data)
    {
        $userData = collect($data)->only(['name', 'nim', 'phone', 'avatar'])->toArray();
        if (!empty($userData)) {
            $user->update($userData);
        }

        $tutorData = collect($data)->only(['bio', 'skills', 'price', 'portfolio_url'])->toArray();
        if (isset($data['price_per_session'])) {
            $tutorData['price'] = $data['price_per_session'];
        }
        
        if (!empty($tutorData)) {
            $tutor->update($tutorData);
        }
        return $tutor;
    }
}
