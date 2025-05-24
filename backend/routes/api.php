<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Login endpoint
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:20,1');

// Rute dengan autentikasi Sanctum
Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Admin routes
    Route::prefix('admin')->middleware('role:admin')->group(function () {
        Route::get('/dashboard', function () {
            return response()->json(['message' => 'Selamat datang di dashboard admin']);
        });
    });

    // User routes
    Route::prefix('user')->middleware('role:user')->group(function () {
        Route::get('/profile', function () {
            return response()->json(['message' => 'Selamat datang di profil user']);
        });
    });
});
