<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
        protected $fillable = ['user_id', 'bio', 'rating_avg', 'total_reviews'];

}
