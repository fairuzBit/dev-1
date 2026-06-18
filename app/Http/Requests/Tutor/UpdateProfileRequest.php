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
            'name' => 'nullable|string|max:255',
            'nim' => 'nullable|string|max:50|unique:users,nim,' . $this->user()->id,
            'phone' => 'nullable|string|max:20',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'bio' => 'nullable|string',
            'skills' => 'nullable|array',
            'price_per_session' => 'nullable|numeric',
            'price' => 'nullable|numeric'
        ];
    }
}
