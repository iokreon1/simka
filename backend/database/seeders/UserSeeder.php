<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'username' => 'admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'),
            'role' => 'superadmin', // Perlu menentukan role karena wajib
            'nama_lengkap' => 'Administrator',
            // Kolom lain yang nullable tidak perlu diisi
        ]);
    }
}