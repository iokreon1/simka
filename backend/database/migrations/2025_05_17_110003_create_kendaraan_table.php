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
            $table->id(); // PK default = 'id'
            $table->foreignId('perusahaan_id')->constrained('perusahaan_angkutan')->onDelete('cascade');
            $table->foreignId('pemilik_id')->constrained('pemilik_kendaraan')->onDelete('cascade');
            $table->string('nomor_kendaraan');
            $table->string('nomor_rangka');
            $table->string('nomor_mesin');
            $table->string('merk');
            $table->string('tipe');
            $table->year('tahun_pembuatan');
            $table->string('warna');
            $table->integer('kapasitas_penumpang');
            $table->string('status_kendaraan');
            $table->timestamps();
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
