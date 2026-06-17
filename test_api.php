<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;

function sendRequest($kernel, $method, $uri, $token = null, $data = []) {
    $server = [
        'REQUEST_URI' => $uri,
        'REQUEST_METHOD' => $method,
    ];
    if ($token) {
        $server['HTTP_AUTHORIZATION'] = 'Bearer ' . $token;
    }
    
    $request = Request::create($uri, $method, $data, [], [], $server);
    $response = $kernel->handle($request);
    
    echo str_pad($method, 6) . " " . str_pad($uri, 40) . " => " . $response->getStatusCode() . "\n";
    if ($response->getStatusCode() >= 400 && $response->getStatusCode() != 404 && $response->getStatusCode() != 405) {
        echo "   Error: " . substr($response->getContent(), 0, 200) . "\n";
    }
}

// Users
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

echo "--- PUBLIC ROUTES ---\n";
sendRequest($kernel, 'POST', '/api/login', null, ['email' => $admin->email, 'password' => 'password']);

echo "\n--- ADMIN ROUTES ---\n";
sendRequest($kernel, 'GET', '/api/admin/users', $adminToken);
sendRequest($kernel, 'GET', '/api/admin/applications', $adminToken);
sendRequest($kernel, 'GET', '/api/admin/moderation/reviews', $adminToken);
sendRequest($kernel, 'GET', '/api/admin/payments', $adminToken);

echo "\n--- TUTOR ROUTES ---\n";
sendRequest($kernel, 'GET', '/api/tutor/dashboard', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/availability', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/bookings', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/schedules', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/history', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/reviews', $tutorToken);
sendRequest($kernel, 'GET', '/api/tutor/notifications', $tutorToken);

echo "\n--- LEARNER ROUTES ---\n";
sendRequest($kernel, 'GET', '/api/tutors', $learnerToken);
sendRequest($kernel, 'GET', '/api/me', $learnerToken);
sendRequest($kernel, 'GET', '/api/dashboard', $learnerToken);
sendRequest($kernel, 'GET', '/api/learner/bookings', $learnerToken);
sendRequest($kernel, 'GET', '/api/schedules', $learnerToken);
sendRequest($kernel, 'GET', '/api/learner/history', $learnerToken);
sendRequest($kernel, 'GET', '/api/learner/notification', $learnerToken);

