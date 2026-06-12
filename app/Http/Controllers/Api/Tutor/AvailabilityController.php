<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AvailabilitySlot;
use App\Services\Tutor\AvailabilityService;
use App\Http\Requests\Tutor\StoreAvailabilityRequest;

/**
 * @tags Tutor Availability
 */
class AvailabilityController extends Controller
{
    protected $availabilityService;

    public function __construct(AvailabilityService $availabilityService)
    {
        $this->availabilityService = $availabilityService;
    }
    /**
     * Get Tutor Availability
     */
    public function index(Request $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $availabilities = $this->availabilityService->getAvailabilities($tutorId);

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
    public function store(StoreAvailabilityRequest $request)
    {
        $tutorId = $request->user()->tutor->id ?? null;

        if (!$tutorId) {
            return response()->json(['message' => 'Anda bukan tutor'], 403);
        }

        $newSlots = $this->availabilityService->storeAvailabilities($tutorId, $request->slots);

        return response()->json([
            'message' => 'Jadwal berhasil diperbarui',
            'data' => $newSlots
        ]);
    }
}
