<?php

namespace App\Http\Requests\Tutor;

use Illuminate\Foundation\Http\FormRequest;

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
            'grade' => 'required|string|max:2',
        ];
    }
}
