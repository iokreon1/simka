<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PengajuanRekomendasi extends Model
{
    use HasFactory;

    protected $table = 'pengajuan_rekomendasi';

    protected $fillable = [
        'user_id',
        'kendaraan_id',
        'jenis_rekomendasi',
        'tanggal_pengajuan',
        'status_pengajuan',
        'catatan_pengajuan',
    ];

    protected $casts = [
        'tanggal_pengajuan' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    public function dokumen()
    {
        return $this->hasMany(DokumenRekomendasi::class, 'rekomendasi_id');
    }

    public function verifikasi()
    {
        return $this->hasMany(Verifikasi::class, 'referensi_id')->where('jenis_verifikasi', 'rekomendasi');
    }
}