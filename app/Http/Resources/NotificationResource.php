<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'title' => $this->title,
            'message' => $this->message,
            'action_url' => $this->action_url,
            'is_read' => (bool) $this->is_read,
            
            // Format waktu menjadi ramah manusia (Contoh: "2 hours ago")
            'created_at' => $this->created_at->diffForHumans(),
            'read_at' => $this->read_at ? $this->read_at->format('Y-m-d H:i') : null,
        ];
    }
}
