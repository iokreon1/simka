<?php

namespace App\Http\Controllers;

use App\Models\PengajuanPerpanjangan;
use App\Models\KartuPengawasan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PengajuanPerpanjanganController extends Controller
{
    // Tampilkan semua pengajuan perpanjangan
    public function index()
    {
        $pengajuan = PengajuanPerpanjangan::with('kartuPengawasan.kendaraan')->latest()->get();
        return response()->json($pengajuan);
    }

    // Simpan pengajuan perpanjangan baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kartu_pengawasan_id' => 'required|exists:kartu_pengawasan,id',
            'tanggal_pengajuan' => 'required|date',
            'status' => 'required|in:diproses,diterima,ditolak',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $pengajuan = PengajuanPerpanjangan::create($request->all());

        return response()->json([
            'message' => 'Pengajuan perpanjangan berhasil dibuat.',
            'data' => $pengajuan
        ]);
    }

    // Tampilkan detail satu pengajuan
    public function show($id)
    {
        $pengajuan = PengajuanPerpanjangan::with('kartuPengawasan.kendaraan')->findOrFail($id);
        return response()->json($pengajuan);
    }

    // Update pengajuan perpanjangan (biasanya status)
    public function update(Request $request, $id)
    {
        $pengajuan = PengajuanPerpanjangan::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'kartu_pengawasan_id' => 'sometimes|exists:kartu_pengawasan,id',
            'tanggal_pengajuan' => 'sometimes|date',
            'status' => 'sometimes|in:diproses,diterima,ditolak',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $pengajuan->update($request->all());

        return response()->json([
            'message' => 'Pengajuan perpanjangan berhasil diperbarui.',
            'data' => $pengajuan
        ]);
    }

    // Hapus pengajuan
    public function destroy($id)
    {
        $pengajuan = PengajuanPerpanjangan::findOrFail($id);
        $pengajuan->delete();

        return response()->json([
            'message' => 'Pengajuan perpanjangan berhasil dihapus.'
        ]);
    }
}
