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

        return response()->json([
            'data' => $history->map(function ($h) {
                $statusLabel = 'SELESAI';
                if ($h->status === 'rejected') $statusLabel = 'DITOLAK';
                if ($h->status === 'cancelled') $statusLabel = 'DIBATALKAN';

                // Format slots sebagai array of objects {start_time, end_time}
                $slots = $h->bookingSlots->map(function ($bs) {
                    if (!$bs->masterSlot) return null;
                    return [
                        'start_time' => substr($bs->masterSlot->start_time, 0, 5),
                        'end_time'   => substr($bs->masterSlot->end_time, 0, 5),
                    ];
                })->filter()->values();

                return [
                    'id'           => $h->id,
                    'title'        => $h->learner->name ?? 'Learner',
                    'course'       => $h->course->name ?? 'Mata Kuliah',
                    'booking_date' => $h->booking_date ? $h->booking_date->format('Y-m-d') : null,
                    'slots'        => $slots,
                    'status'       => $statusLabel,
                    'has_review'   => $h->review !== null,
                    'review_id'    => $h->review->id ?? null,
                ];
            })
        ]);
    }

    /**
     * Accept a booking (Tutor action)
     */
    public function accept(Request $request, $id)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        try {
            $booking = $this->bookingService->acceptBooking($tutorId, $id);
            return response()->json([
                'success' => true,
                'message' => 'Pesanan berhasil diterima',
                'data'    => $booking
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Gagal menerima pesanan: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Reject a booking (Tutor action)
     */
    public function reject(Request $request, $id)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        try {
            $booking = $this->bookingService->rejectBooking($tutorId, $id);
            return response()->json([
                'success' => true,
                'message' => 'Pesanan berhasil ditolak',
                'data'    => $booking
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Gagal menolak pesanan: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Mark booking as completed (Tutor action)
     */
    public function complete(Request $request, $id)
    {
        $tutorId = $request->user()->tutor->id ?? null;
        if (!$tutorId) return response()->json(['message' => 'Anda bukan tutor'], 403);

        try {
            $booking = $this->bookingService->completeBooking($tutorId, $id);
            return response()->json([
                'success' => true,
                'message' => 'Sesi belajar berhasil diselesaikan',
                'data' => $booking
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['message' => 'Sesi belajar tidak ditemukan.'], 404);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Gagal menyelesaikan sesi: ' . $e->getMessage()], 500);
        }
    }
}
