<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    public $timestamps = false;

    public function sales() {
        return $this->belongsToMany(Sale::class)
            ->withPivot(['amount', 'creditor_id']);
    }
}
