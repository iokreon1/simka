<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if (Auth::attempt($credentials, $request->remember)) {
            $request->session()->regenerate(); // penting untuk keamanan

            return response()->json([
                'message' => 'Login berhasil',
                'user' => Auth::user(),
            ]);
        }

        return response()->json(['message' => 'Email atau password salah'], 401);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout berhasil']);
    }

    public function user(Request $request)
    {
        return response()->json(Auth::user());
    }
}
