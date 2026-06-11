<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\ApplicationService;

/**
 * @tags Admin Applications
 */
class ApplicationController extends Controller
{
    protected $applicationService;

    public function __construct(ApplicationService $applicationService)
    {
        $this->applicationService = $applicationService;
    }

    public function index()
    {
        $applications = $this->applicationService->getAllApplications();

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
        $app = $this->applicationService->approveApplication($id, $request->user()->id);

        return response()->json([
            'message' => 'Tutor disetujui',
            'data' => $app
        ]);
    }

    public function reject($id)
    {
        $app = $this->applicationService->rejectApplication($id);

        return response()->json([
            'message' => 'Tutor ditolak',
            'data' => $app
        ]);
    }
}
