<?php

namespace App\Http\Requests\Tutor;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'bio' => 'nullable|string',
            'skills' => 'nullable|array',
            'price' => 'nullable|numeric'
        ];
    }
}
