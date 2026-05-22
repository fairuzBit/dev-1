<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TutorCourse extends Model
{
        protected $fillable = ['tutor_id', 'course_id', 'price'];

}
