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
        Schema::create('dokumen_rekomendasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rekomendasi_id')->constrained('pengajuan_rekomendasi')->onDelete('cascade');
            $table->string('jenis_dokumen');
            $table->string('nama_file');
            $table->string('path_file');
            $table->date('tanggal_upload');
            $table->string('status_verifikasi')->nullable();
            $table->text('hasil_ocr')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dokumen_rekomendasi');
    }
};
