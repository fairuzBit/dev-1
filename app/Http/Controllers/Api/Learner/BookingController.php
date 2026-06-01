<?php

namespace App\Http\Controllers\Api\Learner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Learner\BookingService;
use App\Http\Resources\BookingResource;

use Exception;

class BookingController extends Controller
{
    protected $bookingService;

    public function __construct(BookingService $bookingService)
    {
        $this->bookingService = $bookingService;
    }

    // Endpoint: POST /api/learner/bookings
    public function store(Request $request)
    {
        // Validasi input dari frontend
        $request->validate([
            'tutor_id' => 'required|exists:tutors,id',
            'course_id' => 'required|exists:courses,id',
            'booking_date' => 'required|date',
            'slot_ids' => 'required|array',
            'slot_ids.*' => 'exists:master_slots,id'
        ]);

        try {
            $booking = $this->bookingService->createBooking($request->user()->id, $request->all());
            
            return response()->json([
        'success' => true,
        'message' => 'Berhasil memesan jadwal',
        'data' => new BookingResource($booking)
    ], 201);
            
        } catch (Exception $e) {
            // Menangkap lemparan error dari Service (misal karena jadwal bentrok)
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    // Endpoint: GET /api/schedules
    public function schedules(Request $request)
    {
        $schedules = $this->bookingService->getUpcomingSchedules($request->user()->id);
        
         return response()->json([
        'success' => true,
        'message' => 'Jadwal aktif berhasil diambil',
        'data' => BookingResource::collection($schedules)
    ]);
    }

    public function history(Request $request)
    {
        $history = $this->bookingService->getHistory($request->user()->id);
        
        return response()->json([
        'success' => true,
        'message' => 'Riwayat berhasil diambil',
        'data' => BookingResource::collection($history)
    ]);
    }

    // Endpoint: GET /api/learner/bookings/{id}
    public function show(Request $request, $id)
    {
        $booking = $this->bookingService->getBookingDetail($request->user()->id, $id);

        return response()->json([
            'success' => true,
            'message' => 'Detail pesanan berhasil diambil',
            'data' => new BookingResource($booking)
        ]);
    }
}
