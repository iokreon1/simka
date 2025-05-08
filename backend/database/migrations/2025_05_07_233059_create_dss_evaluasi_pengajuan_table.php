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
        Schema::create('dss_evaluasi_pengajuan', function (Blueprint $table) {
            $table->id(); // AUTO_INCREMENT PRIMARY KEY
            $table->foreignId('pengajuan_id')->constrained('pengajuan')->onDelete('cascade'); // Foreign key ke tabel pengajuan
            $table->decimal('total_skor', 10, 2)->nullable();
            $table->text('rekomendasi');
            $table->json('analisis_detail'); // Menyimpan detail analisis dalam format JSON
            $table->timestamps(0); // created_at dan updated_at, dengan presisi 0 untuk detik
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dss_evaluasi_pengajuan');
    }
};
