<?php
// Capture optional interest parameter passed from engagement or program paths
$selected_interest = isset($_GET['interest']) ? htmlspecialchars($_GET['interest']) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Contact &amp; Field Inquiries | The Malkia Initiative</title>
    <meta name="description" content="Get in touch with The Malkia Initiative. Reach our field headquarters in Kajiado, partner with our leadership team, or report urgent child protection matters.">
    <link rel="canonical" href="https://malkiainitiative.org/contacts">
    
    <?php include_once 'partials/head.php'; ?>

    <!-- Structured Data: ContactPage & LocalBusiness/NGO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "The Malkia Initiative Contacts & Field Headquarters",
      "description": "Frontline communication channels, physical office locations in Kajiado County, and safeguarding emergency contacts.",
      "mainEntity": {
        "@type": "NGO",
        "name": "The Malkia Initiative",
        "telephone": "+254700000000",
        "email": "info@malkiainitiative.org",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kajiado",
          "addressRegion": "Kajiado County",
          "addressCountry": "KE"
        }
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

            <!-- CONTACTS INNER HERO STRIP -->
            <header class="corporate-header-strip contact-header-strip">
                <span class="contact-badge">Frontline &amp; Institutional Liaison</span>
                <h1 class="hero-title">Direct Connection</h1>
                <p class="contact-lead-text">
                    Whether you are structuring a multi-year bilateral grant, requesting empirical research datasets, exploring corporate CSR alignment, or reporting an urgent child protection incident in Kajiado, our team responds directly.
                </p>
            </header>

            <!-- MAIN BENTO GRID ARCHITECTURE -->
            <section class="corporate-bento">

                <!-- 1. Primary Inquiries Dispatcher Form (Col-8) -->
                <article class="bento-card col-8 contact-form-card">
                    <span class="tag">Direct Communication</span>
                    <h2>Send a Message</h2>
                    <p class="form-lead">
                        Submissions are routed directly to the responsible programmatic or executive lead within 24 operational hours.
                    </p>

                    <form class="contact-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Message dispatched. A team member will respond shortly.');">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="contactName">Full Name *</label>
                                <input type="text" id="contactName" name="name" class="form-input" placeholder="e.g. Dr. Jane Doe" required>
                            </div>

                            <div class="form-group">
                                <label for="contactEmail">Official Email *</label>
                                <input type="email" id="contactEmail" name="email" class="form-input" placeholder="jane.doe@organization.org" required>
                            </div>
                        </div>

                        <div class="form-grid">
                            <div class="form-group">
                                <label for="contactOrg">Organization / Affiliation</label>
                                <input type="text" id="contactOrg" name="organization" class="form-input" placeholder="Institution, Foundation or University">
                            </div>

                            <div class="form-group">
                                <label for="contactSubject">Inquiry Category *</label>
                                <select id="contactSubject" name="subject" class="form-select" required>
                                    <option value="" disabled <?= empty($selected_interest) ? 'selected' : '' ?>>Select Pathway...</option>
                                    <option value="institutional" <?= $selected_interest === 'institutional' ? 'selected' : '' ?>>Institutional / Bilateral Grant</option>
                                    <option value="corporate" <?= $selected_interest === 'corporate' ? 'selected' : '' ?>>Corporate CSR Alliance</option>
                                    <option value="sponsorship" <?= $selected_interest === 'sponsorship' ? 'selected' : '' ?>>Individual Sponsorship Track</option>
                                    <option value="fellowship" <?= $selected_interest === 'fellowship' ? 'selected' : '' ?>>Field Volunteer &amp; Fellowship</option>
                                    <option value="research" <?= $selected_interest === 'research' ? 'selected' : '' ?>>Empirical Research &amp; Field Data</option>
                                    <option value="general">General Inquiries</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="contactMessage">Message / Brief Proposal *</label>
                            <textarea id="contactMessage" name="message" class="form-textarea" rows="5" placeholder="Outline your inquiry, proposed collaboration, or project scope..." required></textarea>
                        </div>

                        <button type="submit" class="btn-cta primary btn-send-message">
                            <i class="ph-bold ph-paper-plane-tilt"></i>
                            <span>Dispatch Inquiry</span>
                        </button>
                    </form>
                </article>

                <!-- 2. Emergency Safeguarding & Hotline (Col-4) -->
                <article class="bento-card col-4 emergency-hotline-card">
                    <div class="hotline-badge">
                        <i class="ph-bold ph-shield-warning"></i>
                        <span>Urgent Protection</span>
                    </div>
                    <h2>Safeguarding Hotline</h2>
                    <p>
                        For emergency intervention, cross-border FGM interception alerts, or immediate child betrothal reporting across Kajiado County:
                    </p>

                    <div class="hotline-action-box">
                        <span class="hotline-lbl">Emergency Frontline Dispatch</span>
                        <a href="tel:+254700000000" class="hotline-tel">+254 (0) 700 000 000</a>
                        <span class="hotline-note">24/7 Community Escalation Desk</span>
                    </div>

                    <div class="safeguard-liaison-note">
                        <i class="ph-bold ph-lock-key"></i>
                        <span>Direct coordination with sub-county Children's Officers and local administrative chiefs.</span>
                    </div>
                </article>

                <!-- 3. Field Footprint & Physical Locations (Col-8) -->
                <article class="bento-card col-8 locations-card">
                    <span class="tag">Geographic Presence</span>
                    <h2>Field Hubs &amp; Operational Offices</h2>
                    <div class="locations-grid">
                        <div class="loc-block">
                            <div class="loc-icon"><i class="ph-bold ph-map-pin"></i></div>
                            <h4>Kajiado Central Field HQ</h4>
                            <p>Direct oversight of KUZA foundational literacy schools, Crown Club assemblies, and county legislative liaison.</p>
                            <span class="loc-address">Kajiado Town, Kajiado County, Kenya</span>
                        </div>

                        <div class="loc-block">
                            <div class="loc-icon"><i class="ph-bold ph-buildings"></i></div>
                            <h4>Olgulului Youth Resource Center</h4>
                            <p>Site of our vocational technical enterprise hubs (TVET), pottery, tailoring, and boarding modernizations.</p>
                            <span class="loc-address">Olgulului, Kajiado South Sub-county</span>
                        </div>
                    </div>
                </article>

                <!-- 4. Direct Communication Channels (Col-4) -->
                <article class="bento-card col-4 channels-card">
                    <span class="tag">Direct Desks</span>
                    <h2>Direct Communication</h2>

                    <div class="channels-stack">
                        <div class="channel-unit">
                            <i class="ph-bold ph-envelope"></i>
                            <div>
                                <span class="ch-lbl">Official Inquiries</span>
                                <a href="mailto:info@malkiainitiative.org" class="ch-val">info@malkiainitiative.org</a>
                            </div>
                        </div>

                        <div class="channel-unit">
                            <i class="ph-bold ph-whatsapp-logo"></i>
                            <div>
                                <span class="ch-lbl">WhatsApp Business Desk</span>
                                <a href="https://wa.me/254700000000" target="_blank" rel="noopener" class="ch-val">+254 700 000 000</a>
                            </div>
                        </div>

                        <div class="channel-unit">
                            <i class="ph-bold ph-linkedin-logo"></i>
                            <div>
                                <span class="ch-lbl">Institutional Updates</span>
                                <a href="https://linkedin.com/company/malkiainitiative" target="_blank" rel="noopener" class="ch-val">The Malkia Initiative</a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- 5. Verification & Governance Strip (Col-12) -->
                <article class="bento-card col-12 contact-fiduciary-strip">
                    <div class="fiduciary-row">
                        <div class="fiduciary-badge">
                            <i class="ph-bold ph-certificate"></i>
                            <div>
                                <strong>Registered National NGO</strong>
                                <span>Reg. No. OP.218/051/16-068/10432 • NGO Coordination Board of Kenya</span>
                            </div>
                        </div>
                        <div class="fiduciary-badge">
                            <i class="ph-bold ph-bank"></i>
                            <div>
                                <strong>Statutory &amp; Tax Compliant</strong>
                                <span>KRA PIN &amp; Valid Tax Exemption Compliance</span>
                            </div>
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