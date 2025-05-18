<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kendaraan extends Model
{
    use HasFactory;

    protected $table = 'kendaraan';

    protected $fillable = [
        'perusahaan_id',
        'pemilik_id',
        'nomor_kendaraan',
        'nomor_rangka',
        'nomor_mesin',
        'merk',
        'tipe',
        'tahun_pembuatan',
        'warna',
        'kapasitas_penumpang',
        'status_kendaraan',
    ];

    protected $casts = [
        'tahun_pembuatan' => 'integer',
        'kapasitas_penumpang' => 'integer',
    ];

    public function perusahaanAngkutan()
    {
        return $this->belongsTo(PerusahaanAngkutan::class, 'perusahaan_id');
    }

    public function pemilikKendaraan()
    {
        return $this->belongsTo(PemilikKendaraan::class, 'pemilik_id');
    }

    public function penugasanKendaraan()
    {
        return $this->hasMany(PenugasanKendaraan::class, 'kendaraan_id');
    }

    public function kartuPengawasan()
    {
        return $this->hasMany(KartuPengawasan::class, 'kendaraan_id');
    }

    public function pengajuanPerpanjangan()
    {
        return $this->hasMany(PengajuanPerpanjangan::class, 'kendaraan_id');
    }

    public function pengajuanRekomendasi()
    {
        return $this->hasMany(PengajuanRekomendasi::class, 'kendaraan_id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class, 'kendaraan_id');
    }
}