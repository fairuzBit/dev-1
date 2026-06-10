<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @tags Tutor Profile
 */
class ProfileController extends Controller
{
    /**
     * Update Tutor Profile
     */
    public function update(Request $request)
    {
        $user = $request->user();
        $tutor = $user->tutor;

        if (!$tutor) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $validated = $request->validate([
            'bio' => 'nullable|string',
            'skills' => 'nullable|array',
            'price' => 'nullable|numeric'
        ]);

        $tutor->update($validated);

        return response()->json([
            'message' => 'Profil tutor diperbarui',
            'data' => $tutor
        ]);
    }
}
