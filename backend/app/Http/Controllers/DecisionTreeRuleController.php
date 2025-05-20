<?php

namespace App\Http\Controllers;

use App\Models\DecisionTreeRule;
use Illuminate\Http\Request;

class DecisionTreeRuleController extends Controller
{
    public function index()
    {
        $rules = DecisionTreeRule::orderBy('prioritas', 'asc')->get();
        return response()->json($rules);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_rule' => 'required|string|max:255',
            'kondisi' => 'required|string',
            'hasil_keputusan' => 'required|string|max:255',
            'prioritas' => 'required|integer|min:1',
            'status_aktif' => 'required|boolean',
        ]);

        $rule = DecisionTreeRule::create($request->all());

        return response()->json([
            'message' => 'Decision Tree Rule berhasil dibuat.',
            'data' => $rule,
        ], 201);
    }

    public function show($id)
    {
        $rule = DecisionTreeRule::findOrFail($id);
        return response()->json($rule);
    }

    public function update(Request $request, $id)
    {
        $rule = DecisionTreeRule::findOrFail($id);

        $request->validate([
            'nama_rule' => 'sometimes|required|string|max:255',
            'kondisi' => 'sometimes|required|string',
            'hasil_keputusan' => 'sometimes|required|string|max:255',
            'prioritas' => 'sometimes|required|integer|min:1',
            'status_aktif' => 'sometimes|required|boolean',
        ]);

        $rule->update($request->all());

        return response()->json([
            'message' => 'Decision Tree Rule berhasil diperbarui.',
            'data' => $rule,
        ]);
    }

    public function destroy($id)
    {
        $rule = DecisionTreeRule::findOrFail($id);
        $rule->delete();

        return response()->json(['message' => 'Decision Tree Rule berhasil dihapus.']);
    }
}
