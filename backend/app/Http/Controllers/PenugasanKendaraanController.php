<?php

namespace App\Http\Controllers;

use App\Models\PenugasanKendaraan;
use App\Models\Kendaraan;
use App\Models\Pengemudi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PenugasanKendaraanController extends Controller
{
    // Menampilkan semua data penugasan (dengan relasi pengemudi dan kendaraan)
    public function index()
    {
        $penugasan = PenugasanKendaraan::with(['pengemudi', 'kendaraan'])->get();
        return response()->json($penugasan);
    }

    // Menyimpan penugasan kendaraan baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pengemudi_id' => 'required|exists:pengemudi,id',
            'kendaraan_id' => 'required|exists:kendaraan,id',
            'tanggal_penugasan' => 'required|date',
            'status_penugasan' => 'required|in:aktif,selesai,dibatalkan',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $penugasan = PenugasanKendaraan::create($request->all());

        return response()->json([
            'message' => 'Penugasan kendaraan berhasil dibuat.',
            'data' => $penugasan
        ], 201);
    }

    // Menampilkan detail penugasan
    public function show($id)
    {
        $penugasan = PenugasanKendaraan::with(['pengemudi', 'kendaraan'])->findOrFail($id);
        return response()->json($penugasan);
    }

    // Memperbarui penugasan
    public function update(Request $request, $id)
    {
        $penugasan = PenugasanKendaraan::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'pengemudi_id' => 'exists:pengemudi,id',
            'kendaraan_id' => 'exists:kendaraan,id',
            'tanggal_penugasan' => 'date',
            'status_penugasan' => 'in:aktif,selesai,dibatalkan',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $penugasan->update($request->all());

        return response()->json([
            'message' => 'Penugasan berhasil diperbarui.',
            'data' => $penugasan
        ]);
    }

    // Menghapus penugasan
    public function destroy($id)
    {
        $penugasan = PenugasanKendaraan::findOrFail($id);
        $penugasan->delete();

        return response()->json(['message' => 'Penugasan berhasil dihapus.']);
    }
}
