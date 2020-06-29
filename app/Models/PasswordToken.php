<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class PasswordToken extends Model
{
    protected $fillable = ['token'];

    public static function getUserForToken($token) {
        $tokenValue = self::where('token', $token)->first();
        if($tokenValue == null) {
            return null;
        }
        return $tokenValue->user;
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
