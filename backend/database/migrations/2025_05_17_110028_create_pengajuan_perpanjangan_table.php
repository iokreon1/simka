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
        Schema::create('pengajuan_perpanjangan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->onDelete('cascade');
            $table->foreignId('kartu_id')->nullable()->constrained('kartu_pengawasan')->onDelete('set null');
            $table->enum('jenis_pengajuan', ['baru', 'perpanjangan']);
            $table->date('tanggal_pengajuan');
            $table->enum('status_pengajuan', ['diproses', 'diverifikasi', 'ditolak', 'selesai']);
            $table->text('catatan_pengajuan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengajuan_perpanjangan');
    }
};
