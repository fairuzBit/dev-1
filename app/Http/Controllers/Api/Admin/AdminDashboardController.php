<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tutor;
use App\Models\Booking;

class AdminDashboardController extends Controller
{
    /**
     * Get platform statistics for Admin Dashboard
     */
    public function stats()
    {
        $totalUsers = User::count();
        $totalTutors = Tutor::count();
        $totalTransactions = Booking::where('status', 'completed')->sum('total_price');
        $activeBookings = Booking::whereIn('status', ['pending', 'accepted', 'paid', 'ongoing'])->count();

        return response()->json([
            'data' => [
                'total_users' => $totalUsers,
                'total_tutors' => $totalTutors,
                'total_transactions' => (float) $totalTransactions,
                'active_bookings' => $activeBookings
            ]
        ]);
    }

    /**
     * Get complaints (dummy for now)
     */
    public function complaints()
    {
        return response()->json([
            'data' => []
        ]);
    }
}
