<?php

namespace App\Http\Controllers;

use App\Models\PemilikKendaraan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PemilikKendaraanController extends Controller
{
    public function index()
    {
        // Untuk admin: tampilkan semua pemilik kendaraan
        if (Auth::user()->role === 'admin') {
            $pemilik = PemilikKendaraan::all();
            return response()->json($pemilik);
        }
        
        // Untuk user: tampilkan hanya pemilik yang terkait dengan user
        $pemilik = PemilikKendaraan::where('user_id', Auth::id())->get();
        return response()->json($pemilik);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_pemilik' => 'required|string',
            'nik' => 'required|string|unique:pemilik_kendaraan',
            'alamat' => 'required|string',
            'nomor_telepon' => 'required|string',
            'email' => 'nullable|email',
            'jenis_identitas' => 'required|string',
            'nomor_identitas' => 'required|string|unique:pemilik_kendaraan',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $pemilik = PemilikKendaraan::create([
            'user_id' => Auth::id(),
            'nama_pemilik' => $request->nama_pemilik,
            'nik' => $request->nik,
            'alamat' => $request->alamat,
            'nomor_telepon' => $request->nomor_telepon,
            'email' => $request->email,
            'jenis_identitas' => $request->jenis_identitas,
            'nomor_identitas' => $request->nomor_identitas,
        ]);

        return response()->json([
            'message' => 'Pemilik kendaraan berhasil ditambahkan',
            'pemilik' => $pemilik
        ], 201);
    }

    public function show($id)
    {
        $pemilik = PemilikKendaraan::findOrFail($id);
        
        // Cek apakah user adalah owner data pemilik atau admin
        if (Auth::user()->role !== 'admin' && (!$pemilik->user_id || $pemilik->user_id !== Auth::id())) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        return response()->json($pemilik);
    }

    public function update(Request $request, $id)
    {
        $pemilik = PemilikKendaraan::findOrFail($id);
        
        // Cek apakah user adalah owner data pemilik atau admin
        if (Auth::user()->role !== 'admin' && (!$pemilik->user_id || $pemilik->user_id !== Auth::id())) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $validator = Validator::make($request->all(), [
            'nama_pemilik' => 'string',
            'nik' => 'string|unique:pemilik_kendaraan,nik,' . $id,
            'alamat' => 'string',
            'nomor_telepon' => 'string',
            'email' => 'nullable|email',
            'jenis_identitas' => 'string',
            'nomor_identitas' => 'string|unique:pemilik_kendaraan,nomor_identitas,' . $id,
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $pemilik->update($request->all());

        return response()->json([
            'message' => 'Pemilik kendaraan berhasil diperbarui',
            'pemilik' => $pemilik
        ]);
    }

    public function destroy($id)
    {
        $pemilik = PemilikKendaraan::findOrFail($id);
        
        // Cek apakah user adalah owner data pemilik atau admin
        if (Auth::user()->role !== 'admin' && (!$pemilik->user_id || $pemilik->user_id !== Auth::id())) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 403);
        }

        $pemilik->delete();

        return response()->json([
            'message' => 'Pemilik kendaraan berhasil dihapus'
        ]);
    }
}