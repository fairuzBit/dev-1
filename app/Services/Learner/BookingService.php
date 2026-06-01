<?php

namespace App\Services\Learner;

use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\MasterSlot;
use App\Models\Tutor;
use Illuminate\Support\Facades\DB;
use Exception;

class BookingService
{
    /**
     * Memesan sesi tutor (Bisa pilih banyak slot sekaligus)
     */
    public function createBooking($learnerId, $data)
    {
        $tutor = Tutor::findOrFail($data['tutor_id']);
        $slotIds = $data['slot_ids']; // Bentuknya array, contoh: [1, 2]
        
        // Harga total = Harga Tutor x Jumlah Slot yang dipilih
        $totalPrice = $tutor->price * count($slotIds);

        // Pakai DB Transaction agar jika gagal di tengah jalan, data di-rollback
        DB::beginTransaction();
        try {
            // 1. Buat Struk Transaksi (Tabel bookings)
            $booking = Booking::create([
                'tutor_id' => $tutor->id,
                'course_id' => $data['course_id'],
                'learner_id' => $learnerId,
                'booking_date' => $data['booking_date'],
                'total_price' => $totalPrice,
                'status' => 'pending',
                'payment_status' => 'unpaid'
            ]);

            // 2. Masukkan Rincian Slot dan Cek Jadwal Bentrok
            foreach ($slotIds as $slotId) {
                // Cek apakah slot ini di hari itu sudah dipesan orang lain (dan belum di-cancel)
                $isBooked = BookingSlot::whereHas('booking', function ($q) use ($tutor, $data) {
                    $q->where('tutor_id', $tutor->id)
                      ->where('booking_date', $data['booking_date'])
                      ->whereIn('status', ['pending', 'accepted']);
                })->where('slot_id', $slotId)->exists();

                if ($isBooked) {
                    throw new Exception("Gagal. Salah satu slot yang Anda pilih baru saja dipesan orang lain.");
                }

                // Ambil data jam dari MasterSlot
                $masterSlot = MasterSlot::findOrFail($slotId);

                // Masukkan ke keranjang BookingSlot
                BookingSlot::create([
                    'booking_id' => $booking->id,
                    'slot_id' => $slotId,
                    'start_time' => $masterSlot->start_time,
                    'end_time' => $masterSlot->end_time,
                ]);
            }

            DB::commit();
            return $booking->load('bookingSlots');
        } catch (Exception $e) {
            DB::rollBack();
            throw $e; // Lempar error ke Controller
        }
    }

    /**
     * Mengambil Jadwal Mendatang (Schedules)
     */
    public function getUpcomingSchedules($learnerId)
    {
        return Booking::with(['tutor.user', 'course', 'bookingSlots.slot'])
            ->where('learner_id', $learnerId)
            ->whereIn('status', ['pending', 'accepted'])
            ->where('booking_date', '>=', now()->toDateString())
            ->orderBy('booking_date', 'asc')
            ->get();
    }

    /**
     * Mengambil Riwayat Masa Lalu (History)
     */
    public function getHistory($learnerId)
    {
        return Booking::with(['tutor.user', 'course', 'bookingSlots.slot'])
            ->where('learner_id', $learnerId)
            ->whereIn('status', ['completed', 'cancelled', 'rejected'])
            ->orderBy('booking_date', 'desc')
            ->get();
    }

    /**
     * Mengambil Detail Pesanan Spesifik (Untuk halaman Detail Pesanan)
     */
    public function getBookingDetail($learnerId, $bookingId)
    {
        return Booking::with(['tutor.user', 'course', 'bookingSlots.slot', 'review'])
            ->where('learner_id', $learnerId)
            ->where('id', $bookingId)
            ->firstOrFail();
    }
}
