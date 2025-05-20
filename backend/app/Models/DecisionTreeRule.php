<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DecisionTreeRule extends Model
{
    use HasFactory;

    protected $table = 'decision_tree_rules';

    protected $fillable = [
        'nama_rule',
        'kondisi',
        'hasil_keputusan',
        'prioritas',
        'status_aktif',
    ];

    protected $casts = [
        'prioritas' => 'integer',
        'status_aktif' => 'boolean',
    ];
}
