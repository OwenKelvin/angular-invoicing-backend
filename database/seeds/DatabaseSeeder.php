<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesPermissionSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ProductsSeeder::class);
        $this->call(SellersSeeder::class);
    }
}
