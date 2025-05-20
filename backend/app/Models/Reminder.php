<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory;

    protected $table = 'reminder';

    protected $fillable = [
        'user_id',
        'kendaraan_id',
        'kartu_id',
        'jenis_reminder',
        'pesan',
        'tanggal_kirim',
        'status_pengiriman',
    ];

    protected $casts = [
        'tanggal_kirim' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class, 'kendaraan_id');
    }

    public function kartuPengawasan()
    {
        return $this->belongsTo(KartuPengawasan::class, 'kartu_id');
    }
}