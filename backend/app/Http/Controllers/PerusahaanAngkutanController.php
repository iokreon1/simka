<?php

namespace App\Http\Controllers;

use App\Models\PerusahaanAngkutan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PerusahaanAngkutanController extends Controller
{
    public function index()
    {
        // Untuk admin: tampilkan semua perusahaan
        if (Auth::user()->role === 'admin') {
            $perusahaan = PerusahaanAngkutan::with('user')->get();
            return response()->json($perusahaan);
        }
        
        // Untuk user: tampilkan hanya perusahaan miliknya
        $perusahaan = PerusahaanAngkutan::where('user_id', Auth::id())->get();
        return response()->json($perusahaan);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_perusahaan' => 'required|string',
            'nomor_izin_usaha' => 'required|string|unique:perusahaan_angkutan',
            'alamat_perusahaan' => 'required|string',
            'kecamatan' => 'required|string',
            'kelurahan' => 'required|string',
            'kode_pos' => 'required|string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'jenis_usaha_angkutan' => 'required|string',
            'tanggal_pendirian' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $perusahaan = PerusahaanAngkutan::create([
            'user_id' => Auth::id(),
            'nama_perusahaan' => $request->nama_perusahaan,
            'nomor_izin_usaha' => $request->nomor_izin_usaha,
            'alamat_perusahaan' => $request->alamat_perusahaan,
            'kecamatan' => $request->kecamatan,
            'kelurahan' => $request->kelurahan,
            'kode_pos' => $request->kode_pos,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'jenis_usaha_angkutan' => $request->jenis_usaha_angkutan,
            'tanggal_pendirian' => $request->tanggal_pendirian,
            'status_aktif' => true,
        ]);

        return response()->json([
            'message' => 'Perusahaan berhasil ditambahkan',
            'perusahaan' => $perusahaan
        ], 201);
    }

    public function show($id)
    {
        $perusahaan = PerusahaanAngkutan::with('user')->findOrFail($id);
        
        // Cek apakah user adalah owner perusahaan atau admin
        if (Auth::id() !== $perusahaan->user_id && Auth::user()->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        return response()->json($perusahaan);
    }

    public function update(Request $request, $id)
    {
        $perusahaan = PerusahaanAngkutan::findOrFail($id);
        
        // Cek apakah user adalah owner perusahaan atau admin
        if (Auth::id() !== $perusahaan->user_id && Auth::user()->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'nama_perusahaan' => 'string',
            'nomor_izin_usaha' => 'string|unique:perusahaan_angkutan,nomor_izin_usaha,' . $id,
            'alamat_perusahaan' => 'string',
            'kecamatan' => 'string',
            'kelurahan' => 'string',
            'kode_pos' => 'string',
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
            'jenis_usaha_angkutan' => 'string',
            'tanggal_pendirian' => 'date',
            'status_aktif' => 'boolean',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $perusahaan->update($request->all());

        return response()->json([
            'message' => 'Perusahaan berhasil diperbarui',
            'perusahaan' => $perusahaan
        ]);
    }

    public function destroy($id)
    {
        $perusahaan = PerusahaanAngkutan::findOrFail($id);
        
        // Cek apakah user adalah owner perusahaan atau admin
        if (Auth::id() !== $perusahaan->user_id && Auth::user()->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $perusahaan->delete();

        return response()->json([
            'message' => 'Perusahaan berhasil dihapus'
        ]);
    }

    public function searchByLocation(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'radius' => 'required|numeric', // dalam kilometer
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Hitung perusahaan dalam radius tertentu (menggunakan Haversine formula)
        $radius = $request->radius;
        $lat = $request->latitude;
        $lng = $request->longitude;

        $perusahaan = PerusahaanAngkutan::selectRaw('*, (
            6371 * acos(
                cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + 
                sin(radians(?)) * sin(radians(latitude))
            )
        ) AS distance', [$lat, $lng, $lat])
        ->having('distance', '<=', $radius)
        ->orderBy('distance')
        ->get();

        return response()->json($perusahaan);
    }
}