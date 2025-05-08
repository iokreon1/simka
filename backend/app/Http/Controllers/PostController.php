<?php

namespace App\Http\Controllers;

use App\Models\Post; // <- pastikan ini ada
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }
}
