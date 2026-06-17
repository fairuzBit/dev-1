<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1 Admin
        $admin = \App\Models\User::firstOrCreate(
            ['email' => 'admin@mhs.dinus.ac.id'],
            [
                'name' => 'Admin Utama',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'email_verified_at' => now(),
                'role' => 'admin',
            ]
        );
        $admin->assignRole('admin');

        // 3 Tutor
        $tutors = \App\Models\User::factory()->count(3)->create(['role' => 'tutor']);
        foreach ($tutors as $index => $tutor) {
            $tutor->assignRole('tutor');
            
            // Buat satu tutor di-suspend
            if ($index === 1) {
                $tutor->update([
                    'suspended_until' => now()->addDays(7)
                ]);
            }
        }

        // 3 Learner
        $learners = \App\Models\User::factory()->count(3)->create(['role' => 'learner']);
        foreach ($learners as $learner) {
            $learner->assignRole('learner');
        }
    }
}
