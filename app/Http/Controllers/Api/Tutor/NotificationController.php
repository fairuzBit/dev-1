<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;

/**
 * @tags Tutor Notification
 */
class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $notifications = Notification::where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->get();

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
