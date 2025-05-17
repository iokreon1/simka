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
        Schema::create('pengemudi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('perusahaan_id')->constrained('perusahaan_angkutan')->onDelete('cascade');
            $table->string('nama_pengemudi');
            $table->string('nik');
            $table->text('alamat');
            $table->string('nomor_telepon');
            $table->string('nomor_sim');
            $table->string('jenis_sim');
            $table->date('tanggal_berlaku_sim');
            $table->string('foto')->nullable();
            $table->boolean('status_aktif')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengemudi');
    }
};
