<?php

namespace Okotieno\MPesa\Models;

use Illuminate\Database\Eloquent\Model;

class MPesaPaymentRequest extends Model
{
    protected $fillable = ['checkout_request_id', 'merchant_request_id'];
}
