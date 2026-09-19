<?php
if (!defined('BASE_URL')) {
    $is_local_mi = (strpos($_SERVER['REQUEST_URI'], '/mi/') === 0 || strpos($_SERVER['SCRIPT_NAME'], '/mi/') === 0);
    define('BASE_URL', $is_local_mi ? '/mi/' : '/');
}

// Resolve current page slug
$current_page = basename($_SERVER['SCRIPT_NAME'], '.php');

// Detect URI path segments
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts  = array_filter(explode('/', trim($request_uri, '/')));

// Check if currently inside /programs/
$is_in_programs = in_array('programs', $path_parts);

// Active state checks for the 3 main programs (matches parent landing or any child project)
$is_edu_active = in_array('education-for-girls', $path_parts) 
    || in_array($current_page, ['kuza', 'for-her']);

$is_autonomy_active = in_array('bodily-autonomy-rights', $path_parts) 
    || in_array($current_page, ['voices-uncut', 'sauti-ya-dada', 'break-free']);

$is_economic_active = in_array('economic-resilience', $path_parts) 
    || in_array($current_page, ['she-rise', 'cdsc4yrb']);

// About Us Section Check
$about_pages = ['why-our-work-matters', 'our-team', 'strategic-plan'];
$is_about_active = in_array($current_page, $about_pages);
?>

<aside class="corporate-sidebar" id="corporateSidebar">
    <div>
        <div class="brand-header">
            <a href="<?= BASE_URL ?>" class="brand-logo-wrap">
                <!-- Light Mode Logo -->
                <img src="<?= BASE_URL ?>assets/images/logo-light.png" 
                     alt="The Malkia Initiative Logo" 
                     class="brand-logo-img logo-light" 
                     loading="eager">

                <!-- Dark Mode Logo -->
                <img src="<?= BASE_URL ?>assets/images/logo-dark.png" 
                     alt="The Malkia Initiative Logo" 
                     class="brand-logo-img logo-dark" 
                     loading="eager">
            </a>
            <!-- Sidebar Close Button -->
            <button class="btn-sidebar-close" onclick="toggleNavDrawer(false)" aria-label="Close Navigation Menu">✕</button>
        </div>

        <nav class="sidebar-nav" aria-label="Main Navigation">
            <a href="<?= BASE_URL ?>" class="<?= ($current_page === 'index' && !$is_in_programs) ? 'active' : '' ?>"><span>Home</span></a>

            <!-- About Us Dropdown -->
            <details class="sidebar-nav-details" <?= $is_about_active ? 'open' : '' ?>>
                <summary class="<?= $is_about_active ? 'parent-active' : '' ?>">
                    <span>About Us</span>
                    <i class="ph-bold ph-caret-right nav-arrow-icon"></i>
                </summary>
                <div class="nested-nav-group">
                    <a href="<?= BASE_URL ?>why-our-work-matters" class="<?= ($current_page === 'why-our-work-matters') ? 'active-child' : '' ?>">Why Our Work Matters</a>
                    <a href="<?= BASE_URL ?>our-team" class="<?= ($current_page === 'our-team') ? 'active-child' : '' ?>">Our Team</a>
                    <a href="<?= BASE_URL ?>strategic-plan" class="<?= ($current_page === 'strategic-plan') ? 'active-child' : '' ?>">Strategic Plan</a>
                </div>
            </details>

            <!-- Programs Master Dropdown (3 Core Pillars Only) -->
            <details class="sidebar-nav-details" <?= $is_in_programs ? 'open' : '' ?>>
                <summary class="<?= $is_in_programs ? 'parent-active' : '' ?>">
                    <span>Programs</span>
                    <i class="ph-bold ph-caret-right nav-arrow-icon"></i>
                </summary>
                <div class="nested-nav-group">
                    <a href="<?= BASE_URL ?>programs/education-for-girls" class="<?= $is_edu_active ? 'active-child' : '' ?>">Education for Girls</a>
                    <a href="<?= BASE_URL ?>programs/bodily-autonomy-rights" class="<?= $is_autonomy_active ? 'active-child' : '' ?>">Bodily Autonomy &amp; Rights</a>
                    <a href="<?= BASE_URL ?>programs/economic-resilience" class="<?= $is_economic_active ? 'active-child' : '' ?>">Economic Resilience</a>
                </div>
            </details>

            <a href="<?= BASE_URL ?>publications" class="<?= ($current_page === 'publications') ? 'active' : '' ?>"><span>Publications</span></a>
            <a href="<?= BASE_URL ?>engagement" class="<?= ($current_page === 'engagement') ? 'active' : '' ?>"><span>Engagement Paths</span></a>
            <a href="<?= BASE_URL ?>contacts" class="<?= ($current_page === 'contacts') ? 'active' : '' ?>"><span>Contacts</span></a>
        </nav>

        <!-- Theme Selector Box -->
        <div class="theme-switch-box">
            <button class="btn-theme-toggle" id="btnThemeLight" onclick="setManualTheme('light')" aria-label="Light Mode">
                <i class="ph-bold ph-sun"></i> Light
            </button>
            <button class="btn-theme-toggle" id="btnThemeDark" onclick="setManualTheme('dark')" aria-label="Dark Mode">
                <i class="ph-bold ph-moon"></i> Dark
            </button>
        </div>
    </div>

    <div class="sidebar-footer">
        <div class="sidebar-socials">
            <a href="https://linkedin.com/company/malkiainitiative" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="ph-bold ph-linkedin-logo"></i></a>
            <a href="https://wa.me/254717864726" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="ph-bold ph-whatsapp-logo"></i></a>
            <a href="tel:+254717864726" aria-label="Phone"><i class="ph-bold ph-phone"></i></a>
            <a href="mailto:info@malkiainitiative.org" aria-label="Mail"><i class="ph-bold ph-envelope-simple-open"></i></a>
            <a href="https://maps.app.goo.gl/3y8ppcyS5hgsWhC28" aria-label="Map" target="_blank"><i class="ph-bold ph-map-pin"></i></a>
        </div>
        <div class="sidebar-legal">
            <a href="<?= BASE_URL ?>safeguarding-policy">Safe Guarding Policy</a>
            <a href="<?= BASE_URL ?>privacy-policy">Privacy Policy</a>
            <span>&copy; 2026 Malkia Initiative Foundation</span>
        </div>
    </div>
</aside>