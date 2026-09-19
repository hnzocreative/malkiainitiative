# The Malkia Initiative — Digital Ecosystem

A centralized monorepo housing the digital platforms, reporting engines, and administrative interfaces for **The Malkia Initiative** (Kajiado County, Kenya).

## Repository Architecture

* `corporate/` — Main Production Website (Vanilla PHP 8.x / Modern CSS / ES6)
* `malkia-at-10/` — 10-Year Anniversary Impact Microsite (Bento Grid / SPA Architecture)
* `admin-merl/` — Monitoring, Evaluation, Research & Learning Dashboard
* `admin-km/` — Knowledge Management & Evidence Generation Portal
* `docs/` — Architecture blueprints, schemas, and sprint records

## Tech Stack & Runtime

* **Backend Runtime:** Apache 2.4+ / PHP 8.1+
* **Frontend Architecture:** Semantic HTML5, Modern CSS (Custom Properties, CSS Grid, Fluid Typography), Vanilla ES6+
* **Design System:** Custom Bento Grid UI, native HTML5 `<dialog>` elements, hardware-accelerated drawer navigation
* **External Dependencies:** Zero heavy JavaScript frameworks (no React, Vue, or Tailwind bloat) to maximize performance and SEO/AEO search authority

## Key Directories & Routing

### 1. corporate/
Deployed to the root web domain (`malkiainitiative.org`).
* **Core Pages:**
  * `index.php` (Corporate Landing & 2025 At A Glance)
  * `why-our-work-matters.php` (Theory of Change Validation)
  * `our-team.php` (Governance & Frontline Leadership)
  * `strategic-plan.php` (2025–2029 Strategic Blueprint)
  * `publications.php` (Audited Disclosures & Research Hub)
  * `engagement.php` (Partnerships & Unit Economic Model)
  * `contacts.php` (Field Inquiries & Urgent Safeguarding Desk)
  * `safeguarding-policy.php` & `privacy-policy.php` (Institutional Compliance)
* **Programmatic Pillars:**
  * `/programs/education-for-girls/` (KUZA Literacy, For Her Infrastructure)
  * `/programs/bodily-autonomy-rights/` (Voices Uncut, Sauti Ya Dada, Break Free)
  * `/programs/economic-resilience/` (SheRISE TVET, CDSC4YRB Youth Hub)
* **Annual Reports:**
  * `/annual-reports/{YYYY}/` (Self-contained annual report templates and assets)

### 2. malkia-at-10/
Staging sandbox for the 10-Year Anniversary campaign. Designed as a modular static site with an SPA feel, migrating into `corporate/@10/` upon final content approval.
* `index.html` (Milestone Landing)
* `/impact-stories/` (Anchor Case Studies)
* `/program/` (Event Schedule; transitions to `/event/` post-event)
* `/vision2029/` (High-Value Donor Strategic Summary)

### 3. admin-merl/
Standalone data visualization and tracking interface for monitoring the 2025–2029 Strategic Plan KPIs, LogFrame indicators (OVI/MOV), and field evaluations.

### 4. admin-km/
Knowledge Management repository interface for cataloging adolescent girl-led research, community case studies, policy briefs, and photojournalism assets.

## Deployment & Server Environment

1. **Local Development:** Run via local Apache/PHP server (e.g., MAMP, native Apache).
2. **Dynamic Base Pathing:** `partials/head.php` automatically resolves `BASE_URL` between local subdirectory development (`/mi/`) and production root (`/`).
3. **CI/CD Pipeline:** Automated deployment via GitHub Actions (SFTP) or bare Git `post-receive` server hooks directly targeting `public_html`.

## Governance & Fiduciary Alignment

* **Legal Entity:** Registered Community-Based Organization / NGO, Kajiado County, Kenya
* **Audit Standard:** International Standards on Auditing (ISA 700 Compliant)
* **Frontline Efficiency:** 81.4% direct programmatic spend
* **Unit Economics:** $75 USD (~KES 9,750) / girl / year under the 1,000-Day Model