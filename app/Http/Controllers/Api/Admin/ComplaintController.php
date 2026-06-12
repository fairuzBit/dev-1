<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\ComplaintService;

/**
 * @tags Admin Complaints
 */
class ComplaintController extends Controller
{
    protected $complaintService;

    public function __construct(ComplaintService $complaintService)
    {
        $this->complaintService = $complaintService;
    }

    public function index()
    {
        $complaints = $this->complaintService->getComplaints();

        return response()->json([
            'data' => $complaints
        ]);
    }
}
