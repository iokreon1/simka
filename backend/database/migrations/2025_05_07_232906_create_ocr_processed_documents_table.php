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
        Schema::create('ocr_processed_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dokumen_id')->constrained('dokumen')->onDelete('cascade');
            $table->text('hasil_ocr')->nullable();
            $table->json('field_mapping')->nullable(); // hasil parsing ke field form
            $table->decimal('confidence_score', 5, 2)->nullable(); // 0.00 - 100.00
            $table->decimal('processing_time', 10, 2)->nullable(); // dalam detik
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ocr_processed_documents');
    }
};
