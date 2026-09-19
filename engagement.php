<!DOCTYPE html>
<html lang="en">
<head>
    <title>Engagement Paths | Partner With The Malkia Initiative</title>
    <meta name="description" content="Discover four distinct pathways to support pastoralist girl education in Kajiado: individual sponsorship, institutional partnerships, volunteer fellowships, and corporate CSR.">
    <link rel="canonical" href="https://malkiainitiative.org/engagement">
    
    <?php include_once 'partials/head.php'; ?>

    <!-- Structured Data: Engagement & Donation Pathways -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "The Malkia Initiative Engagement & Partnership Pathways",
      "description": "Direct involvement pathways for individual sponsors, institutional donors, corporate partners, and field fellows supporting rural girls in Kenya.",
      "publisher": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "url": "https://malkiainitiative.org"
      }
    }
    </script>
</head>
<body>

    <div class="corporate-layout" id="corporateLayout">

        <!-- 1. STICKY 20% ASIDE NAVIGATION -->
        <?php include_once 'partials/sidebar.php'; ?>

        <!-- 2. 80% MAIN SECTION -->
        <main class="corporate-main" id="corporateMain">

            <!-- Mobile Top Bar Trigger -->
            <div class="mobile-only mobile-top-bar" style="margin-bottom: 24px;">
                <span class="ar-badge-pill">
                    <img src="<?= BASE_URL ?>assets/images/identity.png" class="identity" alt="Identity">
                    Malkia Initiative
                </span>
            </div>

            <!-- ENGAGEMENT INNER HERO STRIP -->
            <header class="corporate-header-strip engage-header-strip">
                <span class="engage-badge">Collaboration Architecture</span>
                <h1 class="hero-title">Ways to Partner With Us</h1>
                <p class="engage-lead-text">
                    Transforming the life of a pastoralist girl requires an active ecosystem. Whether you are an individual sponsor funding a school journey, a foundation co-designing regional infrastructure, or a professional lending skills on the frontline, there is an established pathway for you.
                </p>
            </header>

            <!-- MAIN BENTO GRID ARCHITECTURE -->
            <section class="corporate-bento">

                <!-- 1. Individual Sponsorship: The 1,000-Day Pipeline (Col-12) -->
                <article class="bento-card col-12 individual-sponsor-card">
                    <div class="sponsor-split">
                        <div class="sponsor-copy">
                            <span class="tag">Direct Beneficiary Track</span>
                            <h2>Sponsor an Adolescent Queen</h2>
                            <p>
                                Individual giving at Malkia is governed by unit economics under our validated 1,000-Day Framework. A single gift of $75 (approx. KES 9,750) safeguards one girl across an entire academic year—covering emergency boarding, dignity pad bank reserves, foundational learning kits, and mentor advocacy.
                            </p>
                            <div class="sponsor-feature-grid">
                                <div class="feat-box">
                                    <i class="ph-bold ph-shield-check"></i>
                                    <div>
                                        <strong>100% Direct Allocation</strong>
                                        <span>Allocated straight to frontline school retention costs.</span>
                                    </div>
                                </div>
                                <div class="feat-box">
                                    <i class="ph-bold ph-newspaper-clipping"></i>
                                    <div>
                                        <strong>Biannual Progress Updates</strong>
                                        <span>Receive verified academic progress and health tracking reports.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sponsor-actions">
                                <button class="btn-cta primary" onclick="openPledgeModal()">
                                    <i class="ph-bold ph-heart"></i>
                                    <span>Sponsor a Girl ($75/yr)</span>
                                </button>
                                <a href="<?= BASE_URL ?>#pillars" class="btn-cta secondary">
                                    <span>Review 1,000-Day Model</span>
                                    <i class="ph-bold ph-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="sponsor-visual">
                            <div class="rate-card-frame">
                                <span class="rate-tag">Unit Economic Metric</span>
                                <div class="rate-display">
                                    <span class="currency">$</span>
                                    <span class="figure">75</span>
                                    <span class="term">/ girl / year</span>
                                </div>
                                <div class="rate-kes-display">~KES 9,750</div>
                                <hr class="rate-divider">
                                <ul class="rate-checklist">
                                    <li><i class="ph-bold ph-check"></i> 12-Month Emergency Boarding Sanctuary</li>
                                    <li><i class="ph-bold ph-check"></i> Year-Round Menstrual Dignity Supplies</li>
                                    <li><i class="ph-bold ph-check"></i> KUZA Foundational Learning Toolkits</li>
                                    <li><i class="ph-bold ph-check"></i> In-School Crown Club Legal Mentorship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- 2. Institutional & Multilateral Alliances (Col-6) -->
                <article class="bento-card col-6 engage-track-card institutional">
                    <div class="track-header">
                        <span class="track-pill">Bilateral &amp; Philanthropic</span>
                        <h3>Institutional Foundations</h3>
                    </div>
                    <p class="track-desc">
                        We collaborate with bilateral donors, international trust funds, and philanthropic foundations to deploy systemic, multi-year interventions across Kajiado County.
                    </p>
                    <div class="track-deliverables">
                        <div class="deliv-item">
                            <i class="ph-bold ph-handshake"></i>
                            <div>
                                <strong>Co-Designed Grant Lines:</strong>
                                <span>Multi-year programmatic grants tailored to education, SRHR, and TVET indicators.</span>
                            </div>
                        </div>
                        <div class="deliv-item">
                            <i class="ph-bold ph-chart-donut"></i>
                            <div>
                                <strong>Rigorous Fiduciary Governance:</strong>
                                <span>ISA 700 standard independent audits and strict quarterly metric verification.</span>
                            </div>
                        </div>
                    </div>
                    <a href="<?= BASE_URL ?>contacts?interest=institutional" class="btn-cta secondary btn-track-cta">
                        <span>Initiate Institutional Dialogue</span>
                        <i class="ph-bold ph-arrow-up-right"></i>
                    </a>
                </article>

                <!-- 3. Corporate Social Responsibility (CSR) (Col-6) -->
                <article class="bento-card col-6 engage-track-card corporate">
                    <div class="track-header">
                        <span class="track-pill">Private Sector &amp; CSR</span>
                        <h3>Corporate Partnerships</h3>
                    </div>
                    <p class="track-desc">
                        Align your business's environmental and social governance (ESG) commitments with measurable community impact in rural Kenya.
                    </p>
                    <div class="track-deliverables">
                        <div class="deliv-item">
                            <i class="ph-bold ph-buildings"></i>
                            <div>
                                <strong>Infrastructure Co-Funding:</strong>
                                <span>Naming rights and sponsorship of primary boarding dormitories, solar rigs, and water boreholes.</span>
                            </div>
                        </div>
                        <div class="deliv-item">
                            <i class="ph-bold ph-package"></i>
                            <div>
                                <strong>In-Kind Supply Chains:</strong>
                                <span>Large-scale distribution of menstrual hygiene kits, sewing machines, and digital learning devices.</span>
                            </div>
                        </div>
                    </div>
                    <a href="<?= BASE_URL ?>contacts?interest=corporate" class="btn-cta secondary btn-track-cta">
                        <span>Explore Corporate Alliances</span>
                        <i class="ph-bold ph-arrow-up-right"></i>
                    </a>
                </article>

                <!-- 4. Volunteers & Professional Fellowships (Col-8) -->
                <article class="bento-card col-8 fellowship-card">
                    <span class="tag">Frontline Contribution</span>
                    <h2>Field Fellowships &amp; Volunteering</h2>
                    <p class="fellowship-intro">
                        We welcome professionals who bring specialized expertise to strengthen our frontline delivery teams in rural Kajiado Central and South.
                    </p>

                    <div class="fellowship-roles-grid">
                        <div class="f-role">
                            <i class="ph-bold ph-first-aid"></i>
                            <h4>Medical &amp; Nursing Staff</h4>
                            <p>Supporting mobile health outreaches, adolescent SRHR clinics, and health screenings in remote boarding schools.</p>
                        </div>
                        <div class="f-role">
                            <i class="ph-bold ph-chalkboard-teacher"></i>
                            <h4>Literacy &amp; STEM Coaches</h4>
                            <p>Assisting community facilitators with level-based pedagogical evaluations under the KUZA remedial learning track.</p>
                        </div>
                        <div class="f-role">
                            <i class="ph-bold ph-scales"></i>
                            <h4>Legal &amp; Safeguarding Fellows</h4>
                            <p>Assisting our response coordinators in drafting child protection documentation and supporting local chief escalations.</p>
                        </div>
                        <div class="f-role">
                            <i class="ph-bold ph-camera"></i>
                            <h4>Documentary Storytellers</h4>
                            <p>Capturing unvarnished field proofs, oral histories, and beneficiary verification narratives for international reporting.</p>
                        </div>
                    </div>
                </article>

                <!-- 5. Safeguarding Guarantee Pill Card (Col-4) -->
                <article class="bento-card col-4 safeguarding-guarantee-card">
                    <span class="tag">Compliance Filter</span>
                    <h2>Safeguarding Standard</h2>
                    <p>
                        The Malkia Initiative enforces a zero-tolerance policy against any form of exploitation, harassment, or abuse.
                    </p>

                    <div class="safeguarding-points">
                        <div class="sg-point">
                            <i class="ph-bold ph-shield"></i>
                            <span>Mandatory background checks for all field personnel and volunteers.</span>
                        </div>
                        <div class="sg-point">
                            <i class="ph-bold ph-file-text"></i>
                            <span>Binding signature on the Malkia Child Protection &amp; Data Ethics Code.</span>
                        </div>
                        <div class="sg-point">
                            <i class="ph-bold ph-lock-key"></i>
                            <span>Strict compliance with national and sub-county child safeguarding guidelines.</span>
                        </div>
                    </div>

                    <a href="<?= BASE_URL ?>safeguarding-policy" class="btn-read-policy">
                        <span>Read Full Safeguarding Policy</span>
                        <i class="ph-bold ph-arrow-up-right"></i>
                    </a>
                </article>

                <!-- 6. Strategic Alliance Strip (Col-12) -->
                <article class="bento-card col-12 engage-cta-strip">
                    <div class="engage-cta-content">
                        <h2>Ready to Structure a Partnership?</h2>
                        <p>
                            Connect directly with our executive office to schedule an introductory exploratory call or arrange a guided field briefing in Kajiado.
                        </p>
                        <div class="engage-actions">
                            <a href="<?= BASE_URL ?>contacts" class="btn-cta primary">
                                <i class="ph-bold ph-paper-plane-tilt"></i>
                                <span>Contact Leadership Team</span>
                            </a>
                            <button class="btn-cta secondary" onclick="openPledgeModal()">
                                <span>Make a Direct Pledge</span>
                                <i class="ph-bold ph-heart"></i>
                            </button>
                        </div>
                    </div>
                </article>

            </section>
        </main>
    </div>

    <!-- GLOBAL ASIDES, MODALS & CONTROLS -->
    <?php include_once 'partials/telemetry-drawer.php'; ?>
    <div class="corporate-backdrop" id="corporateBackdrop" onclick="closeAllDrawers()"></div>

    <button class="fab-telemetry-trigger" id="fabTelemetryTrigger" onclick="toggleTelemetry()" aria-label="Open Supporting Telemetry">
        <i class="ph-bold ph-chart-line-up"></i>
    </button>

    <button class="btn-cta secondary btn-mobile-menu mobile-only" onclick="toggleNavDrawer()">
        <i class="ph-bold ph-list"></i> Menu
    </button>

    <?php include_once 'partials/pledge-modal.php'; ?>

    <!-- Core Global Script -->
    <script src="<?= BASE_URL ?>assets/js/app.js"></script>
</body>
</html>