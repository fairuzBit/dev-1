<?php

namespace App\Services\Tutor;

use App\Models\Notification;

class NotificationService
{
    public function getNotifications(int $userId)
    {
        return Notification::where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
