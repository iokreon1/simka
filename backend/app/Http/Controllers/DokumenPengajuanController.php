<?php

namespace App\Http\Controllers;

use App\Models\DokumenPengajuan;
use App\Models\PengajuanPerpanjangan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class DokumenPengajuanController extends Controller
{
    public function index()
    {
        $dokumen = DokumenPengajuan::with('pengajuan')->latest()->get();
        return response()->json($dokumen);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pengajuan_id' => 'required|exists:pengajuan_perpanjangan,id',
            'jenis_dokumen' => 'required|string|max:255',
            'nama_file' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf,jpg,jpeg,png',
        ]);

        $uploadedFile = $request->file('file');
        $filename = Str::random(20) . '_' . time() . '.' . $uploadedFile->getClientOriginalExtension();
        $path = $uploadedFile->storeAs('dokumen_pengajuan', $filename, 'public');

        $dokumen = DokumenPengajuan::create([
            'pengajuan_id' => $request->pengajuan_id,
            'jenis_dokumen' => $request->jenis_dokumen,
            'nama_file' => $request->nama_file,
            'path_file' => $path,
            'tanggal_upload' => now(),
            'status_verifikasi' => 'menunggu',
            'hasil_ocr' => null,
        ]);

        return response()->json(['message' => 'Dokumen berhasil diunggah', 'data' => $dokumen], 201);
    }

    public function show($id)
    {
        $dokumen = DokumenPengajuan::with('pengajuan')->findOrFail($id);
        return response()->json($dokumen);
    }

    public function update(Request $request, $id)
    {
        $dokumen = DokumenPengajuan::findOrFail($id);

        $request->validate([
            'jenis_dokumen' => 'sometimes|required|string|max:255',
            'status_verifikasi' => 'nullable|string|in:menunggu,disetujui,ditolak',
            'hasil_ocr' => 'nullable|string',
        ]);

        $dokumen->update($request->only(['jenis_dokumen', 'status_verifikasi', 'hasil_ocr']));

        return response()->json(['message' => 'Dokumen berhasil diperbarui', 'data' => $dokumen]);
    }

    public function destroy($id)
    {
        $dokumen = DokumenPengajuan::findOrFail($id);
        if ($dokumen->path_file && Storage::disk('public')->exists($dokumen->path_file)) {
            Storage::disk('public')->delete($dokumen->path_file);
        }
        $dokumen->delete();

        return response()->json(['message' => 'Dokumen berhasil dihapus']);
    }
}
