<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;

/**
 * @tags Tutor Booking
 */
class BookingController extends Controller
{
    /**
     * Get bookings for tutor
     */
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $bookings = Booking::with(['user', 'bookingSlots.masterSlot'])
            ->where('tutor_id', $tutorId)
            ->whereIn('status', ['pending', 'paid'])
            ->get();

        return response()->json([
            'data' => $bookings->map(function ($b) {
                return [
                    'id' => $b->id,
                    'learner' => $b->user->name ?? 'Unknown',
                    'date' => $b->date,
                    'status' => $b->status,
                    'total_price' => $b->total_price,
                    'slots' => $b->bookingSlots->map(fn($bs) => $bs->masterSlot->time_range ?? '')
                ];
            })
        ]);
    }

    public function schedules(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        $schedules = Booking::with(['user', 'bookingSlots.masterSlot'])
            ->where('tutor_id', $tutorId)
            ->where('status', 'accepted')
            ->where('date', '>=', now()->toDateString())
            ->get();

        return response()->json(['data' => $schedules]);
    }

    public function history(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        $history = Booking::with('user')
            ->where('tutor_id', $tutorId)
            ->whereIn('status', ['completed', 'rejected', 'cancelled'])
            ->get();

        return response()->json(['data' => $history]);
    }

    public function accept(Request $request, $id)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        $booking = Booking::where('id', $id)->where('tutor_id', $tutorId)->firstOrFail();
        
        $booking->update(['status' => 'accepted']);

        return response()->json([
            'message' => 'Pesanan diterima',
            'data' => $booking
        ]);
    }

    public function reject(Request $request, $id)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        $booking = Booking::where('id', $id)->where('tutor_id', $tutorId)->firstOrFail();
        
        $booking->update(['status' => 'rejected']);

        return response()->json([
            'message' => 'Pesanan ditolak',
            'data' => $booking
        ]);
    }
}
