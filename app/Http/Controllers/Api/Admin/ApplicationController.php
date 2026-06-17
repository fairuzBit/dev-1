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
                    'email' => $app->user->email ?? 'Unknown',
                    'avatar' => $app->user->avatar ?? null,
                    'status' => $app->status,
                    'created_at' => $app->created_at->format('d M Y'),
                    'documents' => [
                        ['type' => 'file', 'name' => 'KHS.pdf', 'label' => 'Transkrip Nilai', 'url' => asset('storage/' . $app->transcript_file)],
                        ['type' => 'link', 'value' => $app->portfolio_link, 'label' => 'Portofolio'],
                    ],
                    'matkul' => $app->courses ? $app->courses->pluck('name') : [],
                    'keahlian' => $app->skills ? $app->skills->pluck('name') : [],
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
