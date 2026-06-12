<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Tutor\TutorProfileService;
use App\Http\Requests\Tutor\UpdateProfileRequest;

/**
 * @tags Tutor Profile
 */
class ProfileController extends Controller
{
    protected $profileService;

    public function __construct(TutorProfileService $profileService)
    {
        $this->profileService = $profileService;
    }
    /**
     * Update Tutor Profile
     */
    public function update(UpdateProfileRequest $request)
    {
        $user = $request->user();
        $tutor = $user->tutor;

        if (!$tutor) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $tutor = $this->profileService->updateProfile($tutor, $request->validated());

        return response()->json([
            'message' => 'Profil tutor diperbarui',
            'data' => new \App\Http\Resources\Tutor\TutorProfileResource($tutor)
        ]);
    }
}
