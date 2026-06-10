<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TutorApplication;

/**
 * @tags Admin Applications
 */
class ApplicationController extends Controller
{
    public function index()
    {
        $applications = TutorApplication::with(['user', 'course'])->get();

        return response()->json([
            'data' => $applications->map(function ($app) {
                return [
                    'id' => $app->id,
                    'user_id' => $app->user_id,
                    'name' => $app->user->name ?? 'Unknown',
                    'course' => $app->course->name ?? 'Unknown',
                    'status' => $app->status,
                    'cv_url' => asset('storage/' . $app->transcript_file)
                ];
            })
        ]);
    }

    public function approve(Request $request, $id)
    {
        $app = TutorApplication::findOrFail($id);
        $app->update([
            'status' => 'approved',
            'approved_by' => $request->user()->id,
            'approved_at' => now()
        ]);
        
        $app->user->assignRole('tutor');

        return response()->json([
            'message' => 'Tutor disetujui',
            'data' => $app
        ]);
    }

    public function reject($id)
    {
        $app = TutorApplication::findOrFail($id);
        $app->update(['status' => 'rejected']);

        return response()->json([
            'message' => 'Tutor ditolak',
            'data' => $app
        ]);
    }
}
