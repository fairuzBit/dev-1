<?php

namespace App\Http\Requests\Tutor;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Course;

class UploadDocumentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'transcript_file' => 'required|mimes:pdf|max:5120', // Maks 5MB
            'course_id' => 'required|exists:courses,id',
            'current_semester' => 'required|integer|min:2|max:14',
            'portfolio_url' => 'nullable|url|max:255',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $courseId = $this->input('course_id');
            $currentSemester = $this->input('current_semester');

            if ($courseId && $currentSemester) {
                $course = Course::find($courseId);
                if ($course && $course->semester >= $currentSemester) {
                    $validator->errors()->add('course_id', 'Tutor hanya dapat mengajar mata kuliah yang semesternya berada di bawah semester yang sedang ditempuh.');
                }
            }
        });
    }
}
