<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
        public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            CourseSeeder::class, // (Mata Kuliah & Keahlian)
            MasterSlotSeeder::class,
            TutorListSeeder::class,
            TutorAvailabilitySeeder::class,
            TutorApplicationSeeder::class,
            BookingSeeder::class,
            ReviewSeeder::class,
            NotificationSeeder::class,
        ]);
    }
}
