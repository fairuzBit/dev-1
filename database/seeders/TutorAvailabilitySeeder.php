<?php

namespace Database\Seeders;

use App\Models\AvailabilitySlot;
use App\Models\MasterSlot;
use App\Models\User;
use Illuminate\Database\Seeder;

class TutorAvailabilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Cari user Budi Santoso
        $tutorUser = User::where('email', '111tutor2@mhs.dinus.ac.id')->first();

        if ($tutorUser && $tutorUser->tutor) {
            $tutorId = $tutorUser->tutor->id;
            $masterSlots = MasterSlot::all();
            
            // Kita set Budi Santoso available dari Senin sampai Jumat
            $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

            foreach ($daysOfWeek as $day) {
                foreach ($masterSlots as $slot) {
                    AvailabilitySlot::firstOrCreate([
                        'tutor_id' => $tutorId,
                        'day_of_week' => $day,
                        'slot_id' => $slot->id,
                    ], [
                        'is_active' => true,
                    ]);
                }
            }
        }
    }
}
