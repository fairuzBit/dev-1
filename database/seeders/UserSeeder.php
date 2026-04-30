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
        $admin = \App\Models\User::firstOrCreate(
            ['email' => 'admin@konekdin.com'],
            [
                'name' => 'Admin User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'admin',
                'university' => null,
                'prodi' => null,
                'nim' => '000000',
            ]
        );
        $admin->assignRole('admin');

        $tutor = \App\Models\User::firstOrCreate(
            ['email' => 'tutor@konekdin.com'],
            [
                'name' => 'Tutor User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'tutor',
                'university' => 'Universitas Dian Nuswantoro',
                'prodi' => 'Teknik Informatika',
                'nim' => 'A11.2020.00001',
            ]
        );
        $tutor->assignRole('tutor');

        $learner = \App\Models\User::firstOrCreate(
            ['email' => 'learner@konekdin.com'],
            [
                'name' => 'Learner User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'role' => 'learner',
                'university' => 'Universitas Dian Nuswantoro',
                'prodi' => 'Sistem Informasi',
                'nim' => 'A12.2020.00002',
            ]
        );
        $learner->assignRole('learner');
    }
}
