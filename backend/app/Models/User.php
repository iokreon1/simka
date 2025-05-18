<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * @method \Laravel\Sanctum\NewAccessToken createToken(string $name, array $abilities = ['*'])
 */

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'username',
        'password',
        'email',
        'nomor_telepon',
        'role',
        'foto_profil',
        'status_akun',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

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
