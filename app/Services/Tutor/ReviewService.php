<?php

namespace App\Services\Tutor;

use App\Models\Review;

class ReviewService
{
    public function getReviews(int $tutorId)
    {
        return Review::with('booking.learner')
            ->whereHas('booking', function($query) use ($tutorId) {
                $query->where('tutor_id', $tutorId);
            })
            ->get();
    }
}
