<?php
require_once '../../partials/head.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Economic Resilience | The Malkia Initiative</title>
    <meta name="description" content="Unlocking financial agency for teenage mothers and pastoralist youth through certified TVET vocational enterprise and community resource hubs in Kajiado.">
    <link rel="canonical" href="https://malkiainitiative.org/programs/economic-resilience">

    <!-- Structured Data: Program Pillar Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      "name": "Economic Resilience Program Pillar",
      "serviceType": "Vocational Technical Skills & Enterprise Toolkits",
      "provider": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "url": "https://malkiainitiative.org"
      },
      "areaServed": "Kajiado County, Kenya",
      "description": "Certified TVET training, artisanal tailoring and beading cooperatives, infant care support, and community technology hubs."
    }
    </script>
</head>
<body>

    <div class="corporate-layout" id="corporateLayout">

        <!-- 1. STICKY 20% ASIDE NAVIGATION -->
        <?php include_once '../../partials/sidebar.php'; ?>

        <!-- 2. 80% MAIN SECTION -->
        <main class="corporate-main" id="corporateMain">

            <!-- Mobile Top Bar Trigger -->
            <div class="mobile-only mobile-top-bar" style="margin-bottom: 24px;">
                <span class="ar-badge-pill">
                    <img src="<?= BASE_URL ?>assets/images/identity.png" class="identity" alt="Identity">
                    Resourcing For Her
                </span>
            </div>

            <!-- PROGRAM INNER HERO STRIP -->
            <header class="corporate-header-strip program-header-strip">
                <div class="program-breadcrumb">
                    <a href="<?= BASE_URL ?>">Programs</a>
                    <i class="ph-bold ph-caret-right"></i>
                    <span>Pillar 03</span>
                </div>
                <h1 class="hero-title">Economic Resilience</h1>
                <p class="program-lead-text">
                    Nurturing market-driven vocational trades, artisan enterprise, and micro-savings clusters that secure financial self-determination. We de-stigmatize adolescent motherhood and out-of-school vulnerabilities by converting localized spaces into productive community engines.
                </p>
            </header>

            <!-- MAIN BENTO GRID ARCHITECTURE (2 Columns side-by-side, 3 Rows Height) -->
            <section class="corporate-bento">

                <!-- Project 1: SheRISE (Col-6, Row-3) -->
                <article class="bento-card col-6 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/04-she-rise.webp" alt="SheRISE Vocational Cohort" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge goldy">Maternal Reintegration</span>
                        <h3>SheRISE Vocational Agency</h3>
                        <p>
                            Restoring academic and vocational trajectories for adolescent mothers by coupling certified TVET trades with on-site infant nursing and childcare stations.
                        </p>
                        <a href="<?= BASE_URL ?>programs/economic-resilience/she-rise" class="btn-card-readmore">
                            <span>Explore SheRISE</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </a>
                    </div>
                </article>

                <!-- Project 2: CDSC4YRB (Col-6, Row-3) -->
                <article class="bento-card col-6 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/07-youth-resilience.webp" alt="CDSC4YRB Youth Enterprise Hub" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge goldy">Enterprise &amp; Belonging</span>
                        <h3>CDSC4YRB Youth Hub</h3>
                        <p>
                            Operating the Malkia Olgulului Youth Resource Center across tailoring, pottery, digital ICT skills, and heritage Maasai bead craft enterprise.
                        </p>
                        <a href="<?= BASE_URL ?>programs/economic-resilience/cdsc4yrb" class="btn-card-readmore">
                            <span>Explore CDSC4YRB</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </a>
                    </div>
                </article>

            </section>
        </main>
    </div>

    <!-- GLOBAL ASIDES, MODALS & CONTROLS -->
    <?php include_once '../../partials/telemetry-drawer.php'; ?>
    <div class="corporate-backdrop" id="corporateBackdrop" onclick="closeAllDrawers()"></div>

    <button class="fab-telemetry-trigger" id="fabTelemetryTrigger" onclick="toggleTelemetry()" aria-label="Open Supporting Telemetry">
        <i class="ph-bold ph-chart-line-up"></i>
    </button>

    <button class="btn-cta secondary btn-mobile-menu mobile-only" onclick="toggleNavDrawer()">
        <i class="ph-bold ph-list"></i> Menu
    </button>

    <?php include_once '../../partials/pledge-modal.php'; ?>

    <script src="<?= BASE_URL ?>assets/js/app.js"></script>
</body>
</html>