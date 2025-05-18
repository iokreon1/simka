<?php

namespace App\Http\Controllers;

use App\Models\PengajuanRekomendasi;
use App\Models\Kendaraan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PengajuanRekomendasiController extends Controller
{
    public function index()
    {
        $pengajuan = PengajuanRekomendasi::with(['user', 'kendaraan'])->latest()->get();
        return response()->json($pengajuan);
    }

    public function store(Request $request)
    {
        $request->validate([
            'kendaraan_id' => 'required|exists:kendaraan,id',
            'jenis_rekomendasi' => 'required|string|max:255',
        ]);

        $pengajuan = PengajuanRekomendasi::create([
            'user_id' => Auth::id(), // atau $request->user_id jika disesuaikan dengan backend
            'kendaraan_id' => $request->kendaraan_id,
            'jenis_rekomendasi' => $request->jenis_rekomendasi,
            'tanggal_pengajuan' => now(),
            'status_pengajuan' => 'diproses',
            'catatan_pengajuan' => $request->catatan_pengajuan,
        ]);

        return response()->json(['message' => 'Pengajuan rekomendasi berhasil dibuat', 'data' => $pengajuan], 201);
    }

    public function show($id)
    {
        $pengajuan = PengajuanRekomendasi::with(['user', 'kendaraan'])->findOrFail($id);
        return response()->json($pengajuan);
    }

    public function update(Request $request, $id)
    {
        $pengajuan = PengajuanRekomendasi::findOrFail($id);

        $request->validate([
            'status_pengajuan' => 'in:diproses,diverifikasi,ditolak,selesai',
            'catatan_pengajuan' => 'nullable|string',
        ]);

        $pengajuan->update($request->only(['status_pengajuan', 'catatan_pengajuan']));

        return response()->json(['message' => 'Pengajuan berhasil diperbarui', 'data' => $pengajuan]);
    }

    public function destroy($id)
    {
        $pengajuan = PengajuanRekomendasi::findOrFail($id);
        $pengajuan->delete();

        return response()->json(['message' => 'Pengajuan berhasil dihapus']);
    }
}
