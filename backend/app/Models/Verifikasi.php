<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Verifikasi extends Model
{
    use HasFactory;

    protected $table = 'verifikasi';

    protected $fillable = [
        'referensi_id',
        'jenis_verifikasi',
        'user_id',
        'tanggal_verifikasi',
        'hasil_verifikasi',
        'catatan_verifikasi',
    ];

    protected $casts = [
        'tanggal_verifikasi' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pengajuanPerpanjangan()
    {
        return $this->belongsTo(PengajuanPerpanjangan::class, 'referensi_id')
            ->when(function ($query) {
                return $query->where('jenis_verifikasi', 'perpanjangan');
            });
    }

    public function pengajuanRekomendasi()
    {
        return $this->belongsTo(PengajuanRekomendasi::class, 'referensi_id')
            ->when(function ($query) {
                return $query->where('jenis_verifikasi', 'rekomendasi');
            });
    }
}