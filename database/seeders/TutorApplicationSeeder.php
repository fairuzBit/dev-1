<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Course;
use App\Models\TutorApplication;

class TutorApplicationSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::role('admin')->first();
        $course = Course::first(); // Asumsikan Course sudah dibuat oleh TutorDiscoverySeeder atau lainnya
        
        // Buat beberapa user calon tutor
        for ($i = 1; $i <= 3; $i++) {
            $user = User::factory()->create([
                'name' => "Calon Tutor {$i}",
                'email' => "calontutor{$i}@example.com",
            ]);
            $user->assignRole('learner'); // Belum jadi tutor
            
            $status = ['pending', 'approved', 'rejected'][$i - 1];
            
            TutorApplication::create([
                'user_id' => $user->id,
                'course_id' => $course->id ?? 1,
                'grade' => 'A',
                'transcript_file' => "transcripts/dummy_transcript_{$i}.pdf",
                'status' => $status,
                'approved_by' => $status === 'approved' ? ($admin->id ?? 1) : null,
                'approved_at' => $status === 'approved' ? now() : null,
            ]);
            
            if ($status === 'approved') {
                $user->assignRole('tutor');
                // Buat profile tutor
                \App\Models\Tutor::create([
                    'user_id' => $user->id,
                    'bio' => 'Saya adalah tutor baru yang sudah disetujui.',
                    'skills' => json_encode(['Matematika', 'Fisika']),
                    'price' => 50000,
                    'ipk' => 3.8,
                    'rating_avg' => 0
                ]);
            }
        }
    }
}
