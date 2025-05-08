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
        Schema::create('notifikasi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('judul', 100);
            $table->text('pesan');
            $table->enum('tipe', ['sistem', 'pengajuan', 'pengingat', 'perpanjangan', 'umum']);
            $table->enum('status', ['belum_dibaca', 'dibaca'])->default('belum_dibaca');
            $table->timestamp('tanggal_kirim')->useCurrent();
            $table->timestamp('tanggal_dibaca')->nullable();
            $table->unsignedBigInteger('reference_id')->nullable();
            $table->string('reference_type', 50)->nullable();
            $table->boolean('is_sent')->default(false);
            $table->timestamps(); // created_at & updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifikasi');
    }
};
