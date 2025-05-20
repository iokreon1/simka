<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PemilikKendaraan extends Model
{
    use HasFactory;

    protected $table = 'pemilik_kendaraan';

    protected $fillable = [
        'user_id',
        'nama_pemilik',
        'nik',
        'alamat',
        'nomor_telepon',
        'email',
        'jenis_identitas',
        'nomor_identitas',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function kendaraan()
    {
        return $this->hasMany(Kendaraan::class, 'pemilik_id');
    }
}