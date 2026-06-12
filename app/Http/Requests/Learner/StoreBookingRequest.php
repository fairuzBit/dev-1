<?php

namespace App\Http\Requests\Learner;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
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
            'tutor_id' => 'required|exists:tutors,id',
            'course_id' => 'required|exists:courses,id',
            'booking_date' => 'required|date',
            'slot_ids' => 'required|array',
            'slot_ids.*' => 'exists:master_slots,id'
        ];
    }
}
