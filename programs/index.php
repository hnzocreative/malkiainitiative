<?php 
require_once '../partials/head.php'; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Our Programs | The Malkia Initiative</title>
    <meta name="description" content="Explore our three programmatic pillars: Education for Girls, Bodily Autonomy & Gender Rights, and Economic Resilience in Kajiado County.">
    <link rel="canonical" href="https://malkiainitiative.org/programs/">
</head>
<body>
    <div class="corporate-layout" id="corporateLayout">
        <?php include_once '../partials/sidebar.php'; ?>
        <main class="corporate-main" id="corporateMain">
            <header class="corporate-header-strip">
                <span class="calc-badge">Our Pillars</span>
                <h1 class="hero-title">Programmatic Architecture</h1>
                <p>We work at the intersection of classroom access, bodily autonomy, and grassroots economic independence.</p>
            </header>
            <section class="corporate-bento">
                <article class="bento-card col-4 program-summary-card">
                    <span class="calc-badge">Pillar 01</span>
                    <img src="<?= BASE_URL ?>assets/images/programs/education.webp" alt="Education">
                    <h3>Education for Girls</h3>
                    <p>Foundational literacy (KUZA), remedial pedagogy, and secondary retention pipelines keeping pastoralist girls in learning.</p>
                    <a href="<?= BASE_URL ?>programs/education-for-girls" class="btn-cta secondary">Explore Pillar</a>
                </article>
                <article class="bento-card col-4 program-summary-card">
                    <span class="calc-badge">Pillar 02</span>
                    <img src="<?= BASE_URL ?>assets/images/programs/bodily.webp" alt="Education">
                    <h3>Bodily Autonomy &amp; Rights</h3>
                    <p>Survivor-led FGM interdiction (Voices Uncut), youth SRHR advocacy, and secondary school self-efficacy (Sauti Ya Dada).</p>
                    <a href="<?= BASE_URL ?>programs/bodily-autonomy-rights" class="btn-cta secondary">Explore Pillar</a>
                </article>
                <article class="bento-card col-4 program-summary-card">
                    <span class="calc-badge">Pillar 03</span>
                    <img src="<?= BASE_URL ?>assets/images/programs/economic.webp" alt="Education">
                    <h3>Economic Resilience</h3>
                    <p>Accredited TVET trades, infant care stations for learning mothers, and market cooperatives at Olgulului Youth Hub.</p>
                    <a href="<?= BASE_URL ?>programs/economic-resilience" class="btn-cta secondary">Explore Pillar</a>
                </article>
            </section>
        </main>
    </div>
    <?php include_once '../partials/telemetry-drawer.php'; ?>
    <script src="<?= BASE_URL ?>assets/js/app.js"></script>
</body>
</html>