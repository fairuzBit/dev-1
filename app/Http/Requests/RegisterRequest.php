<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'fullName' => 'required|string',
            'email' => 'required|email|unique:users|ends_with:@mhs.dinus.ac.id',
            'password' => 'required|min:8',
        ];
    }
        /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            'email.ends_with' => 'Pendaftaran hanya diperbolehkan menggunakan email mahasiswa UDINUS (@mhs.dinus.ac.id).',
        ];
    }

}
