<?php

namespace App\Services\Tutor;

use App\Models\Review;

class ReviewService
{
    public function getReviews(int $tutorId)
    {
        return Review::with('user')
            ->where('tutor_id', $tutorId)
            ->get();
    }
}
