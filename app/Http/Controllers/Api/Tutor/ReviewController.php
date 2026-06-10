<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

/**
 * @tags Tutor Review
 */
class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $reviews = Review::with('user')
            ->where('tutor_id', $tutorId)
            ->get();

        return response()->json([
            'data' => $reviews->map(function ($review) {
                return [
                    'id' => $review->id,
                    'rating' => $review->rating,
                    'comment' => $review->comment,
                    'learner' => $review->user->name ?? 'Unknown',
                    'date' => $review->created_at->format('Y-m-d')
                ];
            })
        ]);
    }
}
