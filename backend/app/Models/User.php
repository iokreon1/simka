<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\PerusahaanAngkutan;
use App\Models\PemilikKendaraan;
use App\Models\PengajuanPerpanjangan;
use App\Models\PengajuanRekomendasi;
use App\Models\Verifikasi;
use App\Models\Reminder;
use App\Models\LogAktivitas;

/**
 * @method \Laravel\Sanctum\NewAccessToken createToken(string $name, array $abilities = ['*'])
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'password',
        'email',
        'nomor_telepon',
        'role',
        'foto_profil',
        'status_akun',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function perusahaanAngkutan()
    {
        return $this->hasOne(PerusahaanAngkutan::class);
    }

    public function pemilikKendaraan()
    {
        return $this->hasOne(PemilikKendaraan::class);
    }

    public function pengajuanPerpanjangan()
    {
        return $this->hasMany(PengajuanPerpanjangan::class);
    }

    public function pengajuanRekomendasi()
    {
        return $this->hasMany(PengajuanRekomendasi::class);
    }

    public function verifikasi()
    {
        return $this->hasMany(Verifikasi::class);
    }

    public function reminders()
    {
        return $this->hasMany(Reminder::class);
    }

    public function logAktivitas()
    {
        return $this->hasMany(LogAktivitas::class);
    }
}
