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
        
        // Asumsi kolom status atau payment_status ada di tabel bookings.
        // Di kebutuhan.md dibilang "Mengubah status pembayaran dari Unpaid/Pending menjadi Paid/Selesai"
        $booking->update([
            'status' => 'Selesai' // atau sesuai enum yang dipakai
        ]);

        return $booking;
    }
}
