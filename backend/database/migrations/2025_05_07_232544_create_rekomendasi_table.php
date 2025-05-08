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
        Schema::create('rekomendasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pengajuan_id')->constrained('pengajuan')->onDelete('cascade');
            $table->enum('tipe_rekomendasi', ['izin_trayek', 'izin_operasi', 'izin_insidentil', 'lainnya']);
            $table->string('nomor_rekomendasi', 50);
            $table->date('tanggal_terbit');
            $table->date('tanggal_berlaku');
            $table->text('isi_rekomendasi')->nullable();
            $table->enum('status', ['aktif', 'kadaluarsa', 'dibatalkan'])->default('aktif');
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rekomendasi');
    }
};
