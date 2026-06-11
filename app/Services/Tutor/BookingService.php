<?php

namespace App\Services\Tutor;

use App\Models\Booking;
use Exception;

class BookingService
{
    public function getPendingBookings(int $tutorId)
    {
        return Booking::with(['user', 'bookingSlots.masterSlot'])
            ->where('tutor_id', $tutorId)
            ->whereIn('status', ['pending', 'paid'])
            ->get();
    }

    public function getSchedules(int $tutorId)
    {
        return Booking::with(['user', 'bookingSlots.masterSlot'])
            ->where('tutor_id', $tutorId)
            ->where('status', 'accepted')
            ->where('date', '>=', now()->toDateString())
            ->get();
    }

    public function getHistory(int $tutorId)
    {
        return Booking::with('user')
            ->where('tutor_id', $tutorId)
            ->whereIn('status', ['completed', 'rejected', 'cancelled'])
            ->get();
    }

    public function acceptBooking(int $tutorId, int $bookingId)
    {
        $booking = Booking::where('id', $bookingId)->where('tutor_id', $tutorId)->firstOrFail();
        $booking->update(['status' => 'accepted']);
        return $booking;
    }

    public function rejectBooking(int $tutorId, int $bookingId)
    {
        $booking = Booking::where('id', $bookingId)->where('tutor_id', $tutorId)->firstOrFail();
        $booking->update(['status' => 'rejected']);
        return $booking;
    }
}
