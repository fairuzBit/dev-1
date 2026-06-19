<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\UserService;
use App\Models\User;

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
                    'tutor_id' => $user->tutor->id ?? null,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->roles->pluck('name')->contains('tutor') ? 'tutor' : ($user->roles->first()->name ?? 'learner'),
                    'avatar' => $user->avatar,
                    'created_at' => $user->created_at->format('d M Y'),
                    'suspended_until' => $user->suspended_until,
                ];
            })
        ]);
    }

    public function show($id)
    {
        // Eager loading yang benar
        $user = User::with([
            'roles', 
            'tutor.courses.course' // Hanya courses yang merupakan relasi tabel (ke TutorCourse)
        ])->findOrFail($id);

        // 2. Siapkan array documents
        $documents = [];

        if ($user->tutor) {
            // Masukkan transcript jika ada
            if (isset($user->tutor->transcript_path)) {
                $documents[] = [
                    'type'  => 'transcript',
                    'label' => 'Transkrip Nilai',
                    'name'  => 'Transkrip',
                    'url'   => url('storage/' . $user->tutor->transcript_path)
                ];
            }

            // Masukkan semua sertifikat
            if (!empty($user->tutor->certificate_files)) {
                foreach ($user->tutor->certificate_files as $cert) {
                    $documents[] = [
                        'type'  => 'certificate',
                        'label' => 'Sertifikat',
                        'name'  => basename($cert),
                        'url'   => url('storage/' . $cert)
                    ];
                }
            }

            // Masukkan semua portofolio
            if (!empty($user->tutor->portfolio_urls)) {
                foreach ($user->tutor->portfolio_urls as $port) {
                    $documents[] = [
                        'type'  => 'link',
                        'label' => 'Portofolio',
                        'value' => $port,
                        'name'  => $port,
                        'url'   => $port
                    ];
                }
            }
        }

        // 3. Return response lengkap
        return response()->json([
            'success' => true,
            'message' => 'Detail profil pengguna berhasil diambil',
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->roles->pluck('name')->contains('tutor') ? 'tutor' : ($user->roles->first()->name ?? 'learner'),
                'avatar' => $user->avatar,
                'phone' => $user->phone,
                'nim' => $user->nim,
                'university' => $user->university ?? 'Universitas Dian Nuswantoro',
                'major' => $user->major ?? 'Teknik Informatika',
                'faculty' => $user->faculty ?? 'Ilmu Komputer',
                'created_at' => $user->created_at->format('d M Y'),
                'suspended_until' => $user->suspended_until,
                
                // Field Khusus Tutor
                'ipk' => $user->tutor->ipk ?? null,
                'price_per_session' => $user->tutor->price ?? null,
                'courses' => $user->tutor && $user->tutor->courses 
                    ? $user->tutor->courses->map(function ($tc) {
                        return $tc->course->name ?? '';
                    })->filter()->values()
                    : [],
                'skills' => $user->tutor && $user->tutor->skills 
                    ? $user->tutor->skills 
                    : [],
                'documents' => $documents,
            ]
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
