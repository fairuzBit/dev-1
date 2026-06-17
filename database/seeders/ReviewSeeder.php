<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\Booking;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        // Ambil semua booking yang sudah selesai (dari BookingSeeder)
        $bookings = Booking::where('status', 'completed')->get();

        foreach ($bookings as $booking) {
            Review::firstOrCreate([
                'booking_id' => $booking->id,
            ], [
                'rating' => 5,
                'comment' => 'Tutornya sangat pintar dan menjelaskan dengan sangat jelas! Sangat direkomendasikan.',
                'moderation_status' => null
            ]);
            
            // Update average rating tutor
            $tutor = $booking->tutor;
            $tutor->update([
                'rating_avg' => Review::whereHas('booking', function($q) use ($tutor) {
                    $q->where('tutor_id', $tutor->id);
                })->avg('rating')
            ]);
        }
    }
}
