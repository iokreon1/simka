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
        Schema::create('decision_tree_logs', function (Blueprint $table) {
            $table->id(); // AUTO_INCREMENT PRIMARY KEY
            $table->foreignId('pengajuan_id')->constrained('pengajuan')->onDelete('cascade'); // Foreign key ke tabel pengajuan
            $table->foreignId('rule_id')->nullable()->constrained('decision_tree_rules')->onDelete('set null'); // Foreign key ke tabel decision_tree_rules, nullable
            $table->text('hasil_evaluasi');
            $table->enum('keputusan', ['disetujui', 'ditolak', 'perlu_revisi']); // ENUM dengan pilihan yang ditentukan
            $table->text('alasan');
            $table->timestamps(0); // created_at dan updated_at, dengan presisi 0 untuk detik
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('decision_tree_logs');
    }
};
