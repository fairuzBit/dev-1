<?php

namespace App\Services\Admin;

use App\Models\Booking;

class PaymentService
{
    public function getAllPayments()
    {
        return Booking::with(['learner', 'tutor.user'])->get();
    }

    public function approvePayment(int $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->update([
            'status' => 'accepted', 
            'payment_status' => 'paid'
        ]);
        return $booking;
    }
}
