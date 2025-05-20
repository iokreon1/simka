<?php

namespace App\Http\Controllers;

use App\Models\Kendaraan;
use App\Models\PerusahaanAngkutan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class KendaraanController extends Controller
{
    public function index(Request $request)
    {
        // Untuk admin: tampilkan semua kendaraan atau filter berdasarkan perusahaan
        if (Auth::user()->role === 'admin') {
            $query = Kendaraan::with(['perusahaan', 'pemilik']);
            
            if ($request->has('perusahaan_id')) {
                $query->where('perusahaan_id', $request->perusahaan_id);
            }
            
            $kendaraan = $query->get();
            return response()->json($kendaraan);
        }
        
        // Untuk user: tampilkan hanya kendaraan dari perusahaan yang dimiliki user
        $perusahaanIds = PerusahaanAngkutan::where('user_id', Auth::id())->pluck('id');
        $query = Kendaraan::with(['perusahaan', 'pemilik'])->whereIn('perusahaan_id', $perusahaanIds);
        
        if ($request->has('perusahaan_id')) {
            $query->where('perusahaan_id', $request->perusahaan_id);
        }
        
        $kendaraan = $query->get();
        return response()->json($kendaraan);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'perusahaan_id' => 'required|exists:perusahaan_angkutan,id',
            'pemilik_id' => 'required|exists:pemilik_kendaraan,id',
            'nomor_kendaraan' => 'required|string|unique:kendaraan',
            'nomor_rangka' => 'required|string|unique:kendaraan',
            'nomor_mesin' => 'required|string|unique:kendaraan',
            'merk' => 'required|string',
            'tipe' => 'required|string',
            'tahun_pembuatan' => 'required|date_format:Y',
            'warna' => 'required|string',
            'kapasitas_penumpang' => 'required|integer',
            'status_kendaraan' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Cek apakah user memiliki akses ke perusahaan yang dipilih
        $perusahaan = PerusahaanAngkutan::findOrFail($request->perusahaan_id);
        if (Auth::user()->role !== 'admin' && $perusahaan->user_id !== Auth::id()) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $kendaraan = Kendaraan::create($request->all());

        return response()->json([
            'message' => 'Kendaraan berhasil ditambahkan',
            'kendaraan' => $kendaraan
        ], 201);
    }

    public function show($id)
    {
        $kendaraan = Kendaraan::with(['perusahaan', 'pemilik'])->findOrFail($id);
        
        // Cek apakah user memiliki akses ke kendaraan ini
        if (Auth::user()->role !== 'admin') {
            $perusahaanIds = PerusahaanAngkutan::where('user_id', Auth::id())->pluck('id');
            if (!$perusahaanIds->contains($kendaraan->perusahaan_id)) {
                return response()->json([
                    'message' => 'Unauthorized'
                ], 403);
            }
        }

        return response()->json($kendaraan);
    }

    public function update(Request $request, $id)
    {
        $kendaraan = Kendaraan::findOrFail($id);
        
        // Cek apakah user memiliki akses ke kendaraan ini
        if (Auth::user()->role !== 'admin') {
            $perusahaanIds = PerusahaanAngkutan::where('user_id', Auth::id())->pluck('id');
            if (!$perusahaanIds->contains($kendaraan->perusahaan_id)) {
                return response()->json([
                    'message' => 'Unauthorized'
                ], 403);
            }
        }

        $validator = Validator::make($request->all(), [
            'perusahaan_id' => 'exists:perusahaan_angkutan,id',
            'pemilik_id' => 'exists:pemilik_kendaraan,id',
            'nomor_kendaraan' => 'string|unique:kendaraan,nomor_kendaraan,' . $id,
            'nomor_rangka' => 'string|unique:kendaraan,nomor_rangka,' . $id,
            'nomor_mesin' => 'string|unique:kendaraan,nomor_mesin,' . $id,
            'merk' => 'string',
            'tipe' => 'string',
            'tahun_pembuatan' => 'date_format:Y',
            'warna' => 'string',
            'kapasitas_penumpang' => 'integer',
            'status_kendaraan' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Cek apakah user memiliki akses ke perusahaan yang dipilih (jika ada perubahan)
        if ($request->has('perusahaan_id') && Auth::user()->role !== 'admin') {
            $perusahaan = PerusahaanAngkutan::findOrFail($request->perusahaan_id);
            if ($perusahaan->user_id !== Auth::id()) {
                return response()->json([
                    'message' => 'Unauthorized'
                ], 403);
            }
        }

        $kendaraan->update($request->all());

        return response()->json([
            'message' => 'Kendaraan berhasil diperbarui',
            'kendaraan' => $kendaraan
        ]);
    }

    public function destroy($id)
    {
        $kendaraan = Kendaraan::findOrFail($id);
        
        // Cek apakah user memiliki akses ke kendaraan ini
        if (Auth::user()->role !== 'admin') {
            $perusahaanIds = PerusahaanAngkutan::where('user_id', Auth::id())->pluck('id');
            if (!$perusahaanIds->contains($kendaraan->perusahaan_id)) {
                return response()->json([
                    'message' => 'Unauthorized'
                ], 403);
            }
        }

        $kendaraan->delete();

        return response()->json([
            'message' => 'Kendaraan berhasil dihapus'
        ]);
    }
}
