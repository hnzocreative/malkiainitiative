<?php
require_once '../../partials/head.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bodily Autonomy &amp; Rights | The Malkia Initiative</title>
    <meta name="description" content="Ending female genital mutilation, adolescent pregnancy, and forced betrothal through girl-led assemblies, survivor networks, and legal advocacy in Kajiado.">
    <link rel="canonical" href="https://malkiainitiative.org/programs/bodily-autonomy-rights">

    <!-- Structured Data: Program Pillar Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": "Bodily Autonomy & Rights Pillar",
      "serviceType": "Protection from Harmful Practices & Youth SRHR",
      "provider": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "url": "https://malkiainitiative.org"
      },
      "areaServed": "Kajiado County, Kenya",
      "description": "In-school Crown Clubs, survivor-led cross-border FGM interception, secondary leadership development, and youth SRHR advocacy."
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
                    Bodily Autonomy &amp; Rights
                </span>
            </div>

            <!-- PROGRAM INNER HERO STRIP -->
            <header class="corporate-header-strip program-header-strip">
                <div class="program-breadcrumb">
                    <a href="<?= BASE_URL ?>">Programs</a>
                    <i class="ph-bold ph-caret-right"></i>
                    <span>Pillar 02</span>
                </div>
                <h1 class="hero-title">Bodily Autonomy &amp; Rights</h1>
                <p class="program-lead-text">
                    Eliminating early marriage, cross-border FGM, and reproductive health taboos through girl-led assemblies, survivor networks, and community elder mediation. We build frontline peer agency so adolescent girls exercise voice, choice, and uncompromised authority over their bodies.
                </p>
            </header>

            <!-- MAIN BENTO GRID ARCHITECTURE -->
            <section class="corporate-bento">

                <!-- Project 1: Voices Uncut (Col-8, Row-3) -->
                <article class="bento-card col-8 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/03-voices-uncut.webp" alt="Voices Uncut Anti-FGM Safe Spaces" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge">Anti-FGM &amp; Protection</span>
                        <h3>Voices Uncut</h3>
                        <p>
                            Survivor-led community safe spaces, in-school Crown Club alert networks, and administrative legal accompaniment halting cross-border cut migration routes before harm occurs.
                        </p>
                        <a href="<?= BASE_URL ?>programs/bodily-autonomy-rights/voices-uncut" class="btn-card-readmore">
                            <span>Explore Voices Uncut</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </a>
                    </div>
                </article>

                <!-- Project 2: Sauti Ya Dada (Col-4, Row-3) -->
                <article class="bento-card col-4 pillar-bento-card row-span-3">
                    <img src="<?= BASE_URL ?>assets/images/projects/02-sauti-ya-dada.webp" alt="Sauti Ya Dada Leadership Circle" class="pillar-bento-bg" loading="eager">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge">Secondary Leadership</span>
                        <h3>Sauti Ya Dada</h3>
                        <p>
                            Securing the vulnerable Form 1 and Form 2 secondary school transition cliff with critical thinking, debate skills, and pastoralist sister circles.
                        </p>
                        <a href="<?= BASE_URL ?>programs/bodily-autonomy-rights/sauti-ya-dada" class="btn-card-readmore">
                            <span>Explore Sauti Ya Dada</span>
                            <i class="ph-bold ph-arrow-up-right"></i>
                        </a>
                    </div>
                </article>

                <!-- Project 3: Break Free (Col-12, Row-2) -->
                <article class="bento-card col-12 pillar-bento-card row-span-2">
                    <img src="<?= BASE_URL ?>assets/images/projects/05-break-free.webp" alt="Break Free SRHR Advocacy Forum" class="pillar-bento-bg" loading="lazy">
                    <div class="pillar-bento-scrim"></div>
                    <div class="pillar-bento-content">
                        <span class="calc-badge">SRHR Advocacy</span>
                        <h3>Break Free Strategy</h3>
                        <p>
                            Youth-led bodily autonomy education, teenage pregnancy reduction pipelines, and county-level legislative advocacy linking schools to adolescent-friendly clinics across 7 wards.
                        </p>
                        <a href="<?= BASE_URL ?>programs/bodily-autonomy-rights/break-free" class="btn-card-readmore">
                            <span>Explore Break Free</span>
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