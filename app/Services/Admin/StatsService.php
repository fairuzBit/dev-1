<?php

namespace App\Services\Admin;

use App\Models\User;
use App\Models\Booking;
use App\Models\Review;
use App\Models\TutorApplication;
use App\Models\ModerationLog;
use App\Models\Tutor;
use App\Models\Course;

class StatsService
{
    public function getStats()
    {
        $activeComplaints = Review::whereIn('rating', [1, 2])
            ->where('moderation_status', 'MENUNGGU TINJAUAN')
            ->count();

        $topTutors = Tutor::withCount(['bookings as completed_sessions_count' => function ($query) {
            $query->where('status', 'completed');
        }])->with('user')
            ->orderByDesc('completed_sessions_count')
            ->take(3)
            ->get()
            ->map(function ($tutor) {
                return [
                    'id' => $tutor->id,
                    'name' => $tutor->user->name ?? 'Unknown',
                    'rating' => round($tutor->rating_avg, 1),
                    'sessions' => $tutor->completed_sessions_count
                ];
            });

        $popularCourses = Course::withCount('bookings')
            ->orderByDesc('bookings_count')
            ->take(3)
            ->get()
            ->map(function ($course) {
                return [
                    'id' => $course->id,
                    'name' => $course->name,
                    'bookings' => $course->bookings_count
                ];
            });

        return [
            'total_learners' => User::role('learner')->count(),
            'total_tutors' => User::role('tutor')->count(),
            'active_complaints' => $activeComplaints,
            'pending_verifications' => TutorApplication::where('status', 'pending')->count(),
            'new_complaints' => $activeComplaints, // Alias
            'aktivitas_terbaru' => ModerationLog::latest()->take(5)->get(),
            'top_tutors' => $topTutors,
            'mata_kuliah_populer' => $popularCourses,
            
            // Legacy fallbacks just in case
            'total_users' => User::count(),
            'total_transactions' => Booking::where('status', 'completed')->sum('total_price'),
        ];
    }
}
