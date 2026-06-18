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
            'data' => $reviews->map(function ($review) {
                return [
                    'id' => $review->id,
                    'tanggal' => $review->created_at->format('d M Y, H:i'),
                    'learner_id' => $review->booking->learner->id ?? null,
                    'learner_name' => $review->booking->learner->name ?? 'Unknown',
                    'tutor_id' => $review->booking->tutor->id ?? null,
                    'tutor_name' => $review->booking->tutor->user->name ?? 'Unknown',
                    'rating' => $review->rating,
                    'comment' => $review->comment,
                    'moderation_status' => $review->moderation_status ?? 'MENUNGGU TINJAUAN'
                ];
            })
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
