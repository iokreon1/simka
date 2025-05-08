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
        Schema::create('kartu_pengawasan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pengajuan_id')->constrained('pengajuan')->onDelete('cascade');
            $table->string('nomor_kartu', 50);
            $table->date('tanggal_terbit');
            $table->date('tanggal_berlaku');
            $table->enum('status', ['aktif', 'kadaluarsa', 'dibatalkan'])->default('aktif');
            $table->timestamps(); // created_at & updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kartu_pengawasan');
    }
};
