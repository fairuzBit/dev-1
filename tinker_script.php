<?php
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Http;

$admin = User::where('role', 'admin')->first();
$tutor = User::where('role', 'tutor')->first();
$learner = User::where('role', 'learner')->first();

if (!$admin || !$tutor || !$learner) {
    echo "Missing users!\n";
    exit;
}

$adminToken = JWTAuth::fromUser($admin);
$tutorToken = JWTAuth::fromUser($tutor);
$learnerToken = JWTAuth::fromUser($learner);

$baseUrl = 'http://localhost:8000/api';

function testEndpoint($method, $uri, $token = null, $data = []) {
    global $baseUrl;
    $url = $baseUrl . $uri;
    
    $req = Http::withHeaders(['Accept' => 'application/json']);
    if ($token) {
        $req = $req->withToken($token);
    }
    
    try {
        if ($method === 'GET') {
            $res = $req->get($url, $data);
        } else {
            $res = $req->$method($url, $data);
        }
        
        $status = $res->status();
        echo str_pad($method, 6) . " " . str_pad($uri, 40) . " => " . $status . "\n";
        if ($status >= 400 && $status != 404 && $status != 405) {
            echo "   Error: " . substr($res->body(), 0, 150) . "\n";
        }
    } catch (\Exception $e) {
        echo "   Exception: " . $e->getMessage() . "\n";
    }
}

echo "\n--- PUBLIC ROUTES ---\n";
testEndpoint('post', '/login', null, ['email' => $admin->email, 'password' => 'password']);

echo "\n--- ADMIN ROUTES ---\n";
testEndpoint('get', '/admin/users', $adminToken);
testEndpoint('get', '/admin/applications', $adminToken);
testEndpoint('get', '/admin/moderation/reviews', $adminToken);
testEndpoint('get', '/admin/payments', $adminToken);

echo "\n--- TUTOR ROUTES ---\n";
testEndpoint('get', '/tutor/dashboard', $tutorToken);
testEndpoint('get', '/tutor/availability', $tutorToken);
testEndpoint('get', '/tutor/bookings', $tutorToken);
testEndpoint('get', '/tutor/schedules', $tutorToken);
testEndpoint('get', '/tutor/history', $tutorToken);
testEndpoint('get', '/tutor/reviews', $tutorToken);
testEndpoint('get', '/tutor/notifications', $tutorToken);

echo "\n--- LEARNER ROUTES ---\n";
testEndpoint('get', '/tutors', $learnerToken);
testEndpoint('get', '/me', $learnerToken);
testEndpoint('get', '/dashboard', $learnerToken);
testEndpoint('get', '/learner/bookings', $learnerToken);
testEndpoint('get', '/schedules', $learnerToken);
testEndpoint('get', '/learner/history', $learnerToken);
testEndpoint('get', '/learner/notification', $learnerToken);

echo "\nDone!\n";

