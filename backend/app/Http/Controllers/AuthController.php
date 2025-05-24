<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validasi input
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Coba login
        if (!Auth::attempt($credentials, $request->boolean('remember'))) {
            return response()->json(['message' => 'Email atau password salah'], 401);
        }

        // Hindari session fixation
        $request->session()->regenerate();

        $user = Auth::user();

        return response()->json([
            'message' => 'Login berhasil',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ]
        ])->cookie(
    'role', 
    $user->role, 
    60,
    '/',
    config('session.domain'), // disarankan jangan null
    config('session.secure'), 
    true, 
    false, 
    config('session.same_site', 'Lax')
)

;
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        // Invalidate session dan regenerate token untuk keamanan
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout berhasil'])
         ->withoutCookie('role');
    }

    public function user(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
        ]);
    }
}
