<?php

namespace App\Services\Tutor;

use App\Models\Tutor;
use App\Models\TutorApplication;
use Illuminate\Support\Facades\Http;
use Spatie\PdfToText\Pdf;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;

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
            
            $aiResult = $this->extractIpkWithAI($text);
            
            if (!$aiResult['is_transcript']) {
                Storage::disk('public')->delete($path);
                throw ValidationException::withMessages([
                    'transcript_file' => 'Dokumen yang diunggah tidak terdeteksi sebagai transkrip nilai atau KHS yang valid.'
                ]);
            }
            $calculatedIpk = $aiResult['ipk'];
        } catch (ValidationException $e) {
            throw $e;
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
            'grade' => $data['grade'] ?? 'N/A', // Set N/A since OCR will verify
            'transcript_file' => $path,
            'portfolio_url' => $data['portfolio_url'] ?? null,
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
            $aiResult = $this->extractIpkWithAI($text);
            
            if (!$aiResult['is_transcript']) {
                Storage::disk('public')->delete($path);
                throw ValidationException::withMessages([
                    'transcript_file' => 'Dokumen yang diunggah tidak terdeteksi sebagai transkrip nilai atau KHS yang valid.'
                ]);
            }
            $calculatedIpk = $aiResult['ipk'];
        } catch (ValidationException $e) {
            throw $e;
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
    private function extractIpkWithAI(string $text): array
    {
        $apiKey = env('GEMINI_API_KEY');
        
        if (!$apiKey) {
            return ['is_transcript' => true, 'ipk' => 0.00];
        }

        // Prompt (Instruksi) untuk LLM
        $prompt = "Berikut adalah teks hasil OCR dari sebuah dokumen: \n\n" . substr($text, 0, 5000) . 
                  "\n\nTugas Anda:
1. Analisis apakah teks ini merupakan dokumen 'Transkrip Nilai' atau 'Kartu Hasil Studi (KHS)' mahasiswa yang valid (harus mengandung daftar mata kuliah, SKS, nilai/grade).
2. Jika BUKAN transkrip nilai, kembalikan JSON: {\"is_transcript\": false, \"ipk\": null}
3. Jika YA, temukan semua IPS dan SKS tiap semester. Hitung IPK akhirnya menggunakan rumus matematis: (Total dari (IPS * SKS)) dibagi dengan Total SKS.
4. Jika YA, kembalikan JSON: {\"is_transcript\": true, \"ipk\": 3.75}

Jawab HANYA dengan JSON murni tanpa markdown block.";

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
            
            return [
                'is_transcript' => $aiResult['is_transcript'] ?? true,
                'ipk' => isset($aiResult['ipk']) ? (float) $aiResult['ipk'] : 0.00
            ];
        }

        return ['is_transcript' => true, 'ipk' => 0.00];
    }
}
