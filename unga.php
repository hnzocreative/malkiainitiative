<!DOCTYPE html>
<html lang="en">
<head>
    <title>UNGA 2026 • A Crown For Every African Girl | The Malkia Initiative</title>
    <meta name="description" content="Mobilizing catalytic partnerships at UNGA 2026. Empowering 32,000 pastoralist girls across rural Kajiado County through education, bodily autonomy, and economic resilience.">
    <link rel="canonical" href="https://malkiainitiative.org/unga">
    
    <?php include_once 'partials/head.php'; ?>

    <!-- Highcharts Standalone Scripts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>

    <!-- Page Specific Stylesheet -->
    <link rel="stylesheet" href="<?= BASE_URL ?>assets/css/pages/unga.css">

    <!-- Structured Data: UNGA Event Campaign -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Campaign",
      "name": "The Malkia Initiative UNGA 2026 High-Impact Briefing",
      "funder": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "url": "https://malkiainitiative.org"
      },
      "description": "Catalytic 1,000-Day resource mobilization brief presented at the United Nations General Assembly.",
      "areaServed": "Kajiado County, Kenya"
    }
    </script>
</head>
<body>

    <div class="corporate-layout" id="corporateLayout">

        <!-- 1. Sticky Navigation Aside -->
        <?php include_once 'partials/sidebar.php'; ?>

        <!-- 2. Main Executive Surface -->
        <main class="corporate-main" id="corporateMain">

            <!-- Mobile Top Bar Trigger -->
            <div class="mobile-only mobile-top-bar" style="margin-bottom: 24px;">
                <span class="ar-badge-pill">
                    <img src="<?= BASE_URL ?>assets/images/identity.png" class="identity" alt="Identity">
                    UNGA 2026 Delegation
                </span>
            </div>

            <!-- SECTION 1: HERO STRIP & STAT MONTAGE -->
            <header class="corporate-header-strip unga-hero-strip">
                <span class="unga-motto-pill">Agency • Voice • Choice</span>
                <h1 class="hero-title">A Crown For Every African Girl</h1>
                <p class="unga-lead-text">
                    In rural pastoralist Kajiado, systemic and cultural barriers leave adolescent girls disenfranchised. The Malkia Initiative operates directly on the frontline to equip young women with the agency, voice, and choice required to lead their communities.
                </p>

                <!-- 3-Card Floating Showcase (Triggers Telemetry Drawer) -->
                <div class="unga-montage-container">
                    <!-- Card 1: Est. 2015 -->
                    <div class="unga-montage-card card-left" onclick="toggleTelemetry(true)">
                        <img src="<?= BASE_URL ?>assets/images/hero/montage-left.webp" alt="Malkia Foundation Roots" class="unga-montage-img">
                        <div class="unga-card-overlay">
                            <span class="card-stat-badge">Est. 2015</span>
                            <h4>Our Roots</h4>
                            <span class="card-cta-label">The Inspiration <i class="ph-bold ph-chart-line-up"></i></span>
                        </div>
                    </div>

                    <!-- Card 2: 26,009 Girls -->
                    <div class="unga-montage-card card-center" onclick="toggleTelemetry(true)">
                        <img src="<?= BASE_URL ?>assets/images/hero/montage-center.webp" alt="Malkia Active Scholars" class="unga-montage-img">
                        <div class="unga-card-overlay">
                            <span class="card-stat-badge highlight">26,009 Girls</span>
                            <h4>Impact To Date</h4>
                            <span class="card-cta-label">Verified Numbers <i class="ph-bold ph-chart-line-up"></i></span>
                        </div>
                    </div>

                    <!-- Card 3: Founder's Voice -->
                    <div class="unga-montage-card card-right" onclick="toggleTelemetry(true)">
                        <img src="<?= BASE_URL ?>assets/images/team/jedidah-lemaron.webp" alt="Jedidah Lemaron" class="unga-montage-img">
                        <div class="unga-card-overlay">
                            <span class="card-stat-badge">Executive View</span>
                            <h4>Founder's Voice</h4>
                            <span class="card-cta-label">Why We Do It <i class="ph-bold ph-chart-line-up"></i></span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- SECTION 2: WHO WE ARE & WHAT WE DO -->
            <section class="corporate-bento">

                <!-- Primary Identity Card with Noise & Negative Margin Lift -->
                <article class="bento-card col-12 unga-who-card">
                    <span class="tag">Frontline Reality</span>
                    <h2>Who We Are</h2>
                    <p class="unga-narrative">
                        The Malkia Initiative is a youth-led, women-led community organization. In rural pastoralist Kajiado, adolescent girls as young as 9 endure female genital mutilation, driving a 50% primary dropout rate and putting Kajiado third nationally in teenage pregnancy (22%). We counter this systemic cycle through native community-led interventions that dismantle barriers to quality education and bodily autonomy.
                    </p>

                    <!-- The What: 3 Taller Scrim Cards with Auto-Scrolling Stat Carousels -->
                    <div class="unga-what-grid">
                        
                        <!-- Card A: Our Focus -->
                        <div class="what-card focus-card">
                            <img src="<?= BASE_URL ?>assets/images/unga/focus.webp" alt="Our Focus" class="what-card-bg">
                            <div class="what-card-scrim"></div>
                            <div class="what-card-body">
                                <span class="calc-badge goldy">Strategic Direction</span>
                                <h3>Our Focus</h3>
                                <p>Adolescent and youth-centered programming engineered across three critical pathways.</p>
                                
                                <!-- Stat Carousel A -->
                                <div class="stat-carousel-wrap" data-carousel="focus">
                                    <div class="stat-carousel-track">
                                        <div class="stat-slide active">
                                            <i class="ph-bold ph-book-open"></i>
                                            <div class="stat-meta">
                                                <strong>Education</strong>
                                                <span>Foundational Literacy</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-heart"></i>
                                            <div class="stat-meta">
                                                <strong>AYSRHR</strong>
                                                <span>Bodily Autonomy</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-scales"></i>
                                            <div class="stat-meta">
                                                <strong>Gender Justice</strong>
                                                <span>Youth Leadership</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-carousel-nav">
                                        <button type="button" onclick="manualRotateSlide('focus', -1)">←</button>
                                        <button type="button" onclick="manualRotateSlide('focus', 1)">→</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card B: Key Achievements -->
                        <div class="what-card achievements-card">
                            <img src="<?= BASE_URL ?>assets/images/unga/achievements.webp" alt="Key Achievements" class="what-card-bg">
                            <div class="what-card-scrim"></div>
                            <div class="what-card-body">
                                <span class="calc-badge goldy">Documented Evidence</span>
                                <h3>Key Achievements</h3>
                                <p>Field-verified milestones realized directly across Maasai pastoralist communities in Kenya.</p>
                                
                                <!-- Stat Carousel B -->
                                <div class="stat-carousel-wrap" data-carousel="achieve">
                                    <div class="stat-carousel-track">
                                        <div class="stat-slide active">
                                            <i class="ph-bold ph-users-three"></i>
                                            <div class="stat-meta">
                                                <strong>23,467+</strong>
                                                <span>Girls Empowered</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-shield-check"></i>
                                            <div class="stat-meta">
                                                <strong>78%</strong>
                                                <span>Protection Rate</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-graduation-cap"></i>
                                            <div class="stat-meta">
                                                <strong>57</strong>
                                                <span>Scholarships Issued</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-carousel-nav">
                                        <button type="button" onclick="manualRotateSlide('achieve', -1)">←</button>
                                        <button type="button" onclick="manualRotateSlide('achieve', 1)">→</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Card C: Future Plans -->
                        <div class="what-card future-card">
                            <img src="<?= BASE_URL ?>assets/images/unga/plans.webp" alt="Future Plans" class="what-card-bg">
                            <div class="what-card-scrim"></div>
                            <div class="what-card-body">
                                <span class="calc-badge goldy">2025–2029 Horizon</span>
                                <h3>Future Plans</h3>
                                <p>Scaling grassroots evidence and capital to achieve county-wide institutional transformation.</p>
                                
                                <!-- Stat Carousel C -->
                                <div class="stat-carousel-wrap" data-carousel="future">
                                    <div class="stat-carousel-track">
                                        <div class="stat-slide active">
                                            <i class="ph-bold ph-sparkle"></i>
                                            <div class="stat-meta">
                                                <strong>Agency</strong>
                                                <span>Scaling Safe Networks</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-handshake"></i>
                                            <div class="stat-meta">
                                                <strong>Alliances</strong>
                                                <span>Grassroots Movement</span>
                                            </div>
                                        </div>
                                        <div class="stat-slide">
                                            <i class="ph-bold ph-database"></i>
                                            <div class="stat-meta">
                                                <strong>KM Hub</strong>
                                                <span>Open Field Evidence</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-carousel-nav">
                                        <button type="button" onclick="manualRotateSlide('future', -1)">←</button>
                                        <button type="button" onclick="manualRotateSlide('future', 1)">→</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>

                <!-- Interactive Impact Journey Highchart Accordion -->
                <article class="bento-card col-12 unga-journey-card">
                    <details class="journey-details" open>
                        <summary class="journey-summary">
                            <div class="summary-left">
                                <span class="tag">Empirical Trajectory</span>
                                <h2>Our Journey: Longitudinal Reach &amp; Capital Ask (2016–2029)</h2>
                            </div>
                            <div class="summary-right">
                                <span class="toggle-indicator"><i class="ph-bold ph-caret-down"></i></span>
                            </div>
                        </summary>
                        <div class="journey-content">
                            <p class="chart-caption">
                                Tracking verified programmatic reach against the multi-year Strategic Plan financing roadmap ($2.0M target).
                            </p>
                            
                            <!-- Highcharts Rendering Container -->
                            <div id="ungaJourneyChart" class="unga-chart-canvas"></div>

                            <div class="journey-cta-bar">
                                <span>Verified by independent ISA 700 audit standards (81.4% direct programmatic spend).</span>
                                <a href="<?= BASE_URL ?>annual-reports/2025/" class="btn-cta secondary">
                                    <span>Explore Interactive 2025 Annual Report</span>
                                    <i class="ph-bold ph-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </details>
                </article>

                <!-- SECTION 3: THE ASK / 1,000-DAY GOAL -->
                <article class="bento-card col-12 unga-ask-card">
                    <div class="ask-header-split">
                        <div>
                            <span class="calc-badge">Capital Campaign</span>
                            <h2 class="ask-title">The 1,000-Day Goal</h2>
                            <p class="ask-lead">
                                An intentional drive to enhance the agency of <strong>12,000 more girls</strong> through a catalytic investment need of <strong>$900,000 USD</strong>.
                            </p>
                        </div>
                        <div class="ask-unit-rate">
                            <span class="rate-val">$75</span>
                            <span class="rate-lbl">/ girl / year</span>
                        </div>
                    </div>

                    <!-- Interactive Sponsorship Tier Simulator -->
                    <div class="unga-calculator-frame">
                        <div class="tier-chips-selector">
                            <button type="button" class="tier-chip" data-girls="1" data-amount="75" onclick="selectUngaTier(this)">1 Girl ($75)</button>
                            <button type="button" class="tier-chip" data-girls="10" data-amount="750" onclick="selectUngaTier(this)">10 Girls ($750)</button>
                            <button type="button" class="tier-chip active" data-girls="20" data-amount="1500" onclick="selectUngaTier(this)">20 Girls ($1,500)</button>
                            <button type="button" class="tier-chip" data-girls="50" data-amount="3750" onclick="selectUngaTier(this)">50 Girls ($3,750)</button>
                            <button type="button" class="tier-chip" data-girls="100" data-amount="7500" onclick="selectUngaTier(this)">100 Queens ($7,500)</button>
                        </div>

                        <div class="simulator-display-grid">
                            <div class="display-metric-col">
                                <span class="disp-label">Selected Commitment</span>
                                <div class="disp-amount" id="dispUngaAmount">$1,500 USD</div>
                                <div class="disp-girls" id="dispUngaGirls">Sponsors 20 Adolescent Queens</div>
                                <p class="disp-impact" id="dispUngaImpact">
                                    Underwrites 1 full rural classroom with safe boarding sanctuary, year-round menstrual kits, and remedial learning tools.
                                </p>
                            </div>
                            <div class="display-visual-col">
                                <span class="disp-label">Direct Beneficiary Representation</span>
                                <div class="icon-avatar-grid" id="ungaAvatarGrid">
                                    <!-- Populated dynamically by JS -->
                                </div>
                                <div class="goal-progress-wrap">
                                    <div class="goal-progress-meta">
                                        <span>Contribution to 1,000-Day Target</span>
                                        <strong id="dispGoalPct">0.17%</strong>
                                    </div>
                                    <div class="progress-bar-shell">
                                        <div class="progress-bar-fill" id="dispGoalBar" style="width: 2%;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="simulator-action-row">
                            <button class="btn-cta primary btn-launch-unga-pledge" onclick="openPledgeModal()">
                                <i class="ph-bold ph-heart"></i>
                                <span id="btnPledgeLabel">Underwrite 20 Girls ($1,500)</span>
                            </button>
                            <span class="tax-guarantee">
                                <i class="ph-bold ph-shield-check"></i>
                                Tax-deductible institutional allocations via Omprakash Foundation 501(c)(3).
                            </span>
                        </div>
                    </div>

                    <!-- How Can You Help Track -->
                    <div class="how-help-section">
                        <h3 class="section-sub-title">How Can You Help?</h3>
                        <div class="help-grid">
                            <div class="help-card" onclick="openUngaDialog('dialogChampion')">
                                <div class="help-icon"><i class="ph-bold ph-megaphone"></i></div>
                                <h4>Champion</h4>
                                <p>Amplify the agency and voice of girls within your institutional and diplomatic networks.</p>
                                <span class="help-link">Action Protocol <i class="ph-bold ph-arrow-right"></i></span>
                            </div>
                            <div class="help-card" onclick="openUngaDialog('dialogInvite')">
                                <div class="help-icon"><i class="ph-bold ph-users"></i></div>
                                <h4>Invite</h4>
                                <p>Invite colleagues and foundations to learn, collaborate, and partner with Malkia.</p>
                                <span class="help-link">Meeting Request <i class="ph-bold ph-arrow-right"></i></span>
                            </div>
                            <div class="help-card" onclick="openUngaDialog('dialogInvest')">
                                <div class="help-icon"><i class="ph-bold ph-bank"></i></div>
                                <h4>Invest</h4>
                                <p>Deploy catalytic capital directly into verified education and protection infrastructure.</p>
                                <span class="help-link">Capital Pathways <i class="ph-bold ph-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Global Institutional Partners Array -->
                <?php include_once 'partials/partners.php'; ?>

            </section>
        </main>
    </div>

    <!-- Telemetry Drawer & Modal Controls -->
    <?php include_once 'partials/telemetry-drawer.php'; ?>
    <div class="corporate-backdrop" id="corporateBackdrop" onclick="closeAllDrawers()"></div>

    <button class="fab-telemetry-trigger" id="fabTelemetryTrigger" onclick="toggleTelemetry()" aria-label="Open Supporting Telemetry">
        <i class="ph-bold ph-chart-line-up"></i>
    </button>

    <button class="btn-cta secondary btn-mobile-menu mobile-only" onclick="toggleNavDrawer()">
        <i class="ph-bold ph-list"></i> Menu
    </button>

    <!-- Global Donation Modal -->
    <?php include_once 'partials/pledge-modal.php'; ?>

    <!-- Styled Action Dialog Modals -->
    <?php include_once 'partials/dialogs-unga.php'; ?>

    <!-- Global Scripts Engine -->
    <script src="<?= BASE_URL ?>assets/js/app.js"></script>
    <script src="<?= BASE_URL ?>assets/js/pages/unga.js"></script>
</body>
</html>