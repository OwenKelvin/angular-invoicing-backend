<?php

use App\Models\Seller;
use Illuminate\Database\Seeder;

class SellersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sellers = [
            [
                'name' => 'YOG Kenya',
                'description' => 'Tel: 0791606088; 0741754485'
            ],
            [
                'name' => 'Rafiki Pikipiki',
                'description' => 'Tel: 0720678874; Email: waweruduncan@yahoo.com'
            ],
            [
                'name' => 'Top Rich',
                'description' => 'Tel: 0795920721; 0797664776, Email: info@futuresoft.co.ke'],
        ];
        foreach ($sellers as $seller) {
            Seller::create($seller);
        }
    }
}
