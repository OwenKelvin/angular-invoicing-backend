<?php

namespace Okotieno\MPesa\Models;

use Illuminate\Database\Eloquent\Model;

class MPesaPayment extends Model
{
    protected $fillable = [
        'trans_time',
        'trans_amount',
        'trans_receipt',
        'phone_number'
    ];
}
