<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenugasanKendaraan extends Model
{
    use HasFactory;

    protected $table = 'penugasan_kendaraan';

    protected $fillable = [
        'kendaraan_id',
        'pengemudi_id',
        'tanggal_mulai',
        'tanggal_selesai',
        'status_penugasan',
        'keterangan',
    ];

    protected $casts = [
        'tanggal_mulai' => 'date',
        'tanggal_selesai' => 'date',
    ];

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    public function pengemudi()
    {
        return $this->belongsTo(Pengemudi::class, 'pengemudi_id');
    }
}