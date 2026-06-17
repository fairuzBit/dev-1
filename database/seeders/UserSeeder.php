<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@mhs.dinus.ac.id'],
            [
                'name' => 'Admin Utama',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
                'role' => 'admin',
            ]
        );
        $admin->assignRole('admin');

        // 2. Buat 10 User (Learner)
        // User 1 sampai 5 akan di-upgrade jadi Tutor di seeder lain
        // User 6 sampai 10 murni Learner
        
        $names = [
            'Andi Wijaya', 'Siti Nurhaliza', 'Reza Rahadian', 'Putri Amanda', 'Gilang Dirga',
            'Budi Santoso', 'Rina Melati', 'Dewi Lestari', 'Agus Prayitno', 'Nina Karina'
        ];

        for ($i = 1; $i <= 10; $i++) {
            $user = User::firstOrCreate(
                ['email' => "111learner{$i}@mhs.dinus.ac.id"],
                [
                    'name' => $names[$i - 1],
                    'password' => Hash::make('password'),
                    'email_verified_at' => now(),
                    'role' => $i <= 5 ? 'tutor' : 'learner',
                    'nim' => 'A11.2023.100' . str_pad($i, 2, '0', STR_PAD_LEFT),
                    'phone' => '0812345678' . str_pad($i, 2, '0', STR_PAD_LEFT),
                ]
            );
            
            // Assign roles
            if ($i <= 5) {
                $user->assignRole('tutor');
            } else {
                $user->assignRole('learner');
            }
        }
    }
}
