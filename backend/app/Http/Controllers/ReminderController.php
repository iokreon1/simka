<?php

namespace App\Http\Controllers;

use App\Models\Reminder;
use Illuminate\Http\Request;

class ReminderController extends Controller
{
    public function index()
    {
        $reminders = Reminder::with('user')->latest()->get();
        return response()->json($reminders);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'judul' => 'required|string|max:255',
            'pesan' => 'nullable|string',
            'tanggal_kirim' => 'required|date',
            'status' => 'required|in:terjadwal,dikirim',
        ]);

        $reminder = Reminder::create([
            'user_id' => $request->user_id,
            'judul' => $request->judul,
            'pesan' => $request->pesan,
            'tanggal_kirim' => $request->tanggal_kirim,
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'Reminder berhasil dibuat.',
            'data' => $reminder,
        ], 201);
    }

    public function show($id)
    {
        $reminder = Reminder::with('user')->findOrFail($id);
        return response()->json($reminder);
    }

    public function update(Request $request, $id)
    {
        $reminder = Reminder::findOrFail($id);

        $request->validate([
            'user_id' => 'sometimes|required|exists:users,id',
            'judul' => 'sometimes|required|string|max:255',
            'pesan' => 'nullable|string',
            'tanggal_kirim' => 'sometimes|required|date',
            'status' => 'sometimes|required|in:terjadwal,dikirim',
        ]);

        $reminder->update($request->only([
            'user_id',
            'judul',
            'pesan',
            'tanggal_kirim',
            'status',
        ]));

        return response()->json([
            'message' => 'Reminder berhasil diperbarui.',
            'data' => $reminder,
        ]);
    }

    public function destroy($id)
    {
        $reminder = Reminder::findOrFail($id);
        $reminder->delete();

        return response()->json(['message' => 'Reminder berhasil dihapus.']);
    }
}
