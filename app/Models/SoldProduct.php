<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SoldProduct extends Model
{
    protected $appends = ['product_name'];
    protected $hidden = ['product'];
    protected $fillable = [
        'sale_id',
        'product_id',
        'quantity',
        'fifo_purchase_price',
        'selling_price',
        'selling_price_currency'
    ];
    public function getProductNameAttribute() {
        return $this->product->name;
    }
    public function product() {
        return $this->belongsTo(Product::class);
    }

}
