<?php

namespace App\Services\Admin;

class ComplaintService
{
    public function getComplaints()
    {
        // Fitur ini belum memiliki model, dikembalikan dummy response sementara
        return [
            [
                'id' => 1,
                'reporter' => 'Budi',
                'reported' => 'Andi (Tutor)',
                'reason' => 'Tutor tidak hadir'
            ]
        ];
    }
}
