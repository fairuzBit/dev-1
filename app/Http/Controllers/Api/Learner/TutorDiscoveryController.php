<?php

namespace App\Http\Controllers\Api\Learner;

use App\Http\Controllers\Controller;
use App\Http\Resources\TutorResource;
use App\Models\Tutor;

class TutorDiscoveryController extends Controller
{
    /**
     * Menampilkan Katalog Tutor
     */
    public function index()
    {
        // Eager Loading: Mengambil data tutor beserta user dan mapel-nya sekaligus
        // agar database tidak jebol karena kebanyakan query (N+1 Problem)
        $tutors = Tutor::with(['user', 'courses.course'])->get();

        return response()->json([
            'message' => 'Berhasil mengambil daftar tutor',
            'data' => TutorResource::collection($tutors)
        ]);
    }

    /**
     * Menampilkan Detail Satu Profil Tutor
     */
    public function show(string $id)
    {
        $tutor = Tutor::with(['user', 'courses.course'])->find($id);

        if (!$tutor) {
            return response()->json(['message' => 'Tutor tidak ditemukan'], 404);
        }

        return response()->json([
            'message' => 'Berhasil mengambil detail profil tutor',
            'data' => new TutorResource($tutor)
        ]);
    }
}
