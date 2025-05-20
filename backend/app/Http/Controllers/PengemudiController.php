<?php

namespace App\Http\Controllers;

use App\Models\Pengemudi;
use App\Models\PerusahaanAngkutan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PengemudiController extends Controller
{
    // Menampilkan semua data pengemudi (dengan relasi perusahaan)
    public function index()
    {
        $pengemudi = Pengemudi::with('perusahaan')->get();
        return response()->json($pengemudi);
    }

    // Menyimpan data pengemudi baru
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'perusahaan_id' => 'required|exists:perusahaan_angkutan,id',
            'nama_pengemudi' => 'required|string|max:255',
            'nik' => 'required|string|max:20|unique:pengemudi,nik',
            'alamat' => 'required|string',
            'nomor_telepon' => 'required|string|max:20',
            'nomor_sim' => 'required|string|max:20|unique:pengemudi,nomor_sim',
            'jenis_sim' => 'required|string|max:10',
            'tanggal_berlaku_sim' => 'required|date',
            'foto' => 'nullable|image|max:2048',
            'status_aktif' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->all();

        // Upload foto jika ada
        if ($request->hasFile('foto')) {
            $path = $request->file('foto')->store('foto_pengemudi', 'public');
            $data['foto'] = $path;
        }

        $pengemudi = Pengemudi::create($data);

        return response()->json(['message' => 'Pengemudi berhasil ditambahkan.', 'data' => $pengemudi], 201);
    }

    // Menampilkan detail pengemudi tertentu
    public function show($id)
    {
        $pengemudi = Pengemudi::with('perusahaan')->findOrFail($id);
        return response()->json($pengemudi);
    }

    // Memperbarui data pengemudi
    public function update(Request $request, $id)
    {
        $pengemudi = Pengemudi::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'perusahaan_id' => 'exists:perusahaan_angkutan,id',
            'nama_pengemudi' => 'string|max:255',
            'nik' => 'string|max:20|unique:pengemudi,nik,' . $id,
            'alamat' => 'string',
            'nomor_telepon' => 'string|max:20',
            'nomor_sim' => 'string|max:20|unique:pengemudi,nomor_sim,' . $id,
            'jenis_sim' => 'string|max:10',
            'tanggal_berlaku_sim' => 'date',
            'foto' => 'nullable|image|max:2048',
            'status_aktif' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $data = $request->all();

        if ($request->hasFile('foto')) {
            $path = $request->file('foto')->store('foto_pengemudi', 'public');
            $data['foto'] = $path;
        }

        $pengemudi->update($data);

        return response()->json(['message' => 'Data pengemudi berhasil diperbarui.', 'data' => $pengemudi]);
    }

    // Menghapus pengemudi
    public function destroy($id)
    {
        $pengemudi = Pengemudi::findOrFail($id);
        $pengemudi->delete();

        return response()->json(['message' => 'Pengemudi berhasil dihapus.']);
    }
}
