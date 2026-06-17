<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Tutor;
use App\Models\TutorCourse;
use App\Models\User;
use Illuminate\Database\Seeder;

class TutorListSeeder extends Seeder
{
    public function run(): void
    {
        $courses = Course::all();
        
        // Ambil 5 user pertama yang rolenya tutor (learner1 - learner5)
        $tutorUsers = User::role('tutor')->take(5)->get();
        
        $bios = [
            'Berpengalaman dalam mengajar pemrograman dasar.',
            'Asisten praktikum handal, siap bantu memahami konsep secara santai.',
            'Expert dalam analisis sistem dan basis data.',
            'Suka hitungan? Yuk taklukkan soal-soal sulit bersamaku!',
            'Freelance designer, siap bagi ilmu desain visual untuk pemula.'
        ];

        $prices = [50000, 55000, 60000, 65000, 70000];

        foreach ($tutorUsers as $index => $user) {
            $tutorProfile = Tutor::firstOrCreate(
                ['user_id' => $user->id],
                [
                    'bio' => $bios[$index % count($bios)],
                    'rating_avg' => 4.5 + ($index * 0.1),
                    'total_reviews' => 10 + ($index * 5),
                    'price' => $prices[$index % count($prices)],
                    'is_active' => true,
                    'ipk' => 3.5 + ($index * 0.1),
                ]
            );

            // Assign minimal 1 atau 2 course untuk setiap tutor
            $course1 = $courses[$index % count($courses)];
            $course2 = $courses[($index + 1) % count($courses)];
            
            TutorCourse::firstOrCreate([
                'tutor_id' => $tutorProfile->id,
                'course_id' => $course1->id,
            ]);
            
            TutorCourse::firstOrCreate([
                'tutor_id' => $tutorProfile->id,
                'course_id' => $course2->id,
            ]);
        }
    }
}
