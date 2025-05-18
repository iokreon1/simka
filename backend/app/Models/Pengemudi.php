<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengemudi extends Model
{
    use HasFactory;

    protected $table = 'pengemudi';

    protected $fillable = [
        'perusahaan_id',
        'nama_pengemudi',
        'nik',
        'alamat',
        'nomor_telepon',
        'nomor_sim',
        'jenis_sim',
        'tanggal_berlaku_sim',
        'foto',
        'status_aktif',
    ];

    protected $casts = [
        'tanggal_berlaku_sim' => 'date',
        'status_aktif' => 'boolean',
    ];

    public function perusahaanAngkutan()
    {
        return $this->belongsTo(PerusahaanAngkutan::class, 'perusahaan_id');
    }

    public function penugasanKendaraan()
    {
        return $this->hasMany(PenugasanKendaraan::class, 'pengemudi_id');
    }
}
