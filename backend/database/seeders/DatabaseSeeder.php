<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Memanggil UserSeeder untuk membuat user Admin
        $this->call(UserSeeder::class);
        
        // Menambahkan user lain secara manual (jika menggunakan factory, factory juga perlu diubah)
        User::create([
            'username' => 'testuser',
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
            'role' => 'user',
            'nama_lengkap' => 'Test User',
        ]);
    }
}