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
        Schema::create('gis_locations', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lokasi', 100);
            $table->enum('tipe_lokasi', ['kantor_dishub', 'kantor_perusahaan', 'terminal', 'pool_kendaraan', 'lainnya']);
            $table->text('alamat')->nullable();
            $table->decimal('latitude', 10, 8);
            $table->decimal('longitude', 11, 8);
            $table->text('keterangan')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps(); // created_at & updated_at
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gis_locations');
    }
};
