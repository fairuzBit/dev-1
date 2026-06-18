<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TutorResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tutor_id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->user->name,
            'email' => $this->user->email,
            'phone' => $this->user->phone,
            'avatar' => $this->user->avatar ? asset('storage/' . $this->user->avatar) : null,
            'bio' => $this->bio,
            'ipk' => $this->ipk,
            'current_semester' => $this->current_semester,
            'rating_avg' => $this->rating_avg,
            'total_reviews' => $this->total_reviews,
            'total_sessions' => $this->total_sessions ?? 0,
            'skills' => is_array($this->skills) ? $this->skills : (is_string($this->skills) ? json_decode($this->skills, true) : []),
            'price' => (int) $this->price,
            'portfolio_urls' => is_array($this->portfolio_urls) ? $this->portfolio_urls : [],
            'certificate_files' => collect($this->certificate_files ?? [])->map(function ($path) {
                return asset('storage/' . $path);
            })->toArray(),
            
            'taught_courses' => $this->whenLoaded('courses', function () {
                return $this->courses->map(function ($tutorCourse) {
                    return [
                        'tutor_course_id' => $tutorCourse->id, 
                        'course_id' => $tutorCourse->course_id,
                        'course_name' => $tutorCourse->course->name,
                        'course_code' => $tutorCourse->course->code,
                        'grade' => $tutorCourse->grade,
                    ];
                });
            }),
            
            'available_slots' => $this->whenLoaded('availabilitySlots', function () {
                return $this->availabilitySlots->map(function ($avail) {
                    return [
                        'availability_id' => $avail->id,
                        'slot_id' => $avail->slot_id,
                        'day_of_week' => $avail->day_of_week,
                        'start_time' => date('H:i', strtotime($avail->masterSlot->start_time ?? '')),
                        'end_time' => date('H:i', strtotime($avail->masterSlot->end_time ?? '')),
                    ];
                });
            }),
        ];
    }
}
