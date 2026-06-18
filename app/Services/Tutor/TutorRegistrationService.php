<?php

namespace App\Services\Tutor;

use App\Models\Tutor;
use App\Models\TutorApplication;
use Illuminate\Support\Facades\Http;
use Spatie\PdfToText\Pdf;
use Illuminate\Support\Facades\Log;

class TutorRegistrationService
{
    /**
     * Upload Dokumen dan Ekstrak IPK menggunakan AI
     */
    public function processDocument(int $userId, array $data, $file)
    {
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
            ['user_id' => $userId],
            [
                'ipk' => $calculatedIpk,
                'current_semester' => $data['current_semester']
            ]
        );

        // Buat Aplikasi Tutor
        $application = TutorApplication::create([
            'user_id' => $userId,
            'course_id' => $data['course_id'],
            'grade' => $data['grade'],
            'transcript_file' => $path,
            'status' => 'pending'
        ]);

        return [
            'extracted_ipk' => $calculatedIpk,
            'application_id' => $application->id,
        ];
    }

    /**
     * Upload Dokumen untuk Upgrade Semester
     */
    public function processUpgradeSemester(int $userId, array $data, $file)
    {
        $path = $file->store('transcripts', 'public');

        try {
            $text = (new Pdf())->setPdf($file->getPathname())->text();
            $calculatedIpk = $this->extractIpkWithAI($text);
        } catch (\Exception $e) {
            Log::error('PDF Extraction Error: ' . $e->getMessage());
            $calculatedIpk = 0.00;
        }

        // Update IPK terbaru
        Tutor::updateOrCreate(
            ['user_id' => $userId],
            ['ipk' => $calculatedIpk]
        );

        // Buat Aplikasi Tutor (Upgrade)
        $application = TutorApplication::create([
            'user_id' => $userId,
            'new_semester' => $data['new_semester'],
            'transcript_file' => $path,
            'status' => 'pending'
        ]);

        return [
            'extracted_ipk' => $calculatedIpk,
            'application_id' => $application->id,
        ];
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
            ->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={$apiKey}", [
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
