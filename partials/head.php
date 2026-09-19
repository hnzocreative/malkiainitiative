<?php
if (!defined('BASE_URL')) {
    // Detects local MAMP subdirectory automatically or defaults to root on production
    $is_local_mi = (strpos($_SERVER['REQUEST_URI'], '/malkiainitiative/') === 0 || strpos($_SERVER['SCRIPT_NAME'], '/malkiainitiative/') === 0);
    define('BASE_URL', $is_local_mi ? '/malkiainitiative/' : '/');
}
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="<?= BASE_URL ?>assets/images/favicon/favicon.ico" type="image/x-icon">

<!-- Preconnect Google Fonts & Phosphor Icons -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/bold/style.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css" />

<!-- Corporate Adaptive Stylesheet -->
<link rel="stylesheet" href="<?= BASE_URL ?>assets/css/styles.css">