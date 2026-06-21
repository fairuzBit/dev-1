<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Tutor\BookingService;

/**
 * @tags Tutor Booking
 */
class BookingController extends Controller
{
    protected $bookingService;

    public function __construct(BookingService $bookingService)
    {
        $this->bookingService = $bookingService;
    }

    /**
     * Get bookings for tutor
     */
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $bookings = $this->bookingService->getSchedules($tutorId);

        return response()->json([
            'data' => $bookings->map(function ($b) {
                return [
                    'id' => $b->id,
                    'learner' => $b->learner->name ?? 'Unknown',
                    'learner_phone' => $b->learner->phone ?? null,
                    'course' => $b->course->name ?? 'Unknown',
                    'date' => $b->booking_date,
                    'status' => $b->status,
                    'total_price' => $b->total_price,
                    'slots' => $b->bookingSlots->map(function($bs) {
                        if (!$bs->masterSlot) return '';
                        $start = substr($bs->masterSlot->start_time, 0, 5);
                        $end = substr($bs->masterSlot->end_time, 0, 5);
                        return "$start - $end";
                    })->filter()->values()
                ];
            })
        ]);
    }

    public function history(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        $history = $this->bookingService->getHistory($tutorId);

        return response()->json(['data' => $history]);
    }

}
