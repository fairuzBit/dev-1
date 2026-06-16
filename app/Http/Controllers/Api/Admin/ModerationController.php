<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\ModerationService;

/**
 * @tags Admin Moderation
 */
class ModerationController extends Controller
{
    protected $moderationService;

    public function __construct(ModerationService $moderationService)
    {
        $this->moderationService = $moderationService;
    }

    public function reviews()
    {
        $reviews = $this->moderationService->getReviewsToModerate();

        return response()->json([
            'success' => true,
            'message' => 'Daftar ulasan yang butuh moderasi berhasil diambil',
            'data' => $reviews
        ]);
    }

    public function destroyReview($id)
    {
        $this->moderationService->deleteReview($id);

        return response()->json([
            'success' => true,
            'message' => 'Ulasan berhasil dihapus secara permanen'
        ]);
    }

    public function processReview($id)
    {
        $review = $this->moderationService->processReview($id);

        return response()->json([
            'success' => true,
            'message' => 'Status ulasan diperbarui menjadi DIPROSES',
            'data' => $review
        ]);
    }

    public function resolveReview($id)
    {
        $review = $this->moderationService->resolveReview($id);

        return response()->json([
            'success' => true,
            'message' => 'Status ulasan diperbarui menjadi SELESAI',
            'data' => $review
        ]);
    }
}
