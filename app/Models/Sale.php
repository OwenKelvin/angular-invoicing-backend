<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = [
        'discount_type',
        'discount_amount'
    ];
    
    public function products() {
        return $this->hasMany(SoldProduct::class);
    }
}
