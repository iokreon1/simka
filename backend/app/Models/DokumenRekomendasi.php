<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DokumenRekomendasi extends Model
{
    use HasFactory;

    protected $table = 'dokumen_rekomendasi';

    protected $fillable = [
        'rekomendasi_id',
        'jenis_dokumen',
        'nama_file',
        'path_file',
        'tanggal_upload',
        'status_verifikasi',
        'hasil_ocr',
    ];

    protected $casts = [
        'tanggal_upload' => 'date',
    ];

    public function pengajuanRekomendasi()
    {
        return $this->belongsTo(PengajuanRekomendasi::class, 'rekomendasi_id');
    }
}