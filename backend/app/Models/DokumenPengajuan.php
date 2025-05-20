<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DokumenPengajuan extends Model
{
    use HasFactory;

    protected $table = 'dokumen_pengajuan';

    protected $fillable = [
        'pengajuan_id',
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

    public function pengajuanPerpanjangan()
    {
        return $this->belongsTo(PengajuanPerpanjangan::class, 'pengajuan_id');
    }
}
