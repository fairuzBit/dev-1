<?php

namespace App\Http\Controllers\Api\Learner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Learner\ProfileService;
use App\Http\Resources\UserResource;

class ProfileController extends Controller
{
    protected $profileService;

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function me(Request $request)
    {
        // 1. Minta data ke Service
        $user = $this->profileService->getProfile($request->user()->id);

        // 2. Bungkus data menggunakan Resource
        return response()->json([
            'success' => true,
            'message' => 'Data user berhasil diambil',
            'data' => new UserResource($user)
        ]);
    }
}
