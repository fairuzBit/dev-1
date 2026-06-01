<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Learner\TutorDiscoveryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Learner\ProfileController;
use App\Http\Controllers\Api\Learner\DashboardController;
use App\Http\Controllers\Api\Learner\BookingController;
use App\Http\Controllers\Api\Learner\NotificationController;



// ROUTE PUBLIK 
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ROUTE PRIVATE
Route::middleware('auth:api')->group(function () {
    
    // Fitur User Terautentikasi
    Route::get('/user', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']); 
    
    // KHUSUS ROLE: LEARNER
    Route::middleware('role:learner')->group(function () {
        Route::get('/tutors', [TutorDiscoveryController::class, 'index']); 
        Route::get('/tutors/{id}', [TutorDiscoveryController::class, 'show']);
        Route::get('/me', [ProfileController::class, 'me']);
        Route::get('/dashboard', [DashboardController::class, 'index']);
        Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
        Route::post('/learner/bookings', [BookingController::class, 'store']);
        Route::get('/learner/bookings/{id}', [BookingController::class, 'show']);
        Route::get('/schedules', [BookingController::class, 'schedules']);
        Route::get('/learner/history', [BookingController::class, 'history']);
        Route::get('/learner/notification', [NotificationController::class, 'index']);
        Route::patch('/learner/notification/{id}/read', [NotificationController::class, 'markAsRead']);

    });
    
});
