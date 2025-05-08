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
        Schema::create('trayek', function (Blueprint $table) {
            $table->id();
            $table->string('kode_trayek', 20);
            $table->string('nama_trayek', 100);
            $table->text('rute');
            $table->decimal('jarak', 10, 2)->nullable(); // jarak dalam kilometer
            $table->timestamps(); // created_at & updated_at otomatis
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trayek');
    }
};
