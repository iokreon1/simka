<?php

namespace App\Http\Controllers;

use App\Models\LogAktivitas;
use Illuminate\Http\Request;

class LogAktivitasController extends Controller
{
    public function index()
    {
        $logs = LogAktivitas::with('user')->latest()->get();
        return response()->json($logs);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'aktivitas' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'tanggal_aktivitas' => 'required|date',
            'ip_address' => 'nullable|ip',
        ]);

        $log = LogAktivitas::create([
            'user_id' => $request->user_id,
            'aktivitas' => $request->aktivitas,
            'deskripsi' => $request->deskripsi,
            'tanggal_aktivitas' => $request->tanggal_aktivitas,
            'ip_address' => $request->ip_address,
        ]);

        return response()->json([
            'message' => 'Log aktivitas berhasil dicatat.',
            'data' => $log,
        ], 201);
    }

    public function show($id)
    {
        $log = LogAktivitas::with('user')->findOrFail($id);
        return response()->json($log);
    }

    public function destroy($id)
    {
        $log = LogAktivitas::findOrFail($id);
        $log->delete();

        return response()->json(['message' => 'Log aktivitas berhasil dihapus.']);
    }
}
