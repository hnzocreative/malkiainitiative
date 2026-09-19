// Beneficiary 50/50 Carousel Controller
const carouselData = [
    {
    id: "sanaipei",
    name: "Sanaipei",
    program: "Program: SheRISE Vocational",
    badge: "Verified Outcome • SheRISE",
    image: "../../assets/images/impact-stories/sanaipei-card.webp",
    tagline: "From child marriage survivor at 10 to independent salon enterprise owner in Kajiado Central.",
    quote: "\"My daughter Zawadi will never know what it means to be exchanged for cows. She will hold a pencil before anything else.\"",
    metrics: [
        { label: "Status", val: "Salon Owner" },
        { label: "Training", val: "MNP TVET" },
        { label: "Daughter", val: "Safeguarded" }
    ]
    },
    {
    id: "namunyak",
    name: "Namunyak",
    program: "Program: Voices Uncut",
    badge: "Verified Outcome • Voices Uncut",
    image: "../../assets/images/impact-stories/namunyak-card.webp",
    tagline: "A young mother reclaiming her future, re-enrolling in school, and advocating for girl-child agency.",
    quote: "\"Being a teen mother does not mean my life has ended. My mind is sharp, and my seat in the classroom is mine.\"",
    metrics: [
        { label: "Academic", val: "Secondary" },
        { label: "Reach", val: "15 Assemblies" },
        { label: "Next Goal", val: "KCSE Exam" }
    ]
    },
    {
    id: "salome",
    name: "Salome Seeman",
    program: "Program: KUZA (TaRL Literacy)",
    badge: "Verified Outcome • KUZA",
    image: "../../assets/images/impact-stories/salome-card.webp",
    tagline: "Unlocking foundational fluency and story-level reading comprehension at Moipei Comprehensive.",
    quote: "\"When you know how to read, the words in the book stop feeling like locked doors.\"",
    metrics: [
        { label: "Reading", val: "Story Level" },
        { label: "School", val: "Moipei Primary" },
        { label: "TaRL Gain", val: "324 Readers" }
    ]
    }
];

let activeIndex = 0;

function renderBeneficiarySlide(index) {
    const item = carouselData[index];
    const imgPane = document.getElementById('carouselImgPane');
    
    // Preload image object to prevent flicker before applying background
    const preloader = new Image();
    preloader.src = item.image;
    preloader.onload = () => {
    imgPane.style.backgroundImage = `url('${item.image}')`;
    };
    // Fallback immediate assignment
    imgPane.style.backgroundImage = `url('${item.image}')`;

    document.getElementById('carouselStatusBadge').textContent = item.badge;
    document.getElementById('carouselProgram').textContent = item.program;
    document.getElementById('carouselName').textContent = item.name;
    document.getElementById('carouselTagline').textContent = item.tagline;
    document.getElementById('carouselQuote').textContent = item.quote;
    document.getElementById('carouselLink').href = `../../impact-stories/beneficiary.html?id=${item.id}`;

    const metricsWrap = document.getElementById('carouselMetrics');
    metricsWrap.innerHTML = item.metrics.map(m => `
    <div class="carousel-metric-mini">
        <div class="label">${m.label}</div>
        <div class="val">${m.val}</div>
    </div>
    `).join('');
}

function nextBeneficiary() {
    activeIndex = (activeIndex + 1) % carouselData.length;
    renderBeneficiarySlide(activeIndex);
}

function prevBeneficiary() {
    activeIndex = (activeIndex - 1 + carouselData.length) % carouselData.length;
    renderBeneficiarySlide(activeIndex);
}

// Preload remaining slide assets and execute immediately on load
document.addEventListener('DOMContentLoaded', () => {
    renderBeneficiarySlide(0);
    carouselData.slice(1).forEach(item => {
    const img = new Image();
    img.src = item.image;
    });
});