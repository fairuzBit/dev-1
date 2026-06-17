<?php

namespace Database\Seeders;

use App\Models\AvailabilitySlot;
use App\Models\MasterSlot;
use App\Models\Tutor;
use Illuminate\Database\Seeder;

class TutorAvailabilitySeeder extends Seeder
{
    public function run(): void
    {
        $tutors = Tutor::all();
        $masterSlots = MasterSlot::take(5)->get(); // Ambil 5 slot pertama
        $daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        foreach ($tutors as $index => $tutor) {
            // Tutor ke-1 (genap) ngajar Senin-Rabu, Tutor ganjil ngajar Kamis-Jumat
            $assignedDays = ($index % 2 == 0) ? ['Monday', 'Tuesday', 'Wednesday'] : ['Thursday', 'Friday'];
            
            foreach ($assignedDays as $day) {
                // Beri mereka 3 slot per hari
                foreach ($masterSlots->take(3) as $slot) {
                    AvailabilitySlot::firstOrCreate([
                        'tutor_id' => $tutor->id,
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
