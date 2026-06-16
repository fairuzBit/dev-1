<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Course;
use App\Models\Skill;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        // Seeder Mata Kuliah (Course)
        $courses = [
            'Basis Data', 'Pemrograman Web', 'Struktur Data', 'Kecerdasan Buatan', 'Jaringan Komputer'
        ];

        foreach ($courses as $index => $course) {
            Course::firstOrCreate(
                ['name' => $course],
                ['code' => 'CS' . str_pad($index + 1, 3, '0', STR_PAD_LEFT)]
            );
        }

        // Seeder Keahlian (Skill)
        // Asumsi ada tabel/model Skill (tadi sudah dibuat factory-nya)
        if (class_exists(Skill::class)) {
            $skills = [
                'Laravel', 'React', 'Python', 'Machine Learning', 'C++', 'SQL'
            ];
            
            foreach ($skills as $skill) {
                Skill::firstOrCreate(['name' => $skill]);
            }
        }
    }
}
