/**
 * Post-Event Experience Controller
 * Pledges Stream, 25-Slot Square Media Gallery, Lightbox & Gamified Future Wall Modal
 */

const CAMPAIGN_GOAL = 2000000;
const BASE_PLEDGED = 415000; // Raised on Oct 16
let selectedPathway = 'scholarships';

document.addEventListener('DOMContentLoaded', () => {
    initPledgesStream();
    initMediaGallery();
    initPathwaySelector();
    updateGamifiedPledge(750); // Initial calibration
});

// -----------------------------------------------------------------------------
// 1. PLEDGES STREAM
// -----------------------------------------------------------------------------
const eventPledgesData = [
    {
        quote: "Pledging 100 scholarships for girls transitioning from Primary to Secondary in Kajiado Central.",
        donor: "Dr. A. Ochieng",
        category: "Institutional",
        date: "16 Oct 2026"
    },
    {
        quote: "Committing 5 years of medical supply lines to support the Olgulului Youth Resource Center clinic.",
        donor: "Nairobi Health Trust",
        category: "Healthcare",
        date: "16 Oct 2026"
    },
    {
        quote: "Funding full vocational cosmetology toolkits for every graduate of the SheRISE Maasai National Polytechnic cohort.",
        donor: "Private Family Foundation",
        category: "Vocational",
        date: "16 Oct 2026"
    },
    {
        quote: "Standing as community defenders across 5 wards to ensure zero school dropouts due to forced unions.",
        donor: "Kajiado Council of Elders",
        category: "Community Pact",
        date: "16 Oct 2026"
    }
];

function initPledgesStream() {
    const streamContainer = document.getElementById('pledgesStreamRoot');
    if (!streamContainer) return;

    streamContainer.innerHTML = '';
    eventPledgesData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'pledge-tile';
        card.innerHTML = `
            <div class="pledge-quote">"${item.quote}"</div>
            <div class="pledge-author">
                <span><strong>${item.donor}</strong> (${item.category})</span>
                <span>${item.date}</span>
            </div>
        `;
        streamContainer.appendChild(card);
    });
}

// -----------------------------------------------------------------------------
// 2. 5x5 SQUARE MEDIA GALLERY (24 Photos + 1 "View More" Link)
// -----------------------------------------------------------------------------
const galleryPhotos = [
    { file: "gallery-01.jpg", title: "Passing the Crown", caption: "Jedidah Lemaron and foundational alumna passing the beaded ceremonial crown." },
    { file: "gallery-02.jpg", title: "The Future Wall", caption: "Delegates physically inscribing multi-year commitments onto the timber installation." },
    { file: "gallery-03.jpg", title: "Olgulului Voices", caption: "Traditional choral poetry performed by grassroots youth delegates." },
    { file: "gallery-04.jpg", title: "Council of Elders", caption: "Pastoralist elders from 5 wards ratifying community protection protocols." },
    { file: "gallery-05.jpg", title: "Dignity Kits Preview", caption: "Malkia hygiene kits and Pad Bank packages prepared for rural distribution." },
    { file: "gallery-06.jpg", title: "TaRL Learning Circle", caption: "Salome and cohort demonstrating accelerated phonetic reading breakthroughs." },
    { file: "gallery-07.jpg", title: "Boda Boda Allies", caption: "Motorbike operators receiving frontline first-responder certificates." },
    { file: "gallery-08.jpg", title: "Keynote Address", caption: "Unveiling the $2,000,000 Strategic Vision 2029 operational horizon." },
    { file: "gallery-09.jpg", title: "Crown Club Delegates", caption: "Secondary school student leaders holding the Malkia agency charter." },
    { file: "gallery-10.jpg", title: "Alumni Entrepreurs", caption: "Sanaipei and SheRISE TVET cosmetologists showcasing enterprise plans." },
    { file: "gallery-11.jpg", title: "Institutional Pledges", caption: "Signing partner MOUs between bilateral foundations and Malkia leadership." },
    { file: "gallery-12.jpg", title: "Adolescent Researchers", caption: "Sauti Ya Dada delegates presenting county-wide school survey findings." },
    { file: "gallery-13.jpg", title: "Youth Resource Hub", caption: "Architectural blueprint reveal for the expanded Olgulului center." },
    { file: "gallery-14.jpg", title: "Maasai Beaded Accents", caption: "Traditional regalia honoring decade-long grassroots champions." },
    { file: "gallery-15.jpg", title: "Mentor On The Road", caption: "Caravan leaders planning 2027 cross-county pastoralist routes." },
    { file: "gallery-16.jpg", title: "Safe Dormitory Initiative", caption: "MG Takey boarding scholars celebrating safe housing access." },
    { file: "gallery-17.jpg", title: "Teen Mother Re-Entry", caption: "Namunyak speaking on removing cultural stigma around young mothers." },
    { file: "gallery-18.jpg", title: "Interactive Audit Review", caption: "Board members reviewing 2025 financial allocations and spend efficiency." },
    { file: "gallery-19.jpg", title: "Tamarind Tree Reception", caption: "Networking evening between grassroots teams and international allies." },
    { file: "gallery-20.jpg", title: "YouthWyze Digital Hub", caption: "Tablets demonstrating SRHR digital curricula for rural adolescents." },
    { file: "gallery-21.jpg", title: "Community Baraza Protocol", caption: "Chiefs formalizing alternative rites of passage agreements." },
    { file: "gallery-22.jpg", title: "Closing Benediction", caption: "Intergenerational prayer and celebration for the next decade." },
    { file: "gallery-23.jpg", title: "Delegates Inscription", caption: "Closing signatures on the commemorative Malkia@10 banner." },
    { file: "gallery-24.jpg", title: "The Next Ten Years", caption: "Full cohort assembly photograph honoring 26,009 girls supported." }
];

function initMediaGallery() {
    const galleryRoot = document.getElementById('eventGalleryRoot');
    if (!galleryRoot) return;

    galleryRoot.innerHTML = '';

    // Render 24 Square Image Cards
    galleryPhotos.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View photo ${idx + 1}: ${item.title}`);
        
        card.innerHTML = `
            <img src="../assets/images/events/gallery/${item.file}" alt="${item.title}" onerror="this.src='../assets/images/cards/story-teaser.jpg'; this.onerror=null;" />
            <div class="gallery-item-caption">
                <span>Frame ${String(idx + 1).padStart(2, '0')}</span>
                <p><strong>${item.title}</strong> — ${item.caption}</p>
            </div>
        `;

        card.addEventListener('click', () => openLightbox(item));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(item);
            }
        });

        galleryRoot.appendChild(card);
    });

    // Render 25th Item: "View Full Archival Vault"
    const moreCard = document.createElement('a');
    moreCard.className = 'gallery-item-more';
    moreCard.href = "https://malkiainitiative.org";
    moreCard.target = "_blank";
    moreCard.rel = "noopener noreferrer";
    moreCard.innerHTML = `
        <i class="ph-bold ph-images"></i>
        <strong>View Full Vault</strong>
        <span>180+ High-Res Photos &rarr;</span>
    `;
    galleryRoot.appendChild(moreCard);
}

// -----------------------------------------------------------------------------
// 3. LIGHTBOX CONTROLLER
// -----------------------------------------------------------------------------
const lightboxDialog = document.getElementById('galleryLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');

function openLightbox(item) {
    if (!lightboxDialog) return;
    lightboxImg.src = `../assets/images/events/gallery/${item.file}`;
    lightboxImg.onerror = () => { lightboxImg.src = '../assets/images/cards/story-teaser.jpg'; };
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption;
    lightboxDialog.showModal();
}

function closeLightbox() {
    if (lightboxDialog) lightboxDialog.close();
}

function closeLightboxOnBackdrop(e) {
    if (e.target === lightboxDialog) closeLightbox();
}

// -----------------------------------------------------------------------------
// 4. GAMIFIED PLEDGE MODAL ENGINE
// -----------------------------------------------------------------------------
function initPathwaySelector() {
    const cards = document.querySelectorAll('.pathway-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            selectedPathway = card.dataset.pathway;
            const defaultAmt = parseInt(card.dataset.default, 10) || 750;
            const slider = document.getElementById('pledgeRange');
            if (slider) {
                slider.value = defaultAmt;
                updateGamifiedPledge(defaultAmt);
            }
        });
    });
}

function updateGamifiedPledge(amount) {
    const val = parseInt(amount, 10);
    const pledgeDisplay = document.getElementById('pledgeDisplayAmount');
    const userBar = document.getElementById('progressUserBar');
    const progressText = document.getElementById('progressCurrentText');
    const impactSummary = document.getElementById('userImpactSummary');
    const sharePercentage = document.getElementById('userSharePercentage');

    if (pledgeDisplay) pledgeDisplay.textContent = `$${val.toLocaleString()}`;

    // Calculate percentage lift
    const userPercent = (val / CAMPAIGN_GOAL) * 100;
    const totalWithUser = BASE_PLEDGED + val;
    const totalPercent = ((totalWithUser / CAMPAIGN_GOAL) * 100).toFixed(2);

    if (userBar) userBar.style.width = `${userPercent}%`;
    if (progressText) {
        progressText.textContent = `$${totalWithUser.toLocaleString()} / $${CAMPAIGN_GOAL.toLocaleString()} (${totalPercent}%)`;
    }
    if (sharePercentage) {
        sharePercentage.textContent = `+${userPercent.toFixed(2)}% Direct Lift`;
    }

    // Contextual gamified impact feedback
    if (impactSummary) {
        if (selectedPathway === 'scholarships') {
            const girls = Math.floor(val / 75);
            impactSummary.textContent = `Directly secures full tuition, kits, and mentoring for ${girls} adolescent girls.`;
        } else if (selectedPathway === 'healthcare') {
            impactSummary.textContent = `Underwrites clinic nurse hours and medicine supply lines for ${Math.floor(val / 250)} weeks.`;
        } else if (selectedPathway === 'vocational') {
            impactSummary.textContent = `Funds complete cosmetology toolkits for ${Math.floor(val / 150)} MNP polytechnic graduates.`;
        } else if (selectedPathway === 'community') {
            impactSummary.textContent = `Resources alternative rites dialogues across ${Math.min(5, Math.max(1, Math.floor(val / 1000)))} pastoralist wards.`;
        }
    }
}

function handleEventPledgeSubmit(e) {
    e.preventDefault();
    const donor = document.getElementById('donorName').value;
    const note = document.getElementById('pledgeStatement').value;
    const amount = document.getElementById('pledgeDisplayAmount').textContent;

    alert(`Pledge Inscribed on The Future Wall!\n\nDonor: ${donor}\nPathway: ${selectedPathway.toUpperCase()}\nAmount: ${amount}\nStatement: "${note}"\n\nThank you for championing the next decade of African girl agency.`);
    closeBigIdeaModal();
}