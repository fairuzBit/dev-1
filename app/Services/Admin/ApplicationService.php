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

    public function rejectApplication(int $id)
    {
        $app = TutorApplication::findOrFail($id);
        $app->update(['status' => 'rejected']);
        return $app;
    }
}
