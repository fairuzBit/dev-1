<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Str;

class NotificationSeeder extends Seeder
{
    public function run(): void
    {
        // Cari Learner
        $learner = User::role('learner')->first();
        if ($learner) {
            \App\Models\Notification::create([
                'user_id' => $learner->id,
                'type' => 'payment',
                'title' => 'Pembayaran Disetujui',
                'message' => 'Pembayaran sesi Basis Data Anda telah di-ACC.',
                'is_read' => false,
            ]);

            \App\Models\Notification::create([
                'user_id' => $learner->id,
                'type' => 'application',
                'title' => 'Pendaftaran Tutor Disetujui',
                'message' => 'Pendaftaran Anda sebagai Tutor telah disetujui!',
                'is_read' => false,
            ]);

            \App\Models\Notification::create([
                'user_id' => $learner->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat Sesi',
                'message' => 'Sesi dengan Tutor Dukun Samin akan dimulai 1 jam lagi.',
                'is_read' => false,
            ]);
        }
    }
}
