<?php

namespace App\Traits;

use App\Models\PasswordToken;

trait HasPasswordToken {
    public function passwordToken()
    {
        return $this->hasOne(PasswordToken::class);
    }
}
