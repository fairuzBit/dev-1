<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * @tags Admin Complaints
 */
class ComplaintController extends Controller
{
    public function index()
    {
        // Fitur ini belum memiliki model, dikembalikan dummy response sementara
        return response()->json([
            'data' => [
                [
                    'id' => 1,
                    'reporter' => 'Budi',
                    'reported' => 'Andi (Tutor)',
                    'reason' => 'Tutor tidak hadir'
                ]
            ]
        ]);
    }
}
