<?php

namespace App\Http\Controllers;

use App\Models\Verifikasi;
use Illuminate\Http\Request;

class VerifikasiController extends Controller
{
    public function index()
    {
        $verifikasi = Verifikasi::with('user')->latest()->get();
        return response()->json($verifikasi);
    }

    public function store(Request $request)
    {
        $request->validate([
            'referensi_id' => 'required|integer',
            'jenis_verifikasi' => 'required|in:perpanjangan,rekomendasi',
            'user_id' => 'required|exists:users,id',
            'tanggal_verifikasi' => 'required|date',
            'hasil_verifikasi' => 'required|in:setuju,tolak,revisi',
            'catatan_verifikasi' => 'nullable|string',
        ]);

        $verifikasi = Verifikasi::create([
            'referensi_id' => $request->referensi_id,
            'jenis_verifikasi' => $request->jenis_verifikasi,
            'user_id' => $request->user_id,
            'tanggal_verifikasi' => $request->tanggal_verifikasi,
            'hasil_verifikasi' => $request->hasil_verifikasi,
            'catatan_verifikasi' => $request->catatan_verifikasi,
        ]);

        return response()->json([
            'message' => 'Data verifikasi berhasil disimpan.',
            'data' => $verifikasi
        ], 201);
    }

    public function show($id)
    {
        $verifikasi = Verifikasi::with('user')->findOrFail($id);
        return response()->json($verifikasi);
    }

    public function update(Request $request, $id)
    {
        $verifikasi = Verifikasi::findOrFail($id);

        $request->validate([
            'referensi_id' => 'sometimes|required|integer',
            'jenis_verifikasi' => 'sometimes|required|in:perpanjangan,rekomendasi',
            'user_id' => 'sometimes|required|exists:users,id',
            'tanggal_verifikasi' => 'sometimes|required|date',
            'hasil_verifikasi' => 'sometimes|required|in:setuju,tolak,revisi',
            'catatan_verifikasi' => 'nullable|string',
        ]);

        $verifikasi->update($request->only([
            'referensi_id',
            'jenis_verifikasi',
            'user_id',
            'tanggal_verifikasi',
            'hasil_verifikasi',
            'catatan_verifikasi',
        ]));

        return response()->json([
            'message' => 'Data verifikasi berhasil diperbarui.',
            'data' => $verifikasi
        ]);
    }

    public function destroy($id)
    {
        $verifikasi = Verifikasi::findOrFail($id);
        $verifikasi->delete();

        return response()->json(['message' => 'Data verifikasi berhasil dihapus.']);
    }
}
