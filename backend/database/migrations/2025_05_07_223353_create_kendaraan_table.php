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
        Schema::create('kendaraan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('perusahaan_id')->constrained('perusahaan')->onDelete('cascade');
            $table->string('nomor_kendaraan', 20);
            $table->string('nomor_rangka', 50);
            $table->string('nomor_mesin', 50);
            $table->string('merk', 50);
            $table->string('tipe', 50)->nullable();
            $table->year('tahun_pembuatan')->nullable();
            $table->string('warna', 30)->nullable();
            $table->string('nomor_stnk', 50)->nullable();
            $table->date('tanggal_stnk_berlaku')->nullable();
            $table->string('nomor_kir', 50)->nullable();
            $table->date('tanggal_kir_berlaku')->nullable();
            $table->string('jenis_trayek', 100)->nullable();
            $table->integer('kapasitas_penumpang')->nullable();
            $table->enum('status_kendaraan', ['aktif', 'tidak_aktif', 'dalam_perbaikan'])->default('aktif');
            $table->timestamps(); // created_at & updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kendaraan');
    }
};
