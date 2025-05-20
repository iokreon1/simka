<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerusahaanAngkutan extends Model
{
    use HasFactory;

    protected $table = 'perusahaan_angkutan';

    protected $fillable = [
        'user_id',
        'nama_perusahaan',
        'nomor_izin_usaha',
        'alamat_perusahaan',
        'kecamatan',
        'kelurahan',
        'kode_pos',
        'latitude',
        'longitude',
        'jenis_usaha_angkutan',
        'tanggal_pendirian',
        'status_aktif',
    ];

    protected $casts = [
        'tanggal_pendirian' => 'date',
        'status_aktif' => 'boolean',
        'latitude' => 'decimal:7',
        'longitude' => 'decimal:7',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function kendaraan()
    {
        return $this->hasMany(Kendaraan::class, 'perusahaan_id');
    }

    public function pengemudi()
    {
        return $this->hasMany(Pengemudi::class, 'perusahaan_id');
    }
}