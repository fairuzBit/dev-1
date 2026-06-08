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
            ]
        );
        $admin->assignRole('admin');

        $tutor = \App\Models\User::firstOrCreate(
            ['email' => 'tutor@konekdin.com'],
            [
                'name' => 'Tutor User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
            ]
        );
        $tutor->assignRole('tutor');

        $learner = \App\Models\User::firstOrCreate(
            ['email' => 'learner@konekdin.com'],
            [
                'name' => 'Learner User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
            ]
        );
        $learner->assignRole('learner');
    }
}
