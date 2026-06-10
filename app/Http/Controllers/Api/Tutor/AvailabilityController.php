<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AvailabilitySlot;

/**
 * @tags Tutor Availability
 */
class AvailabilityController extends Controller
{
    /**
     * Get Tutor Availability
     */
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $availabilities = AvailabilitySlot::with('masterSlot')
            ->where('tutor_id', $tutorId)
            ->get();

        return response()->json([
            'data' => $availabilities->map(function ($slot) {
                return [
                    'id' => $slot->id,
                    'day' => $slot->day_of_week,
                    'time' => $slot->masterSlot->time_range ?? null,
                ];
            })
        ]);
    }

    /**
     * Set Tutor Availability
     */
    public function store(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $request->validate([
            'slots' => 'required|array',
            'slots.*.day_of_week' => 'required|in:Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
            'slots.*.master_slot_id' => 'required|exists:master_slots,id'
        ]);

        // Hapus ketersediaan lama, ganti yang baru
        AvailabilitySlot::where('tutor_id', $tutorId)->delete();

        $newSlots = [];
        foreach ($request->slots as $slot) {
            $newSlots[] = AvailabilitySlot::create([
                'tutor_id' => $tutorId,
                'day_of_week' => $slot['day_of_week'],
                'master_slot_id' => $slot['master_slot_id']
            ]);
        }

        return response()->json([
            'message' => 'Jadwal berhasil diperbarui',
            'data' => $newSlots
        ]);
    }
}
