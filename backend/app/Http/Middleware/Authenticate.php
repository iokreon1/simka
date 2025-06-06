<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo($request): ?string
    {
        // Redirect ke route 'login' jika tidak terautentikasi
        if (!$request->expectsJson()) {
            return route('login');
        }

        return null;
    }
}
