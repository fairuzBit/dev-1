<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;

/**
 * @tags Tutor Dashboard
 */
class DashboardController extends Controller
{
    /**
     * Get Tutor Dashboard Stats
     */
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $totalSessions = Booking::where('tutor_id', $tutorId)->where('status', 'completed')->count();
        $totalEarnings = Booking::where('tutor_id', $tutorId)->where('status', 'completed')->sum('total_price');
        $rating = $request->user()->tutor->rating_avg ?? 0;

        return response()->json([
            'data' => [
                'total_earnings' => (int) $totalEarnings,
                'total_sessions' => $totalSessions,
                'rating' => (float) $rating,
            ]
        ]);
    }
}
