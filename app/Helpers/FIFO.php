<?php

namespace App\Helpers;

use App\Models\Product;

class FIFO {
  public static function price($productId, $quantity)
  {
    $border = [0, 0];
    $purchases = Product::find($productId)->purchases()->select(['unit_price', 'quantity'])->get()->toArray();
    $soldQuantities = Product::find($productId)->sales->pluck('quantity')->sum();
    $cumulative = 0;
    foreach ($purchases as $key => $purchase) {
      $cumulative += $purchase['quantity'];
      $purchases[$key]['cumulative'] = $cumulative;
      if (($soldQuantities + $quantity) < $cumulative && $border[1] === 0) {
        $border[1] = $key;
      }
    }
    $totalCost = 0;
     $border[0] = sizeof($purchases) - sizeof(array_filter($purchases, function($purchase) use ($soldQuantities) {
      return $purchase['cumulative'] > $soldQuantities;
    }));

    if ($border[0] == $border[1]) {
      if ( sizeof( $purchases) > 0 && key_exists('unit_price', $purchases[0])) {
        return $purchases[0]['unit_price'];
      } else {
        return Product::find($productId)->selling_price;
      }
    }
    $alreadySold = 0;
    $purchases = array_splice($purchases,$border[0], ($border[1] - $border[0] + 1));
    $purchasesSize = sizeof($purchases);
    foreach ($purchases as $key => $purchase) {
   
      if ($key === 0) {
        $totalCost += ($purchase['cumulative'] - $soldQuantities) * $purchase['unit_price'];
      } elseif($key === ($purchasesSize - 1)) {

        $totalCost += (($soldQuantities + $quantity) - ($purchase['cumulative'] - $purchase['quantity'])) * $purchase['unit_price'] ;
      } else {
        $totalCost += $purchase['quantity'] * $purchase['unit_price'];
      }
    }
    return $totalCost / $quantity;
  }
}