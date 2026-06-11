<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\Tutor\NotificationService;

/**
 * @tags Tutor Notification
 */
class NotificationController extends Controller
{
    protected $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function index(Request $request)
    {
        $notifications = $this->notificationService->getNotifications($request->user()->id);

        return response()->json([
            'data' => $notifications->map(function ($notif) {
                return [
                    'id' => $notif->id,
                    'type' => $notif->type,
                    'message' => $notif->message,
                    'is_read' => $notif->is_read,
                    'created_at' => $notif->created_at->diffForHumans()
                ];
            })
        ]);
    }
}
