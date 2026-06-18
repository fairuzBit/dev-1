<?php

namespace App\Services\Admin;

use App\Models\TutorApplication;
use App\Models\Notification;

class ApplicationService
{
    public function getAllApplications()
    {
        return TutorApplication::with(['user', 'course'])
                               ->where('status', 'pending')
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
}
