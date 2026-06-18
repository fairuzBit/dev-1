<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Tutor\UploadDocumentRequest;
use App\Http\Requests\Tutor\UpgradeSemesterRequest;
use App\Services\Tutor\TutorRegistrationService;

class TutorRegistrationController extends Controller
{
    protected $registrationService;

    public function __construct(TutorRegistrationService $registrationService)
    {
        $this->registrationService = $registrationService;
    }

    /**
     * Upload Dokumen dan Ekstrak IPK menggunakan AI
     * 
     * @authenticated
     */
    public function uploadDocument(UploadDocumentRequest $request)
    {

        $file = $request->file('transcript_file');
        
        $result = $this->registrationService->processDocument(
            $request->user()->id, 
            $request->validated(), 
            $file
        );

        return response()->json([
            'message' => 'Dokumen berhasil diunggah dan dianalisis',
            'data' => $result
        ], 200);
    }

    /**
     * Mengajukan naik semester dengan transkrip baru
     * 
     * @authenticated
     */
    public function upgradeSemester(UpgradeSemesterRequest $request)
    {
        $file = $request->file('transcript_file');
        
        $result = $this->registrationService->processUpgradeSemester(
            $request->user()->id, 
            $request->validated(), 
            $file
        );

        return response()->json([
            'success' => true,
            'message' => 'Pengajuan naik semester berhasil dikirim dan menunggu persetujuan admin.',
            'data' => $result
        ], 200);
    }
}
