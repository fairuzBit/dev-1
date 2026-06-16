<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Review;
use App\Models\Booking;
use Faker\Factory as Faker;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        // Ambil beberapa booking yang sudah selesai
        $bookings = Booking::where('status', 'completed')->take(10)->get();

        foreach ($bookings as $booking) {
            // Random rating 1-5
            $rating = $faker->numberBetween(1, 5);
            
            $moderationStatus = null;
            // Jika bintang 1 atau 2, status moderasi menjadi MENUNGGU TINJAUAN
            if ($rating <= 2) {
                $moderationStatus = 'MENUNGGU TINJAUAN';
            }

            Review::create([
                'booking_id' => $booking->id,
                'rating' => $rating,
                'comment' => $faker->sentence(10),
                'moderation_status' => $moderationStatus
            ]);
        }
    }
}
