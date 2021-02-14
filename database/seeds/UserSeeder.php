<?php

use Illuminate\Database\Seeder;
use App\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            'first_name' => 'Patricia',
            'last_name' => 'Asiyo',
            'email' => 'partyasiyo@yahoo.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
        if (!User::where('email', 'partyasiyo@yahoo.com')->first()) {
             User::create($user)->assignRole('super admin');
        }
    }
}
