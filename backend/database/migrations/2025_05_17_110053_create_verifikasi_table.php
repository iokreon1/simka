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
        Schema::create('verifikasi', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('referensi_id'); // Ini disesuaikan di sistem Anda
            $table->enum('jenis_verifikasi', ['perpanjangan', 'rekomendasi']);
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->date('tanggal_verifikasi');
            $table->enum('hasil_verifikasi', ['setuju', 'tolak', 'revisi']);
            $table->text('catatan_verifikasi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verifikasi');
    }
};
