document.addEventListener('DOMContentLoaded', () => {
    const isIndexPage = document.getElementById('dossierGridRoot');
    const isDetailPage = document.getElementById('beneficiaryShellRoot');

    if (isIndexPage) {
        loadImpactGrid();
    } else if (isDetailPage) {
        loadBeneficiaryDetail();
    }
});

async function fetchDossiersData() {
    try {
        const res = await fetch('../assets/data/dossiers.json');
        if (!res.ok) throw new Error('Failed to retrieve dossiers');
        return await res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

// -----------------------------------------------------------------------------
// RENDER INDEX (10 CARDS)
// -----------------------------------------------------------------------------
// Inside assets/js/impact.js -> loadImpactGrid()

async function loadImpactGrid() {
    const container = document.getElementById('dossierGridRoot');
    const data = await fetchDossiersData();
    container.innerHTML = '';

    // Render the 10 pipeline cards
    data.forEach(item => {
        const card = document.createElement('article');
        const isLive = item.status === 'live';
        card.className = `dossier-card ${isLive ? 'featured' : 'locked'}`;
        card.style.backgroundImage = `url('${item.cardImage}')`;

        card.innerHTML = `
            <div class="dossier-card-overlay">
                ${isLive 
                    ? `<span class="dossier-num-pill">${item.program}</span>` 
                    : `<span class="badge-locked"><i class="ph-fill ph-calendar-blank"></i> ${item.program} • Releases ${item.releaseDate}</span>`}
                <h3>${item.name}</h3>
                <p class="tagline-two-line">${item.tagline}</p>
                <div>
                    ${isLive 
                        ? `<a href="beneficiary.html?id=${item.id}" class="btn-pill btn-pill-gold"><span>Open Dossier</span><i class="ph ph-arrow-right"></i></a>`
                        : `<span class="release-indicator">Scheduled Pipeline • ${item.releaseDate}</span>`
                    }
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Append the 2-Column Green Call To Action Card
    const ctaCard = document.createElement('article');
    ctaCard.className = 'dossier-card-cta bead-accent-top';
    ctaCard.innerHTML = `
        <div class="cta-card-content">
            <div class="cta-tagline">
                <i class="ph-fill ph-hand-heart"></i> Partner in Her Sovereignty
            </div>
            <h2 class="cta-headline">Sponsor a Pipeline. Fuel Generational Agency.</h2>
            <p class="cta-body-text">
                Every verified outcome in these dossiers traces back to structured investment: $75 secures a girl's education re-entry, legal dignity, and mentorship for an entire year. Join us as an institutional partner or individual champion.
            </p>
            <div class="cta-action-row">
                <button class="btn-cta-gold" onclick="openBigIdeaModal()">
                    <span>Invest in Her Next Decade</span>
                    <i class="ph-bold ph-arrow-up-right"></i>
                </button>
            </div>
        </div>
    `;
    container.appendChild(ctaCard);
}

// -----------------------------------------------------------------------------
// RENDER DETAIL DOSSIER (SINGLE BENEFICIARY)
// -----------------------------------------------------------------------------
// Replace loadBeneficiaryDetail() in assets/js/impact.js with:

async function loadBeneficiaryDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'sanaipei';
    const data = await fetchDossiersData();
    const item = data.find(p => p.id === id);

    const root = document.getElementById('beneficiaryShellRoot');
    if (!item || item.status !== 'live') {
        root.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h2 style="font-family: var(--font-display); color: var(--m-purple); margin-bottom: 12px;">Dossier Not Found</h2>
                <p style="color: var(--m-text-muted); margin-bottom: 24px;">This profile is either currently in deployment or does not exist.</p>
                <a href="index.html" class="btn-pill btn-pill-purple">Return to All Dossiers</a>
            </div>
        `;
        return;
    }

    // Dynamic Title Update for SEO/AEO
    document.title = `${item.name} Dossier | The Malkia Initiative @ 10`;

    root.innerHTML = `
        <div class="beneficiary-top-bar">
            <a href="index.html" class="back-to-grid-btn">
                <i class="ph ph-arrow-left"></i>
                <span>All Impact Dossiers</span>
            </a>
            <span style="font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; color: var(--m-text-muted);">
                Verified Profile ${item.id.toUpperCase()}
            </span>
        </div>

        <!-- 1. Hero Identity Canvas -->
        <header class="beneficiary-hero bead-accent-top" style="background-image: url('${item.heroImage || item.cardImage}')">
            <div class="beneficiary-hero-overlay">
                <span class="badge-program">${item.program}</span>
                <h1>${item.name}</h1>
                <p class="hero-tagline">${item.tagline.replace('<br>', ' ')}</p>
            </div>
        </header>

        <!-- 2. Audited Progress Metrics -->
        <section class="dossier-metrics-strip" aria-label="Beneficiary Metrics">
            ${item.metrics.map(m => `
                <div class="dossier-metric-card">
                    <div class="label">${m.label}</div>
                    <div class="val">${m.value}</div>
                </div>
            `).join('')}
        </section>

        <!-- 3. Narrative Transformation Flow -->
        <section class="narrative-trilogy" aria-label="Transformation Journey">
            <div class="narrative-step">
                <div class="step-indicator step-1-title">
                    <i class="ph-bold ph-warning-circle"></i>
                    <span>01 • The Baseline Reality</span>
                </div>
                <h3>Systemic Barriers</h3>
                <p>${item.theReality}</p>
            </div>

            <div class="narrative-step">
                <div class="step-indicator step-2-title">
                    <i class="ph-bold ph-lightning"></i>
                    <span>02 • The Turning Point</span>
                </div>
                <h3>Targeted Intervention</h3>
                <p>${item.theTurningPoint}</p>
            </div>

            <div class="narrative-step">
                <div class="step-indicator step-3-title">
                    <i class="ph-bold ph-check-circle"></i>
                    <span>03 • Verified Outcome</span>
                </div>
                <h3>Generational Agency</h3>
                <p>${item.theOutcome}</p>
            </div>
        </section>

        <!-- 4. Direct Participant Quote -->
        <section class="beneficiary-quote-card" aria-label="Beneficiary Quote">
            <blockquote>"${item.directQuote}"</blockquote>
            <div class="attribution">— ${item.name}, Verified Alumna & Community Role Model</div>
        </section>

        <!-- 5. Theory of Change Verification & SROI Investment CTA -->
        <section class="beneficiary-investment-card" aria-label="Investment Alignment">
            <div class="investment-meta">
                <h4>Theory of Change Alignment</h4>
                <p>
                    <strong>${item.tocAlignment.pillar}</strong> • ${item.tocAlignment.outcomeArea}. Replicating this verified trajectory for another girl in pastoralist Kajiado requires an annual operational allocation of $75.
                </p>
            </div>
            <div class="investment-action">
                <span class="unit-cost-pill">Unit Cost: ${item.tocAlignment.sroiUnitCost}</span>
                <button class="btn-cta-gold" onclick="openBigIdeaModal()">
                    <span>Sponsor This Pipeline</span>
                    <i class="ph-bold ph-arrow-up-right"></i>
                </button>
            </div>
        </section>
    `;
}