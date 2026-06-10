<?php

namespace App\Http\Controllers\Api\Tutor;

use App\Http\Controllers\Controller;
use App\Models\Tutor;
use App\Models\TutorApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Spatie\PdfToText\Pdf;
use Illuminate\Support\Facades\Log;

class TutorRegistrationController extends Controller
{
    /**
     * Upload Dokumen dan Ekstrak IPK menggunakan AI
     * 
     * @authenticated
     */
    public function uploadDocument(Request $request)
    {
        $request->validate([
            'transcript_file' => 'required|mimes:pdf|max:5120', // Maks 5MB
            'course_id' => 'required|exists:courses,id',
            'grade' => 'required|string|max:2',
        ]);

        $file = $request->file('transcript_file');
        
        // Simpan file
        $path = $file->store('transcripts', 'public');

        try {
            // Ekstrak Teks dari PDF
            $text = (new Pdf())
                ->setPdf($file->getPathname())
                ->text();
            
            // Hitung IPK menggunakan AI
            $calculatedIpk = $this->extractIpkWithAI($text);
        } catch (\Exception $e) {
            Log::error('PDF Extraction Error: ' . $e->getMessage());
            $calculatedIpk = 0.00; // Jika gagal ekstrak teks atau AI error
        }

        // Simpan ke tabel tutors
        $tutor = Tutor::updateOrCreate(
            ['user_id' => $request->user()->id],
            ['ipk' => $calculatedIpk]
        );

        // Buat Aplikasi Tutor
        $application = TutorApplication::create([
            'user_id' => $request->user()->id,
            'course_id' => $request->course_id,
            'grade' => $request->grade,
            'transcript_file' => $path,
            'status' => 'pending'
        ]);

        return response()->json([
            'message' => 'Dokumen berhasil diunggah dan dianalisis',
            'data' => [
                'extracted_ipk' => $calculatedIpk,
                'application_id' => $application->id,
            ]
        ], 200);
    }

    /**
     * Fungsi Helper untuk memanggil Gemini API
     */
    private function extractIpkWithAI(string $text): float
    {
        $apiKey = env('GEMINI_API_KEY');
        
        if (!$apiKey) {
            return 0.00;
        }

        // Prompt (Instruksi) untuk LLM
        $prompt = "Berikut adalah teks dari transkrip nilai mahasiswa hasil OCR/PDF: \n\n" . substr($text, 0, 5000) . 
                  "\n\nTolong temukan semua IPS dan SKS tiap semester. Hitung IPK akhirnya menggunakan rumus matematis: (Total dari (IPS * SKS)) dibagi dengan Total SKS. Jawab HANYA dengan JSON murni tanpa markdown block. Format wajib: {\"ipk\": 3.75}";

        $response = Http::timeout(15)
            ->withHeaders(['Content-Type' => 'application/json'])
            ->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$apiKey}", [
                'contents' => [
                    ['parts' => [['text' => $prompt]]]
                ],
                'generationConfig' => [
                    'temperature' => 0,
                    'response_mime_type' => 'application/json'
                ]
            ]);

        if ($response->successful()) {
            $resultText = $response->json('candidates.0.content.parts.0.text');
            $aiResult = json_decode($resultText, true);
            
            if (isset($aiResult['ipk'])) {
                return (float) $aiResult['ipk'];
            }
        }

        return 0.00;
    }
}
