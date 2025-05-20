<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KartuPengawasan extends Model
{
    use HasFactory;

    protected $table = 'kartu_pengawasan';

    protected $fillable = [
        'kendaraan_id',
        'nomor_kartu',
        'tanggal_terbit',
        'tanggal_berlaku_mulai',
        'tanggal_berlaku_selesai',
        'status',
    ];

    protected $casts = [
        'tanggal_terbit' => 'date',
        'tanggal_berlaku_mulai' => 'date',
        'tanggal_berlaku_selesai' => 'date',
    ];

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    public function pengajuanPerpanjangan()
    {
        return $this->hasMany(PengajuanPerpanjangan::class, 'kartu_id');
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class, 'kartu_id');
    }
}