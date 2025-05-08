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
        Schema::create('dokumen', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pengajuan_id')->constrained('pengajuan')->onDelete('cascade');
            $table->enum('tipe_dokumen', [
                'ktp',
                'stnk',
                'kir',
                'izin_trayek',
                'foto_kendaraan',
                'bukti_pembayaran',
                'lainnya'
            ]);
            $table->string('nama_file', 255);
            $table->string('path_file', 255);
            $table->enum('status_verifikasi', ['belum_diverifikasi', 'valid', 'tidak_valid'])->default('belum_diverifikasi');
            $table->text('keterangan')->nullable();
            $table->timestamps(); // created_at & updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dokumen');
    }
};
