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
        Schema::create('kendaraan_trayek', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kendaraan_id')->constrained('kendaraan')->onDelete('cascade');
            $table->foreignId('trayek_id')->constrained('trayek')->onDelete('cascade');
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai')->nullable();
            $table->enum('status', ['aktif', 'tidak_aktif'])->default('aktif');
            $table->timestamps(); // created_at & updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kendaraan_trayek');
    }
};
