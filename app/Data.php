<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $table = 'data';
    protected $guarded =[];

    public static $rules1 = [
        'firstName' => 'required|min:3',
        'lastName' => 'required|min:3',
        'newsletter' => 'required',
    ];
    public static $rules2 = [
        'sport' => 'required',
        'why' => 'required|',
    ];

    public static $rules = [
        'firstName' => 'required|min:3',
        'lastName' => 'required|min:3',
        'newsletter' => 'required',
        'sport' => 'required',
        'why' => 'required|',
    ];
}
