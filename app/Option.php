<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = ['index', 'text'];

    protected $hidden = ['created_at', 'updated_at'];

    public function votes() {
        return $this->hasMany('App\Vote');
    }
}
