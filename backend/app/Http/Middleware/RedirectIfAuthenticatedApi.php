<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticatedApi
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            // User sudah login, tolak akses dengan response JSON
            return response()->json(['message' => 'Already authenticated'], 403);
        }
        return $next($request);
    }
}
