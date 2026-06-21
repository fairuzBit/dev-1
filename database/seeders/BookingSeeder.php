<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tutor;
use App\Models\Booking;
use App\Models\BookingSlot;
use App\Models\MasterSlot;
use Carbon\Carbon;

class BookingSeeder extends Seeder
{
    public function run(): void
    {
        $learner8 = User::where('email', '111dewilestari8@mhs.dinus.ac.id')->first();
        $learner9 = User::where('email', '111agusprayitno9@mhs.dinus.ac.id')->first();
        $learner10 = User::where('email', '111ninakarina10@mhs.dinus.ac.id')->first();

        $tutors = Tutor::take(3)->get();
        $masterSlots = MasterSlot::take(3)->get(); 
        
        if (!$learner8 || $tutors->isEmpty()) return;

        $tutor1 = $tutors[0];
        $bookingCompleted = Booking::firstOrCreate(
            [
                'learner_id' => $learner8->id,
                'tutor_id' => $tutor1->id,
                'status' => 'completed',
            ],
            [
                'course_id' => $tutor1->courses->first()->course_id ?? 1,
                'booking_date' => Carbon::yesterday()->toDateString(),
                'payment_status' => 'paid',
                'total_price' => $tutor1->price,
                'service_fee' => 1000,
                'grand_total' => $tutor1->price + 1000,
                'payment_method' => 'bank_transfer',
                'payment_code' => 'PAY-COMPLETED-123'
            ]
        );
        
        foreach($masterSlots as $slot) {
            BookingSlot::firstOrCreate(
                [
                    'booking_id' => $bookingCompleted->id,
                    'slot_id' => $slot->id,
                ],
                [
                    'start_time' => $slot->start_time,
                    'end_time' => $slot->end_time
                ]
            );
        }

        $tutor2 = $tutors[1];
        $bookingPaid = Booking::firstOrCreate(
            [
                'learner_id' => $learner9->id,
                'tutor_id' => $tutor2->id,
                'status' => 'accepted',
            ],
            [
                'course_id' => $tutor2->courses->first()->course_id ?? 1,
                'booking_date' => Carbon::tomorrow()->toDateString(),
                'payment_status' => 'paid',
                'total_price' => $tutor2->price,
                'service_fee' => 1000,
                'grand_total' => $tutor2->price + 1000,
                'payment_method' => 'ewallet',
                'payment_code' => 'PAY-PAID-456'
            ]
        );
        
        BookingSlot::firstOrCreate(
            [
                'booking_id' => $bookingPaid->id,
                'slot_id' => $masterSlots->first()->id,
            ],
            [
                'start_time' => $masterSlots->first()->start_time,
                'end_time' => $masterSlots->first()->end_time
            ]
        );

        $tutor3 = $tutors[2];
        $bookingPending = Booking::firstOrCreate(
            [
                'learner_id' => $learner10->id,
                'tutor_id' => $tutor3->id,
                'status' => 'pending',
                'payment_status' => 'paid',
            ],
            [
                'course_id' => $tutor3->courses->first()->course_id ?? 1,
                'booking_date' => Carbon::now()->addDays(2)->toDateString(),
                'total_price' => $tutor3->price,
                'service_fee' => 1000,
                'grand_total' => $tutor3->price + 1000,
                'payment_method' => 'qris',
                'payment_code' => 'PAY-PENDING-789'
            ]
        );
        
        BookingSlot::firstOrCreate(
            [
                'booking_id' => $bookingPending->id,
                'slot_id' => $masterSlots->last()->id,
            ],
            [
                'start_time' => $masterSlots->last()->start_time,
                'end_time' => $masterSlots->last()->end_time
            ]
        );
        
        $bookingUnpaid = Booking::firstOrCreate(
            [
                'learner_id' => $learner8->id,
                'tutor_id' => $tutor2->id,
                'status' => 'pending',
                'payment_status' => 'unpaid',
            ],
            [
                'course_id' => $tutor2->courses->first()->course_id ?? 1,
                'booking_date' => Carbon::now()->addDays(3)->toDateString(),
                'total_price' => $tutor2->price,
                'service_fee' => 1000,
                'grand_total' => $tutor2->price + 1000,
            ]
        );
        
        BookingSlot::firstOrCreate(
            [
                'booking_id' => $bookingUnpaid->id,
                'slot_id' => $masterSlots->last()->id,
            ],
            [
                'start_time' => $masterSlots->last()->start_time,
                'end_time' => $masterSlots->last()->end_time
            ]
        );

        $bookingRejected = Booking::firstOrCreate(
            [
                'learner_id' => $learner10->id,
                'tutor_id' => $tutor1->id,
                'status' => 'rejected',
            ],
            [
                'course_id' => $tutor1->courses->first()->course_id ?? 1,
                'booking_date' => Carbon::now()->addDays(4)->toDateString(),
                'payment_status' => 'refunded',
                'total_price' => $tutor1->price,
                'service_fee' => 1000,
                'grand_total' => $tutor1->price + 1000,
            ]
        );
        
        BookingSlot::firstOrCreate(
            [
                'booking_id' => $bookingRejected->id,
                'slot_id' => $masterSlots->first()->id,
            ],
            [
                'start_time' => $masterSlots->first()->start_time,
                'end_time' => $masterSlots->first()->end_time
            ]
        );
    }
}
