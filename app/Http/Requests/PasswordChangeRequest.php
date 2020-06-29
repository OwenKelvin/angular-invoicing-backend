<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordChangeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'old_password' => 'required_without:token',
            'new_password' => 'required|confirmed'
        ];
    }

    public function messages()
    {
        return [
            'old_password.required_without' => 'Old Password is required',
            'new_password.required' => 'New Password field is required'
        ];
    }
}
