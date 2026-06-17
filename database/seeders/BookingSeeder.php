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
        $learner8 = User::where('email', 'learner8@mhs.dinus.ac.id')->first();
        $learner9 = User::where('email', 'learner9@mhs.dinus.ac.id')->first();
        $learner10 = User::where('email', 'learner10@mhs.dinus.ac.id')->first();

        $tutors = Tutor::take(3)->get(); // Ambil 3 tutor pertama
        $masterSlots = MasterSlot::take(3)->get(); 
        
        if (!$learner8 || $tutors->isEmpty()) return;

        // 1. Booking Selesai & Di-review (Oleh Learner 8 ke Tutor 1)
        $tutor1 = $tutors[0];
        $bookingCompleted = Booking::create([
            'learner_id' => $learner8->id,
            'tutor_id' => $tutor1->id,
            'course_id' => $tutor1->courses->first()->course_id ?? 1,
            'booking_date' => Carbon::yesterday()->toDateString(),
            'status' => 'completed',
            'payment_status' => 'paid',
            'total_price' => $tutor1->price,
            'service_fee' => 5000,
            'grand_total' => $tutor1->price + 5000,
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

        // 2. Booking Aktif / Accepted (Oleh Learner 9 ke Tutor 2)
        $tutor2 = $tutors[1];
        $bookingPaid = Booking::create([
            'learner_id' => $learner9->id,
            'tutor_id' => $tutor2->id,
            'course_id' => $tutor2->courses->first()->course_id ?? 1,
            'booking_date' => Carbon::tomorrow()->toDateString(),
            'status' => 'accepted',
            'payment_status' => 'paid',
            'total_price' => $tutor2->price,
            'service_fee' => 5000,
            'grand_total' => $tutor2->price + 5000,
            'payment_method' => 'ewallet',
            'payment_code' => 'PAY-PAID-456'
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingPaid->id,
            'slot_id' => $masterSlots->first()->id,
            'start_time' => $masterSlots->first()->start_time,
            'end_time' => $masterSlots->first()->end_time
        ]);

        // 3. Booking Menunggu Persetujuan Tutor / Pending Paid (Oleh Learner 10 ke Tutor 3)
        $tutor3 = $tutors[2];
        $bookingPending = Booking::create([
            'learner_id' => $learner10->id,
            'tutor_id' => $tutor3->id,
            'course_id' => $tutor3->courses->first()->course_id ?? 1,
            'booking_date' => Carbon::now()->addDays(2)->toDateString(),
            'status' => 'pending',
            'payment_status' => 'paid',
            'total_price' => $tutor3->price,
            'service_fee' => 5000,
            'grand_total' => $tutor3->price + 5000,
            'payment_method' => 'qris',
            'payment_code' => 'PAY-PENDING-789'
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingPending->id,
            'slot_id' => $masterSlots->last()->id,
            'start_time' => $masterSlots->last()->start_time,
            'end_time' => $masterSlots->last()->end_time
        ]);
        
        // 4. Booking Unpaid (Oleh Learner 8 ke Tutor 2)
        $bookingUnpaid = Booking::create([
            'learner_id' => $learner8->id,
            'tutor_id' => $tutor2->id,
            'course_id' => $tutor2->courses->first()->course_id ?? 1,
            'booking_date' => Carbon::now()->addDays(3)->toDateString(),
            'status' => 'pending',
            'payment_status' => 'unpaid',
            'total_price' => $tutor2->price,
            'service_fee' => 5000,
            'grand_total' => $tutor2->price + 5000,
        ]);
        
        BookingSlot::create([
            'booking_id' => $bookingUnpaid->id,
            'slot_id' => $masterSlots->last()->id,
            'start_time' => $masterSlots->last()->start_time,
            'end_time' => $masterSlots->last()->end_time
        ]);
    }
}
