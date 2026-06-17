<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class NotificationSeeder extends Seeder
{
    public function run(): void
    {
        // Berikan notifikasi untuk learner 8 dan 9
        $learner8 = User::where('email', '111learner8@mhs.dinus.ac.id')->first();
        $learner9 = User::where('email', '111learner9@mhs.dinus.ac.id')->first();
        
        if ($learner8) {
            \App\Models\Notification::create([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Pembayaran Berhasil',
                'message' => 'Pembayaran sesi Anda dengan Tutor 1 telah berhasil dikonfirmasi.',
                'is_read' => false,
            ]);
            
            \App\Models\Notification::create([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Menunggu Pembayaran',
                'message' => 'Anda memiliki tagihan yang belum dibayar untuk sesi dengan Tutor 2.',
                'is_read' => false,
            ]);
        }
        
        if ($learner9) {
            \App\Models\Notification::create([
                'user_id' => $learner9->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat Sesi',
                'message' => 'Sesi belajar Anda besok akan segera dimulai.',
                'is_read' => false,
            ]);
        }
        
        // Berikan notifikasi untuk tutor (learner1)
        $tutor1 = User::where('email', '111learner1@mhs.dinus.ac.id')->first();
        if ($tutor1) {
            \App\Models\Notification::create([
                'user_id' => $tutor1->id,
                'type' => 'booking',
                'title' => 'Pesanan Baru',
                'message' => 'Anda mendapatkan pesanan baru dari Learner 8.',
                'is_read' => false,
            ]);
        }
    }
}
