<?php

namespace App\Services\Admin;

use App\Models\TutorApplication;
use App\Models\Notification;

class ApplicationService
{
    public function getAllApplications()
    {
        return TutorApplication::with(['user', 'course'])
                               ->orderBy('created_at', 'desc')
                               ->get();
    }

    public function approveApplication(int $id, int $adminId)
    {
        $app = TutorApplication::findOrFail($id);
        $app->update([
            'status' => 'approved',
            'approved_by' => $adminId,
            'approved_at' => now()
        ]);
        
        if ($app->new_semester !== null && $app->user->tutor) {
            $app->user->tutor->update([
                'current_semester' => $app->new_semester
            ]);
            $title = 'Pengajuan Naik Semester Disetujui';
            $message = "Selamat! Pengajuan Anda untuk naik ke semester {$app->new_semester} telah disetujui. Anda kini bisa mengajar mata kuliah yang lebih tinggi.";
        } else {
            $title = 'Selamat! Anda Menjadi Tutor';
            $message = 'Selamat! Pengajuan Anda telah disetujui Admin. Sekarang Anda resmi menjadi Tutor di KonekDin.';
        }

        if ($app->portfolio_url && $app->user->tutor) {
            $app->user->tutor->update([
                'portfolio_url' => $app->portfolio_url
            ]);
        }

        Notification::create([
            'user_id' => $app->user_id,
            'type' => 'application',
            'title' => $title,
            'message' => $message,
            'is_read' => false,
        ]);

        $app->user->syncRoles('tutor');
        return $app;
    }

    public function rejectApplication(int $id, ?string $reason = null, ?int $adminId = null)
    {
        $app = TutorApplication::findOrFail($id);
        $app->update([
            'status' => 'rejected',
            'admin_note' => $reason,
            'approved_by' => $adminId // Mencatat admin siapa yang menolak
        ]);

        $title = $app->new_semester !== null ? 'Pengajuan Naik Semester Ditolak' : 'Pengajuan Tutor Ditolak';
        $reasonText = $reason ? " Catatan Admin: {$reason}" : " Mohon perbaiki dokumen Anda dan ajukan ulang.";
        
        Notification::create([
            'user_id' => $app->user_id,
            'type' => 'application',
            'title' => $title,
            'message' => "Mohon maaf, pengajuan Anda ditolak.{$reasonText}",
            'is_read' => false,
        ]);

        return $app;
    }

    public function deleteApplication(int $id)
    {
        $app = TutorApplication::findOrFail($id);
        
        if ($app->transcript_files && is_array($app->transcript_files)) {
            foreach ($app->transcript_files as $path) {
                if (\Illuminate\Support\Facades\Storage::disk('public')->exists($path)) {
                    \Illuminate\Support\Facades\Storage::disk('public')->delete($path);
                }
            }
        }
        
        $app->delete();
        return true;
    }
}
