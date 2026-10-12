<?php
declare(strict_types=1);

// Force error reporting during local MAMP testing
error_reporting(E_ALL);
ini_set('display_errors', '1');

$base_url = '/';

// -----------------------------------------------------------------------------
// 1. CONFIGURATION & MASTER DESTINATION MAP
// -----------------------------------------------------------------------------
$destinations = [
    'qrcode' => [
        'unga' => [
            'delegate-pack' => $base_url . '2026?utm_source=qr&utm_medium=print&utm_campaign=unga2026_pack'
        ],
        'site-visit' => [
            '2026' => $base_url . '2026?utm_source=qr&utm_medium=print&utm_campaign=echidna-issrof-visit'
        ],
        '@10' => [
            'table-card'      => $base_url . '@10/landing/?utm_source=qr&utm_medium=banner&utm_campaign=malkia_at_10'
        ]
    ],
    'shortlink' => [
        'echidna-issrof-visit'      => $base_url . '2026?utm_source=shortlink&utm_medium=social',
        'donate'    => $base_url . 'engagement?utm_source=shortlink&utm_medium=direct#pledge',
        'strategic' => $base_url . 'strategic-plan?utm_source=shortlink&utm_medium=deck'
    ]
];

// -----------------------------------------------------------------------------
// 2. PARSE PARAMETERS
// -----------------------------------------------------------------------------
$type     = $_GET['type'] ?? '';
$function = $_GET['function'] ?? '';
$name     = $_GET['name'] ?? '';
$slug     = $_GET['slug'] ?? '';

// Debug trap: If no type is passed, the .htaccess rule failed to append query strings
// If accessed directly without parameters, bounce silently to root
if (empty($type)) {
    header("Location: /", true, 302);
    exit;
}

$targetUrl = null;
$trackingKey = '';

if ($type === 'qrcode' && isset($destinations['qrcode'][$function][$name])) {
    $targetUrl = $destinations['qrcode'][$function][$name];
    $trackingKey = "qrcode:{$function}:{$name}";
} elseif ($type === 'shortlink' && isset($destinations['shortlink'][$slug])) {
    $targetUrl = $destinations['shortlink'][$slug];
    $trackingKey = "shortlink:{$slug}";
}

// Fallback to homepage if route not mapped
if (!$targetUrl) {
    header("Location: " . $base_url, true, 302);
    exit;
}

// -----------------------------------------------------------------------------
// 3. STATS LOGGING & WRITING
// -----------------------------------------------------------------------------
$dataDir = __DIR__ . '/data';
$logFile = $dataDir . '/redirect-stats.json';

if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0777, true);
}

$stats = [];
if (file_exists($logFile)) {
    $rawContent = @file_get_contents($logFile);
    if (!empty($rawContent)) {
        $stats = json_decode($rawContent, true) ?: [];
    }
}

if (!isset($stats[$trackingKey])) {
    $stats[$trackingKey] = [
        'total_hits'    => 0,
        'first_scanned' => date('Y-m-d H:i:s'),
        'last_scanned'  => null,
        'target_url'    => $targetUrl
    ];
}

$stats[$trackingKey]['total_hits']++;
$stats[$trackingKey]['last_scanned'] = date('Y-m-d H:i:s');
$stats[$trackingKey]['target_url'] = $targetUrl;

// Atomic write with explicit error catching
$writeResult = @file_put_contents($logFile, json_encode($stats, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);

if ($writeResult === false) {
    die("Permission Error: Failed to write to $logFile. MAMP is running as user: " . get_current_user());
}

// -----------------------------------------------------------------------------
// 4. DISPATCH REDIRECT
// -----------------------------------------------------------------------------
if (ob_get_level()) {
    ob_end_clean();
}

header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
// Using 302 temporarily for local testing to avoid aggressive browser caching
header("Location: " . $targetUrl, true, 302);
exit;