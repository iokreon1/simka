<?php

namespace App\Http\Controllers;

use App\Models\DssParameter;
use Illuminate\Http\Request;

class DssParameterController extends Controller
{
    public function index()
    {
        $parameters = DssParameter::orderBy('id', 'asc')->get();
        return response()->json($parameters);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_parameter' => 'required|string|max:255',
            'bobot' => 'required|numeric|min:0',
            'deskripsi' => 'nullable|string',
            'status_aktif' => 'required|boolean',
        ]);

        $parameter = DssParameter::create($request->all());

        return response()->json([
            'message' => 'DSS Parameter berhasil dibuat.',
            'data' => $parameter,
        ], 201);
    }

    public function show($id)
    {
        $parameter = DssParameter::findOrFail($id);
        return response()->json($parameter);
    }

    public function update(Request $request, $id)
    {
        $parameter = DssParameter::findOrFail($id);

        $request->validate([
            'nama_parameter' => 'sometimes|required|string|max:255',
            'bobot' => 'sometimes|required|numeric|min:0',
            'deskripsi' => 'nullable|string',
            'status_aktif' => 'sometimes|required|boolean',
        ]);

        $parameter->update($request->all());

        return response()->json([
            'message' => 'DSS Parameter berhasil diperbarui.',
            'data' => $parameter,
        ]);
    }

    public function destroy($id)
    {
        $parameter = DssParameter::findOrFail($id);
        $parameter->delete();

        return response()->json(['message' => 'DSS Parameter berhasil dihapus.']);
    }
}
