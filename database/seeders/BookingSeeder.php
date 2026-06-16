<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tutor;
use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\MasterSlot;
use App\Models\Review;
use Carbon\Carbon;

class BookingSeeder extends Seeder
{
    public function run(): void
    {
        $learner = User::role('learner')->first();
        if (!$learner) {
            $learner = User::factory()->create(['name' => 'Learner Prototype', 'email' => 'learnerproto@example.com']);
            $learner->assignRole('learner');
        }

        $tutor = Tutor::first();
        if (!$tutor) {
            $tutorUser = User::role('tutor')->first();
            $tutor = Tutor::create(['user_id' => $tutorUser->id, 'ipk' => 3.8, 'price' => 50000]);
        }
        $masterSlots = MasterSlot::take(3)->get(); // Ambil 3 slot pertama
        
        // 1. Booking Selesai & Di-review
        $bookingCompleted = Booking::create([
            'learner_id' => $learner->id,
            'tutor_id' => $tutor->id,
            'course_id' => 1,
            'booking_date' => Carbon::yesterday()->toDateString(),
            'status' => 'completed',
            'payment_status' => 'paid',
            'total_price' => $tutor->price,
            'service_fee' => 5000,
            'grand_total' => $tutor->price + 5000,
            'payment_method' => 'bank_transfer',
            'payment_code' => 'PAY-COMPLETED-123'
        ]);
        
        foreach($masterSlots as $slot) {
            BookingSlot::create([
                'booking_id' => $bookingCompleted->id,
                'slot_id' => $slot->id,
                'start_time' => $slot->start_time,
                'end_time' => $slot->end_time
            ]);
        }
        
        // Review untuk booking yang selesai
        Review::create([
            'booking_id' => $bookingCompleted->id,
            'rating' => 5,
            'comment' => 'Tutornya sangat pintar dan menjelaskan dengan sangat jelas! Sangat direkomendasikan.',
        ]);

        // 2. Booking Aktif (Sudah Dibayar, Tinggal Mulai)
        $bookingPaid = Booking::create([
            'learner_id' => $learner->id,
            'tutor_id' => $tutor->id,
            'course_id' => 1,
            'booking_date' => Carbon::tomorrow()->toDateString(),
            'status' => 'accepted',
            'payment_status' => 'paid',
            'total_price' => $tutor->price,
            'service_fee' => 5000,
            'grand_total' => $tutor->price + 5000,
            'payment_method' => 'ewallet',
            'payment_code' => 'PAY-PAID-456'
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingPaid->id,
            'slot_id' => $masterSlots->first()->id,
            'start_time' => $masterSlots->first()->start_time,
            'end_time' => $masterSlots->first()->end_time
        ]);

        // 3. Booking Menunggu Persetujuan Tutor
        $bookingPending = Booking::create([
            'learner_id' => $learner->id,
            'tutor_id' => $tutor->id,
            'course_id' => 1,
            'booking_date' => Carbon::now()->addDays(2)->toDateString(),
            'status' => 'pending',
            'total_price' => $tutor->price,
            'service_fee' => 5000,
            'grand_total' => $tutor->price + 5000,
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingPending->id,
            'slot_id' => $masterSlots->last()->id,
            'start_time' => $masterSlots->last()->start_time,
            'end_time' => $masterSlots->last()->end_time
        ]);
        
        // 4. Booking Menunggu Pembayaran
        $bookingUnpaid = Booking::create([
            'learner_id' => $learner->id,
            'tutor_id' => $tutor->id,
            'course_id' => 1,
            'booking_date' => Carbon::now()->addDays(3)->toDateString(),
            'status' => 'pending',
            'payment_status' => 'unpaid',
            'total_price' => $tutor->price,
            'service_fee' => 5000,
            'grand_total' => $tutor->price + 5000,
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingUnpaid->id,
            'slot_id' => $masterSlots->last()->id,
            'start_time' => $masterSlots->last()->start_time,
            'end_time' => $masterSlots->last()->end_time
        ]);
        
        // Update rating tutor
        $tutor->update(['rating_avg' => 5.0]);
    }
}
