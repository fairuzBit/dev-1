<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Notification;

class NotificationSeeder extends Seeder
{
    public function run(): void
    {
        // Ambil beberapa user untuk dijadikan sampel
        $learner8 = User::where('email', '111learner8@mhs.dinus.ac.id')->first(); // Learner murni
        $learner10 = User::where('email', '111learner10@mhs.dinus.ac.id')->first(); // Learner murni
        $tutor1 = User::where('email', '111learner1@mhs.dinus.ac.id')->first(); // Tutor

        // ==========================================
        // 1. KELOMPOK NOTIFIKASI PEMBAYARAN & JADWAL
        // ==========================================
        if ($learner8) {
            // 1. Pembayaran Pending
            Notification::create([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Menunggu Pembayaran',
                'message' => 'Anda memiliki tagihan yang belum dibayar untuk sesi dengan Tutor Andi Wijaya. Segera lakukan pembayaran.',
                'is_read' => false,
            ]);

            // Ambil nominal pembayaran dari database
            $completedBooking = \App\Models\Booking::where('learner_id', $learner8->id)->where('payment_status', 'paid')->first();
            $paidAmount = $completedBooking ? number_format($completedBooking->grand_total, 0, ',', '.') : '55.000';

            // 2. Pembayaran Di-ACC
            Notification::create([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Pembayaran Berhasil',
                'message' => "Pembayaran Anda sebesar Rp{$paidAmount} telah berhasil diverifikasi oleh sistem. Sesi belajar Anda sudah aktif.",
                'is_read' => true,
            ]);

            // 3. Pengingat Jadwal (1 Hari Mendatang)
            Notification::create([
                'user_id' => $learner8->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat: Sesi Belajar Besok',
                'message' => 'Jangan lupa, Anda memiliki sesi belajar "Kalkulus Dasar" besok pukul 10:00 WIB.',
                'is_read' => false,
            ]);

            // 4. Pengingat Jadwal (30 Menit Mendatang)
            Notification::create([
                'user_id' => $learner8->id,
                'type' => 'session_reminder',
                'title' => 'Sesi Belajar Segera Dimulai!',
                'message' => 'Siap-siap! Sesi belajar Anda dengan Tutor Andi Wijaya akan dimulai dalam 30 menit.',
                'is_read' => false,
            ]);
            
            // TAMBAHAN SARAN: Pesanan Ditolak
            Notification::create([
                'user_id' => $learner8->id,
                'type' => 'booking',
                'title' => 'Pesanan Ditolak',
                'message' => 'Mohon maaf, pesanan Anda ditolak oleh Admin karena jadwal Tutor bentrok. Dana telah di-refund.',
                'is_read' => true,
            ]);
        }

        // ==========================================
        // 2. KELOMPOK PENGAJUAN TUTOR
        // ==========================================
        if ($learner10) {
            // 5. Pengajuan Tutor Pending (Dikirim saat Learner baru submit)
            Notification::create([
                'user_id' => $learner10->id,
                'type' => 'application',
                'title' => 'Pengajuan Tutor Diterima',
                'message' => 'Dokumen pengajuan tutor Anda telah kami terima dan sedang dalam tahap peninjauan (pending) oleh Admin.',
                'is_read' => false,
            ]);

            // 6. Pengajuan Tutor Ditolak
            Notification::create([
                'user_id' => $learner10->id,
                'type' => 'application',
                'title' => 'Pengajuan Tutor Ditolak',
                'message' => 'Mohon maaf, pengajuan Anda sebagai Tutor ditolak. Catatan Admin: Transkrip nilai tidak terbaca. Harap upload ulang.',
                'is_read' => false,
            ]);
        }
        
        if ($tutor1) {
            // 7. Pengajuan Tutor Diterima (Dikirim saat Admin klik ACC)
            Notification::create([
                'user_id' => $tutor1->id,
                'type' => 'application',
                'title' => 'Selamat! Anda Menjadi Tutor',
                'message' => 'Selamat! Pengajuan Anda telah disetujui Admin. Sekarang Anda resmi menjadi Tutor di KonekDin.',
                'is_read' => true,
            ]);
            
            // TAMBAHAN SARAN: Notifikasi untuk Tutor saat ada pesanan baru
            Notification::create([
                'user_id' => $tutor1->id,
                'type' => 'booking',
                'title' => 'Pesanan Baru Masuk!',
                'message' => 'Hore! Ada Learner yang memesan sesi belajar dengan Anda. Silakan cek jadwal Anda.',
                'is_read' => false,
            ]);
            
        
            
        }
    }
}
