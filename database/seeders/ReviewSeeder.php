<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\Booking;
use App\Models\User;
use App\Models\Tutor;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        $learner7 = User::where('email', '111rinamelati7@mhs.dinus.ac.id')->first();
        $tutor2 = Tutor::find(2) ?? Tutor::first();
        
        // Buat 4 booking dummy berstatus completed agar kita punya total 5 booking completed
        if ($learner7 && $tutor2) {
            for($i = 1; $i <= 4; $i++) {
                Booking::create([
                    'learner_id' => $learner7->id,
                    'tutor_id' => $tutor2->id,
                    'course_id' => $tutor2->courses->first()->course_id ?? 1,
                    'booking_date' => now()->subDays($i)->toDateString(),
                    'status' => 'completed',
                    'payment_status' => 'paid',
                    'total_price' => $tutor2->price,
                    'service_fee' => 5000,
                    'grand_total' => $tutor2->price + 5000,
                    'payment_method' => 'bank_transfer',
                    'payment_code' => 'PAY-COMPLETED-DUMMY-' . $i
                ]);
            }
        }

        // Ambil semua booking yang sudah selesai (sekarang harusnya ada 5)
        $bookings = Booking::where('status', 'completed')->get();

        $reviewsData = [
            ['rating' => 5, 'comment' => 'Tutornya sangat pintar dan menjelaskan dengan sangat jelas! Sangat direkomendasikan.', 'moderation_status' => null],
            ['rating' => 4, 'comment' => 'Bagus, tapi kadang koneksi tutor putus-putus saat mengajar online.', 'moderation_status' => null],
            ['rating' => 1, 'comment' => 'Tutor tidak datang tepat waktu dan materinya membingungkan! Tolong refund.', 'moderation_status' => 'MENUNGGU TINJAUAN'],
            ['rating' => 2, 'comment' => 'Kurang memuaskan, tutor terlihat kurang persiapan sebelum mengajar.', 'moderation_status' => 'MENUNGGU TINJAUAN'],
            ['rating' => 5, 'comment' => 'Sempurna! Sangat membantu saya lulus ujian Kalkulus dengan nilai A.', 'moderation_status' => null],
        ];

        foreach ($bookings as $index => $booking) {
            $data = $reviewsData[$index % count($reviewsData)];
            Review::firstOrCreate([
                'booking_id' => $booking->id,
            ], [
                'rating' => $data['rating'],
                'comment' => $data['comment'],
                'moderation_status' => $data['moderation_status']
            ]);
            
            // Update average rating tutor
            $tutor = $booking->tutor;
            $tutor->update([
                'rating_avg' => Review::whereHas('booking', function($q) use ($tutor) {
                    $q->where('tutor_id', $tutor->id);
                })->avg('rating'),
                'total_reviews' => Review::whereHas('booking', function($q) use ($tutor) {
                    $q->where('tutor_id', $tutor->id);
                })->count()
            ]);
        }
    }
}
