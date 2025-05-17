<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Panggil dengan namespace penuh
        $this->call([
            UserSeeder::class,
        ]);

        User::create([
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
            'role' => 'user',
            'nomor_telepon' => '0899999999',
        ]);
    }
}
