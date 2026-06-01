<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'booking_date' => $this->booking_date,
            'total_price' => (int) $this->total_price, // Pastikan tipenya angka bulat (integer)
            'status' => $this->status,
            'payment_status' => $this->payment_status,
            
            // Relasi ke Tutor (Memanggil resource Tutor yang sudah Bos punya)
            'tutor' => new TutorResource($this->whenLoaded('tutor')),
            
            // Relasi ke Course (Kita format manual di sini agar tidak perlu buat CourseResource)
            'course' => $this->whenLoaded('course', function () {
                return [
                    'id' => $this->course->id,
                    'name' => $this->course->name,
                    'code' => $this->course->code,
                ];
            }),
            
            // Relasi ke Jam/Slot
            'slots' => $this->whenLoaded('bookingSlots', function () {
                return $this->bookingSlots->map(function ($bs) {
                    return [
                        'id' => $bs->id,
                        'start_time' => date('H:i', strtotime($bs->start_time)), // Menghapus detik, dari 08:00:00 jadi 08:00
                        'end_time' => date('H:i', strtotime($bs->end_time)),
                        'code' => $bs->slot->code ?? null, // Mengambil nama sesi dari tabel MasterSlot
                    ];
                });
            }),
        ];
    }
}
