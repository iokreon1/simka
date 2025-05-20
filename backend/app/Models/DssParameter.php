<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DssParameter extends Model
{
    use HasFactory;

    protected $table = 'dss_parameters';

    protected $fillable = [
        'nama_parameter',
        'bobot',
        'deskripsi',
        'status_aktif',
    ];

    protected $casts = [
        'bobot' => 'decimal:2',
        'status_aktif' => 'boolean',
    ];
}