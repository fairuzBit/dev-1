<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

/**
 * @tags Admin Stats
 */
class StatsController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => [
                'total_users' => User::count(),
                'total_tutors' => User::role('tutor')->count(),
                'total_learners' => User::role('learner')->count(),
                'total_transactions' => \App\Models\Booking::where('status', 'completed')->sum('total_price'),
            ]
        ]);
    }
}
