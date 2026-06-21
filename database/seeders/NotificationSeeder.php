<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Notification;
use App\Models\Booking;

class NotificationSeeder extends Seeder
{
    public function run(): void
    {
        $learner8 = User::where('email', '111dewilestari8@mhs.dinus.ac.id')->first();
        $learner9 = User::where('email', '111agusprayitno9@mhs.dinus.ac.id')->first();
        $learner10 = User::where('email', '111ninakarina10@mhs.dinus.ac.id')->first();
        $tutor1 = User::where('email', '111andiwijaya1@mhs.dinus.ac.id')->first();

        // 1. Pembayaran Pending
        $unpaidBooking = Booking::where('learner_id', $learner8->id ?? 0)->where('payment_status', 'unpaid')->first();
        if ($unpaidBooking) {
            $tutorName = $unpaidBooking->tutor->user->name;
            Notification::firstOrCreate([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Menunggu Pembayaran',
            ], [
                'message' => "Anda memiliki tagihan yang belum dibayar untuk sesi dengan Tutor {$tutorName}. Segera lakukan pembayaran.",
                'is_read' => false,
            ]);
        }

        // 2. Pembayaran Di-ACC
        $paidBooking = Booking::where('learner_id', $learner8->id ?? 0)->where('payment_status', 'paid')->first();
        if ($paidBooking) {
            $paidAmount = number_format($paidBooking->grand_total, 0, ',', '.');
            Notification::firstOrCreate([
                'user_id' => $learner8->id,
                'type' => 'payment',
                'title' => 'Pembayaran Berhasil',
            ], [
                'message' => "Pembayaran Anda sebesar Rp{$paidAmount} telah berhasil diverifikasi oleh sistem. Sesi belajar Anda sudah aktif.",
                'is_read' => true,
            ]);
        }

        // 3. Pengingat Jadwal
        $acceptedBooking = Booking::where('learner_id', $learner9->id ?? 0)->where('status', 'accepted')->first();
        if ($acceptedBooking) {
            $courseName = $acceptedBooking->course->name ?? 'Mata Kuliah';
            $slot = $acceptedBooking->bookingSlots->first();
            $timeRange = $slot ? date('H:i', strtotime($slot->start_time)) : '10:00';
            
            Notification::firstOrCreate([
                'user_id' => $learner9->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat: Sesi Belajar Besok',
            ], [
                'message' => "Jangan lupa, Anda memiliki sesi belajar \"{$courseName}\" besok pukul {$timeRange} WIB.",
                'is_read' => false,
            ]);

            // 4. Pengingat Jadwal 30 Menit
            $tutorName = $acceptedBooking->tutor->user->name;
            Notification::firstOrCreate([
                'user_id' => $learner9->id,
                'type' => 'session_reminder',
                'title' => 'Sesi Belajar Segera Dimulai!',
            ], [
                'message' => "Siap-siap! Sesi belajar Anda dengan Tutor {$tutorName} akan dimulai dalam 30 menit.",
                'is_read' => false,
            ]);
        }

        // 5. Pesanan Ditolak
        $rejectedBooking = Booking::where('learner_id', $learner10->id ?? 0)->where('status', 'rejected')->first();
        if ($rejectedBooking) {
            Notification::firstOrCreate([
                'user_id' => $learner10->id,
                'type' => 'booking',
                'title' => 'Pesanan Ditolak',
            ], [
                'message' => 'Mohon maaf, pesanan Anda ditolak oleh Admin karena jadwal Tutor bentrok. Dana telah di-refund.',
                'is_read' => true,
            ]);
        }

        // 6 & 7. Pengajuan Tutor
        if ($learner10) {
            Notification::firstOrCreate([
                'user_id' => $learner10->id,
                'type' => 'application',
                'title' => 'Pengajuan Tutor Diterima',
            ], [
                'message' => 'Dokumen pengajuan tutor Anda telah kami terima dan sedang dalam tahap peninjauan (pending) oleh Admin.',
                'is_read' => false,
            ]);

            Notification::firstOrCreate([
                'user_id' => $learner10->id,
                'type' => 'application',
                'title' => 'Pengajuan Tutor Ditolak',
            ], [
                'message' => 'Mohon maaf, pengajuan Anda sebagai Tutor ditolak. Catatan Admin: Transkrip nilai tidak terbaca. Harap upload ulang.',
                'is_read' => false,
            ]);
        }

        // 8, 9, 10. Notifikasi untuk Tutor 1
        if ($tutor1) {
            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'application',
                'title' => 'Selamat! Anda Menjadi Tutor',
            ], [
                'message' => 'Selamat! Pengajuan Anda telah disetujui Admin. Sekarang Anda resmi menjadi Tutor di KonekDin.',
                'is_read' => true,
            ]);

            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'booking',
                'title' => 'Pesanan Baru Masuk!',
            ], [
                'message' => 'Hore! Ada Learner yang memesan sesi belajar dengan Anda. Silakan cek jadwal Anda.',
                'is_read' => false,
            ]);

            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'review',
                'title' => 'Ulasan Bintang 5 Baru!',
            ], [
                'message' => 'Anda mendapatkan ulasan bintang 5 dari Learner 8: "Tutornya sangat pintar!". Pertahankan!',
                'is_read' => false,
            ]);

            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'payment',
                'title' => 'Pencairan Dana Berhasil',
            ], [
                'message' => 'Dana dari sesi mengajar Anda telah berhasil ditransfer ke rekening tujuan.',
                'is_read' => true,
            ]);

            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat Sesi Mengajar',
            ], [
                'message' => 'Sesi mengajar Anda dengan Learner 8 akan dimulai dalam 30 menit. Siapkan materi Anda!',
                'is_read' => false,
            ]);

            Notification::firstOrCreate([
                'user_id' => $tutor1->id,
                'type' => 'session_reminder',
                'title' => 'Pengingat H-1 Sesi Mengajar',
            ], [
                'message' => 'Halo! Jangan lupa, Anda memiliki jadwal mengajar besok dengan Learner 8. Pastikan persiapan materi sudah lengkap ya!',
                'is_read' => false,
            ]);
        }
    }
}
