<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Tutor;
use App\Models\TutorCourse;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TutorListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            Course::firstOrCreate(['code' => 'MT101'], ['name' => 'Kalkulus Dasar']),
            Course::firstOrCreate(['code' => 'FI101'], ['name' => 'Fisika Dasar']),
            Course::firstOrCreate(['code' => 'SI101'], ['name' => 'Sistem Informasi']),
            Course::firstOrCreate(['code' => 'MK101'], ['name' => 'Manajemen Keuangan']),
            Course::firstOrCreate(['code' => 'DK101'], ['name' => 'Desain Komunikasi Visual']),
        ];

        $tutors = [
            [
                'name' => 'Andi Wijaya',
                'email' => 'andi.wijaya@mhs.dinus.ac.id',
                'bio' => 'Berpengalaman dalam mengajar Kalkulus dan matematika lanjut. Mengajar dengan santai dan mudah dipahami.',
                'price' => 60000,
                'courses' => [0],
            ],
            [
                'name' => 'Siti Nurhaliza',
                'email' => 'siti.nurhaliza@mhs.dinus.ac.id',
                'bio' => 'Asisten praktikum Fisika Dasar. Mari kita pahami konsep fisika bersama-sama tanpa harus pusing.',
                'price' => 55000,
                'courses' => [1],
            ],
            [
                'name' => 'Reza Rahadian',
                'email' => 'reza.rahadian@mhs.dinus.ac.id',
                'bio' => 'Mahasiswa tingkat akhir Sistem Informasi, expert dalam analisis proses bisnis dan basis data.',
                'price' => 70000,
                'courses' => [2],
            ],
            [
                'name' => 'Putri Amanda',
                'email' => 'putri.amanda@mhs.dinus.ac.id',
                'bio' => 'Suka ngitung? Yuk belajar bareng Manajemen Keuangan, taklukkan soal-soal hitungan dengan trik cepat!',
                'price' => 65000,
                'courses' => [3],
            ],
            [
                'name' => 'Gilang Dirga',
                'email' => 'gilang.dirga@mhs.dinus.ac.id',
                'bio' => 'Freelance Designer yang siap membagikan ilmu tentang desain, tipografi, dan ilustrasi digital.',
                'price' => 80000,
                'courses' => [4],
            ]
        ];

        foreach ($tutors as $tutorData) {
            $user = User::firstOrCreate(
                ['email' => $tutorData['email']],
                [
                    'name' => $tutorData['name'],
                    'password' => Hash::make('password')
                ]
            );

            // Assign role if it's available. Assuming Spatie is used.
            $user->assignRole('tutor');

            $tutorProfile = Tutor::firstOrCreate(
                ['user_id' => $user->id],
                [
                    'bio' => $tutorData['bio'],
                    'rating_avg' => rand(40, 50) / 10,
                    'total_reviews' => rand(5, 50),
                    'price' => $tutorData['price'],
                    'is_active' => true
                ]
            );

            foreach ($tutorData['courses'] as $courseIndex) {
                TutorCourse::firstOrCreate([
                    'tutor_id' => $tutorProfile->id,
                    'course_id' => $courses[$courseIndex]->id,
                ]);
            }
        }
    }
}
