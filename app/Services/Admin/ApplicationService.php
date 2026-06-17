<?php

namespace App\Services\Admin;

use App\Models\TutorApplication;

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
        return $app;
    }
}
