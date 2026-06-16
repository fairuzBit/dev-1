<?php

namespace App\Services\Admin;

use App\Models\Review;

class ModerationService
{
    public function getReviewsToModerate()
    {
        return Review::whereIn('rating', [1, 2])->get();
    }

    public function deleteReview(int $id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return true;
    }

    public function processReview(int $id)
    {
        $review = Review::findOrFail($id);
        $review->update([
            'moderation_status' => 'DIPROSES'
        ]);
        return $review;
    }

    public function resolveReview(int $id)
    {
        $review = Review::findOrFail($id);
        $review->update([
            'moderation_status' => 'SELESAI'
        ]);
        return $review;
    }
}
