<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResetPasswordEmailRequest;
use App\Http\Requests\ResetPasswordPasswordRequest;
use App\Mail\PasswordResetMail;
use App\Models\PasswordToken;
use App\Models\Setting;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(ResetPasswordEmailRequest $request)
    {

        $token = Str::random(50);

        $user = User::where('email', $request->email)->first();

        if ($user == null) {
            abort(403, 'No account is associated with the Email provided');
        } else {
            $user->passwordToken()->create(['token' => $token]);
        }


//        $link = url('password/token', $token);

        $message_body = [
            'reset_link' => $token,
            'school_name' => 'Gariamba & Sons Enterprises',
            'name' => $user->first_name
        ];
        Mail::to($user)->send(new PasswordResetMail($message_body));

//        Mail::raw($message_body, function ($message){
//            $message->to('admin@admin.com');
//        });
        return [
            'saved' => true,
            'message' => 'Successfully sent Password reset email'
        ];
    }


    public function reset(ResetPasswordPasswordRequest $request, PasswordToken $token = null)
    {

        $user = $token->user;
        if ($user) {
            $user = $token->user;
            $user->password = bcrypt($request->password);
            $user->save();

            Auth::attempt(['email' => $request->email, 'password' => $request->password]);

            // $user->createToken();
            $token->token = PasswordToken::createNewToken();
            $token->save();

            return ['saved' => true];
        }
    }
}
