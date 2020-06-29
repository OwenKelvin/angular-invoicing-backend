<?php

namespace App\Traits;

use App\Models\PasswordToken;

trait ResetsPassword {
    public function setPassword($newPassword)
    {
        $this->password = bcrypt($newPassword);
        $this->save();
    }
}
