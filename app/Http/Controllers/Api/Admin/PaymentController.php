<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Admin\PaymentService;

/**
 * @tags Admin Payments
 */
class PaymentController extends Controller
{
    protected $paymentService;

    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    public function index(Request $request)
    {
        $payments = $this->paymentService->getAllPayments();

        // Filter status jika ada parameter status
        if ($request->has('status')) {
            $payments = $payments->where('status', $request->status)->values();
        }

        return response()->json([
            'success' => true,
            'message' => 'Daftar pembayaran berhasil diambil',
            'data' => $payments
        ]);
    }

    public function approve($id)
    {
        $booking = $this->paymentService->approvePayment($id);

        return response()->json([
            'success' => true,
            'message' => 'Pembayaran berhasil di-approve',
            'data' => $booking
        ]);
    }
}
