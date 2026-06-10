<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminUserController extends Controller
{
    /**
     * Daftar Semua Pengguna
     */
    public function index()
    {
        $users = User::with('roles')->orderBy('created_at', 'desc')->get();

        return response()->json([
            'data' => $users
        ]);
    }

    /**
     * Blokir/Hapus Pengguna
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        
        // Mencegah admin menghapus dirinya sendiri
        if (auth()->id() == $user->id) {
            return response()->json(['message' => 'Cannot delete yourself'], 400);
        }

        $user->delete();

        return response()->json([
            'message' => 'Pengguna berhasil diblokir/dihapus'
        ]);
    }
}
