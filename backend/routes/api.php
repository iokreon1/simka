<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

// Rute API yang butuh autentikasi Sanctum
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
});
