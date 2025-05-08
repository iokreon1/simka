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
        Schema::create('dss_parameters', function (Blueprint $table) {
            $table->id();
            $table->string('nama_parameter', 100);
            $table->text('deskripsi')->nullable();
            $table->decimal('nilai_bobot', 5, 2)->default(1.00); // max 999.99
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dss_parameters');
    }
};
