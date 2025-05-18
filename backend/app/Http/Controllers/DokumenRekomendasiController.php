<?php

namespace App\Http\Controllers;

use App\Models\DokumenRekomendasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DokumenRekomendasiController extends Controller
{
    public function index()
    {
        $dokumen = DokumenRekomendasi::with('pengajuanRekomendasi')->latest()->get();
        return response()->json($dokumen);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pengajuan_rekomendasi_id' => 'required|exists:pengajuan_rekomendasi,id',
            'nama_dokumen' => 'required|string|max:255',
            'file_dokumen' => 'required|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        $path = $request->file('file_dokumen')->store('dokumen_rekomendasi');

        $dokumen = DokumenRekomendasi::create([
            'pengajuan_rekomendasi_id' => $request->pengajuan_rekomendasi_id,
            'nama_dokumen' => $request->nama_dokumen,
            'file_dokumen' => $path,
        ]);

        return response()->json(['message' => 'Dokumen berhasil diunggah', 'data' => $dokumen], 201);
    }

    public function show($id)
    {
        $dokumen = DokumenRekomendasi::with('pengajuanRekomendasi')->findOrFail($id);
        return response()->json($dokumen);
    }

    public function update(Request $request, $id)
    {
        $dokumen = DokumenRekomendasi::findOrFail($id);

        $request->validate([
            'nama_dokumen' => 'nullable|string|max:255',
            'file_dokumen' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('file_dokumen')) {
            // Hapus file lama
            Storage::delete($dokumen->file_dokumen);

            // Simpan file baru
            $dokumen->file_dokumen = $request->file('file_dokumen')->store('dokumen_rekomendasi');
        }

        if ($request->nama_dokumen) {
            $dokumen->nama_dokumen = $request->nama_dokumen;
        }

        $dokumen->save();

        return response()->json(['message' => 'Dokumen berhasil diperbarui', 'data' => $dokumen]);
    }

    public function destroy($id)
    {
        $dokumen = DokumenRekomendasi::findOrFail($id);
        Storage::delete($dokumen->file_dokumen);
        $dokumen->delete();

        return response()->json(['message' => 'Dokumen berhasil dihapus']);
    }
}
