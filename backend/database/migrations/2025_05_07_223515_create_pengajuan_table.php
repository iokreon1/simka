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
        Schema::create('pengajuan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->onDelete('cascade');
            $table->enum('tipe_pengajuan', ['penerbitan_baru', 'perpanjangan']);
            $table->string('nomor_registrasi', 50)->nullable();
            $table->enum('status', ['diajukan', 'diproses', 'diverifikasi', 'ditolak', 'selesai'])->default('diajukan');
            $table->text('alasan_penolakan')->nullable();
            $table->timestamp('tanggal_pengajuan')->useCurrent();
            $table->timestamp('tanggal_verifikasi')->nullable();
            $table->timestamps(); // created_at & updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengajuan');
    }
};
