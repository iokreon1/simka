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
        Schema::create('decision_tree_rules', function (Blueprint $table) {
            $table->id();
            $table->string('nama_rule', 100);
            $table->text('kondisi'); // format JSON
            $table->text('aksi'); // format JSON
            $table->integer('prioritas')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('decision_tree_rules');
    }
};
