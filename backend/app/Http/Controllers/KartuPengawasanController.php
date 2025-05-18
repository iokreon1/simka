<?php

namespace App\Http\Controllers;

use App\Models\KartuPengawasan;
use App\Models\Kendaraan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KartuPengawasanController extends Controller
{
    // Tampilkan semua kartu pengawasan
    public function index()
    {
        $kartu = KartuPengawasan::with('kendaraan')->latest()->get();
        return response()->json($kartu);
    }

    // Simpan kartu pengawasan baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kendaraan_id' => 'required|exists:kendaraan,id',
            'nomor_kartu' => 'required|string|unique:kartu_pengawasan,nomor_kartu',
            'tanggal_terbit' => 'required|date',
            'tanggal_berlaku_mulai' => 'required|date',
            'tanggal_berlaku_selesai' => 'required|date|after_or_equal:tanggal_berlaku_mulai',
            'status' => 'required|in:aktif,expired,dibatalkan',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $kartu = KartuPengawasan::create($request->all());

        return response()->json([
            'message' => 'Kartu pengawasan berhasil dibuat.',
            'data' => $kartu
        ]);
    }

    // Tampilkan detail satu kartu pengawasan
    public function show($id)
    {
        $kartu = KartuPengawasan::with('kendaraan')->findOrFail($id);
        return response()->json($kartu);
    }

    // Update kartu pengawasan
    public function update(Request $request, $id)
    {
        $kartu = KartuPengawasan::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'kendaraan_id' => 'sometimes|exists:kendaraan,id',
            'nomor_kartu' => 'sometimes|string|unique:kartu_pengawasan,nomor_kartu,' . $id,
            'tanggal_terbit' => 'sometimes|date',
            'tanggal_berlaku_mulai' => 'sometimes|date',
            'tanggal_berlaku_selesai' => 'sometimes|date|after_or_equal:tanggal_berlaku_mulai',
            'status' => 'sometimes|in:aktif,expired,dibatalkan',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $kartu->update($request->all());

        return response()->json([
            'message' => 'Kartu pengawasan berhasil diperbarui.',
            'data' => $kartu
        ]);
    }

    // Hapus kartu pengawasan
    public function destroy($id)
    {
        $kartu = KartuPengawasan::findOrFail($id);
        $kartu->delete();

        return response()->json([
            'message' => 'Kartu pengawasan berhasil dihapus.'
        ]);
    }
}
