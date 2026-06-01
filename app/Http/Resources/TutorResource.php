<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TutorResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'tutor_id' => $this->id, 
            'name' => $this->user->name, 
            'avatar' => $this->user->avatar,
            'bio' => $this->bio,
            'rating_avg' => $this->rating_avg,
            'total_reviews' => $this->total_reviews,
            
            
            'taught_courses' => $this->courses->map(function ($tutorCourse) {
                return [
                    'tutor_course_id' => $tutorCourse->id, 
                    'course_name' => $tutorCourse->course->name,
                    'course_code' => $tutorCourse->course->code,
                    'price' => $tutorCourse->price,
                ];
            }),
        ];
    }
}
