<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('perusahaan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('nama_perusahaan', 100);
            $table->string('nomor_izin', 50)->nullable();
            $table->text('alamat');
            $table->string('nomor_telepon', 15)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('nama_pemilik', 100)->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->timestamps(); // created_at dan updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perusahaan');
    }
};
