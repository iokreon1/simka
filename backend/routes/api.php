<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
});
