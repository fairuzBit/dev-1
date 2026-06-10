<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\MasterSlot;

/**
 * @tags Admin Master Data
 */
class MasterDataController extends Controller
{
    // ==========================================
    // CRUD UNTUK COURSE (MATA KULIAH)
    // ==========================================

    public function storeCourse(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255'
        ]);

        $course = Course::create($validated);

        return response()->json([
            'message' => 'Mata Kuliah berhasil ditambahkan',
            'data' => $course
        ]);
    }

    public function updateCourse(Request $request, $id)
    {
        $course = Course::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255'
        ]);

        $course->update($validated);

        return response()->json([
            'message' => 'Mata Kuliah berhasil diperbarui',
            'data' => $course
        ]);
    }

    public function destroyCourse($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json([
            'message' => 'Mata Kuliah berhasil dihapus'
        ]);
    }

    // ==========================================
    // CRUD UNTUK MASTER SLOT (JAM KETERSEDIAAN)
    // ==========================================

    public function storeSlot(Request $request)
    {
        $validated = $request->validate([
            'time_range' => 'required|string|max:50'
        ]);

        $slot = MasterSlot::create($validated);

        return response()->json([
            'message' => 'Master Slot berhasil ditambahkan',
            'data' => $slot
        ]);
    }

    public function destroySlot($id)
    {
        $slot = MasterSlot::findOrFail($id);
        $slot->delete();

        return response()->json([
            'message' => 'Master Slot berhasil dihapus'
        ]);
    }
}
