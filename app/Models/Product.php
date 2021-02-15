<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'buying_price',
        'selling_price',
        'buying_price_currency',
        'selling_price_currency',
        'min',
        'max'
    ];

    public function purchases() {
        return $this->hasMany(Purchase::class);
    }

    public function sales() {
        return $this->hasMany(SoldProduct::class);
    }

    public function inventoryAdjustment()
    {
        return $this->hasMany(InventoryAdjustment::class);
    }
}
