<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\RegisterRequest; 
use App\Http\Requests\LoginRequest;use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Services\UserService;
use App\Http\Resources\UserResource;


class AuthController extends Controller
{
    /**
     * Summary of register
     * 
     * @unauthenticated
     */
    public function register(RegisterRequest $request, UserService $userService) {
        
        
        $data = $request->validated();

        
        $user = $userService->registerUser($data);

        
        return response()->json([
            'message' => 'Registrasi Berhasil', 
            'user' => new UserResource($user)
        ]);
    }

    /**
     * Summary of register
     * 
     * @unauthenticated
     */
    public function login(LoginRequest $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($token = Auth::guard('api')->attempt($credentials)) {
            
            
            // Kita bungkus Auth::user() menggunakan UserResource
            return response()->json([
                'message' => 'Login Berhasil',
                'access_token' => $token,
                'token_type' => 'bearer',
                'user' => new UserResource(Auth::guard('api')->user())
            ]);
        }
        return response()->json(['message' => 'Email atau Password salah'], 401);
    }
       public function getUser(\Illuminate\Http\Request $request) {
        return response()->json([
            'user' => new UserResource($request->user())
        ]);
    }
}
