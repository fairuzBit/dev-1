<?php

namespace App\Services\Admin;

use App\Models\User;
use App\Models\Booking;

class StatsService
{
    public function getStats()
    {
        return [
            'total_users' => User::count(),
            'total_tutors' => User::role('tutor')->count(),
            'total_learners' => User::role('learner')->count(),
            'total_transactions' => Booking::where('status', 'completed')->sum('total_price'),
        ];
    }
}
