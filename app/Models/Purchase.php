<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
  protected $fillable = [
    'product_id', 
    'seller_id',
    'quantity',
    'unit_price',
    'currency',
    'purchase_date'
  ];
  
  protected $appends = [
    'product_name',
    'seller_name',
  ];
  
  public function getProductNameAttribute() 
  {
    return $this->product ? $this->product->name : null;
  }
  
  public function product() 
  {
    return $this->belongsTo(Product::class);
  }
  
  public function getSellerNameAttribute() 
  {
    return $this->seller ? $this->seller->name: null;
  }
  
  public function seller() 
  {
    return $this->belongsTo(Seller::class);
  }
  
}
