<?php
require_once '../../partials/head.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Education for Girls | The Malkia Initiative</title>
    <meta name="description" content="Sustaining pastoralist girls in learning through foundational literacy, remedial pedagogy, and secondary retention sanctuary in Kajiado County.">
    <link rel="canonical" href="https://malkiainitiative.org/programs/education-for-girls">

    <!-- Structured Data: Program Pillar Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Education for Girls Program Pillar",
      "serviceType": "Foundational Literacy & Educational Continuity",
      "provider": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "url": "https://malkiainitiative.org"
      },
      "areaServed": "Kajiado County, Kenya",
      "description": "Foundational learning interventions, safe primary boarding wings, and academic retention frameworks eliminating early school dropout."
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
                    Education for Girls
                </span>
            </div>

            <!-- PROGRAM INNER HERO STRIP -->
            <header class="corporate-header-strip program-header-strip">
                <div class="program-breadcrumb">
                    <a href="<?= BASE_URL ?>">Programs</a>
                    <i class="ph-bold ph-caret-right"></i>
                    <span>Pillar 01</span>
                </div>
                <h1 class="hero-title">Education for Girls</h1>
                <p class="program-lead-text">
                    Reclaiming classroom persistence through foundational literacy, structured school retention, and safe institutional boarding pipelines. We de-risk education in rural pastoralist corridors so girls build the mastery and confidence required to shape their futures.
                </p>
            </header>

            <!-- MAIN BENTO GRID ARCHITECTURE (2 Columns side-by-side, 3 Rows Height) -->
            <section class="corporate-bento">

                <!-- Project 1: KUZA Foundational Literacy (Col-6, Row-3) -->
                <article class="bento-card col-6 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/01-KUZA.webp" alt="KUZA Literacy Classroom" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge">Foundational Literacy</span>
                        <h3>KUZA Remedial Learning</h3>
                        <p>
                            Addressing foundational literacy and numeracy blockages for learners in Grades 2–4 across 7 rural primary partner schools using level-based teaching methods.
                        </p>
                        <a href="<?= BASE_URL ?>programs/education-for-girls/kuza" class="btn-card-readmore">
                            <span>Explore KUZA Program</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </a>
                    </div>
                </article>

                <!-- Project 2: For Her Infrastructure & Dignity (Col-6, Row-3) -->
                <article class="bento-card col-6 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/06-for-her.webp" alt="For Her Safe Boarding Sanctuary" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge">Safe Sanctuary</span>
                        <h3>For Her Infrastructure &amp; Dignity</h3>
                        <p>
                            Eliminating 15-kilometer hazardous school commutes through safe boarding dormitory modernizations, solar clean water, and year-round pad banks.
                        </p>
                        <a href="<?= BASE_URL ?>programs/education-for-girls/for-her" class="btn-card-readmore">
                            <span>Explore For Her Track</span>
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