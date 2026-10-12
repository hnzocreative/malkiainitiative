const navDrawer = document.getElementById('navDrawer');
const statsDrawer = document.getElementById('statsDrawer');
const backdrop = document.getElementById('drawerBackdrop');
const mainBento = document.getElementById('mainBento');
const bigIdeaDialog = document.getElementById('bigIdeaDialog');
const menuFab = document.getElementById('menuFab');
const fabDock = document.querySelector('.fab-dock-bottom');
const anniversaryHero = document.getElementById('anniversaryHero');

let isNavOpen = false;
let isStatsOpen = false;

// Toggle Top-Right Menu FAB Label/Icon
function updateMenuFabUI(isOpen) {
    if (isOpen) {
        menuFab.innerHTML = '<i class="ph ph-x"></i><span>Close</span>';
        menuFab.setAttribute('aria-label', 'Close Navigation');
    } else {
        menuFab.innerHTML = '<i class="ph ph-list"></i><span>Menu</span>';
        menuFab.setAttribute('aria-label', 'Open Navigation');
    }
}

// -----------------------------------------------------------------------------
// NAVIGATION DRAWER LOGIC (LEFT -> RIGHT)
// -----------------------------------------------------------------------------
function toggleNavDrawer() {
    isNavOpen = !isNavOpen;
    applyNavState(isNavOpen);
}

function applyNavState(open) {
    isNavOpen = open;
    navDrawer.classList.add('smooth-transition');
    
    if (open) {
        if (isStatsOpen) applyStatsState(false);
        navDrawer.classList.add('open');
        navDrawer.style.transform = '';
        
        mainBento.classList.add('canvas-shifted');
        mainBento.classList.remove('canvas-shifted-left');
        if (anniversaryHero) {
            anniversaryHero.classList.add('canvas-shifted');
            anniversaryHero.classList.remove('canvas-shifted-left');
        }

        fabDock.classList.remove('dock-shifted-left');
        menuFab.classList.remove('menu-shifted-left');
        backdrop.classList.add('active');
    } else {
        navDrawer.classList.remove('open');
        navDrawer.style.transform = '';
        
        mainBento.classList.remove('canvas-shifted');
        if (anniversaryHero) anniversaryHero.classList.remove('canvas-shifted');

        if (!isStatsOpen) backdrop.classList.remove('active');
    }
    updateMenuFabUI(open);
}

// -----------------------------------------------------------------------------
// TELEMETRY DRAWER LOGIC (RIGHT -> LEFT WITH PERSPECTIVE PUSH)
// -----------------------------------------------------------------------------
function toggleStatsDrawer() {
    isStatsOpen = !isStatsOpen;
    applyStatsState(isStatsOpen);
}

function applyStatsState(open) {
    isStatsOpen = open;
    statsDrawer.classList.add('smooth-transition');

    if (open) {
        if (isNavOpen) applyNavState(false);
        statsDrawer.classList.add('open');
        statsDrawer.style.transform = '';

        mainBento.classList.add('canvas-shifted-left');
        mainBento.classList.remove('canvas-shifted');
        if (anniversaryHero) {
            anniversaryHero.classList.add('canvas-shifted-left');
            anniversaryHero.classList.remove('canvas-shifted');
        }

        fabDock.classList.add('dock-shifted-left');
        menuFab.classList.add('menu-shifted-left');
        backdrop.classList.add('active');
    } else {
        statsDrawer.classList.remove('open');
        statsDrawer.style.transform = '';

        mainBento.classList.remove('canvas-shifted-left');
        if (anniversaryHero) anniversaryHero.classList.remove('canvas-shifted-left');

        fabDock.classList.remove('dock-shifted-left');
        menuFab.classList.remove('menu-shifted-left');
        if (!isNavOpen) backdrop.classList.remove('active');
    }
}

function closeAllDrawers() {
    if (isNavOpen) applyNavState(false);
    if (isStatsOpen) applyStatsState(false);
    backdrop.classList.remove('active');
}

function openBigIdeaModal() {
    bigIdeaDialog.showModal();
}

function closeBigIdeaModal() {
    bigIdeaDialog.close();
}

// -----------------------------------------------------------------------------
// BIDIRECTIONAL PULL-PHYSICS SWIPE ENGINE (TOUCH WITH 60% THRESHOLD)
// -----------------------------------------------------------------------------
let startX = 0;
let currentX = 0;
let isNavSwiping = false;
let isStatsSwiping = false;
let navWidth = 0;
let statsWidth = 0;

window.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    currentX = startX;
    const windowWidth = window.innerWidth;

    navWidth = navDrawer.offsetWidth || (windowWidth * 0.8);
    statsWidth = statsDrawer.offsetWidth || (windowWidth * 0.88);

    if (!isNavOpen && !isStatsOpen && startX <= 45) {
        isNavSwiping = true;
        navDrawer.classList.remove('smooth-transition');
    } else if (isNavOpen) {
        isNavSwiping = true;
        navDrawer.classList.remove('smooth-transition');
    }

    if (!isStatsOpen && !isNavOpen && startX >= (windowWidth - 45)) {
        isStatsSwiping = true;
        statsDrawer.classList.remove('smooth-transition');
    } else if (isStatsOpen) {
        isStatsSwiping = true;
        statsDrawer.classList.remove('smooth-transition');
    }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;

    // 1. Handling Nav Drawer Swipe (Left -> Right)
    if (isNavSwiping) {
        if (!isNavOpen && deltaX > 0) {
            let clampedTranslate = Math.min(0, -navWidth + deltaX);
            navDrawer.style.transform = `translateX(${clampedTranslate}px)`;
            let progress = Math.min(1, deltaX / navWidth);
            let shiftStyle = `translateX(${clampedTranslate + navWidth}px) scale(${1 - (progress * 0.04)})`;
            let blurStyle = `blur(${progress * 8}px)`;

            mainBento.style.transform = shiftStyle;
            mainBento.style.filter = blurStyle;
            if (anniversaryHero) {
                anniversaryHero.style.transform = shiftStyle;
                anniversaryHero.style.filter = blurStyle;
            }
        } else if (isNavOpen && deltaX < 0) {
            let clampedTranslate = Math.max(-navWidth, deltaX);
            navDrawer.style.transform = `translateX(${clampedTranslate}px)`;
            let progress = Math.min(1, Math.abs(deltaX) / navWidth);
            let shiftStyle = `translateX(${navWidth + clampedTranslate}px) scale(${0.96 + (progress * 0.04)})`;
            let blurStyle = `blur(${8 - (progress * 8)}px)`;

            mainBento.style.transform = shiftStyle;
            mainBento.style.filter = blurStyle;
            if (anniversaryHero) {
                anniversaryHero.style.transform = shiftStyle;
                anniversaryHero.style.filter = blurStyle;
            }
        }
    }

    // 2. Handling Stats Drawer Swipe (Right -> Left)
    if (isStatsSwiping) {
        if (!isStatsOpen && deltaX < 0) {
            let clampedTranslate = Math.max(0, statsWidth + deltaX);
            statsDrawer.style.transform = `translateX(${clampedTranslate}px)`;
            let progress = Math.min(1, Math.abs(deltaX) / statsWidth);
            let bentoShift = -1 * (statsWidth - clampedTranslate);

            let shiftStyle = `translateX(${bentoShift}px) scale(${1 - (progress * 0.04)})`;

            mainBento.style.transform = shiftStyle;
            if (anniversaryHero) anniversaryHero.style.transform = shiftStyle;

            fabDock.style.transform = `translateX(${bentoShift}px)`;
            menuFab.style.transform = `translateX(${bentoShift}px)`;
        } else if (isStatsOpen && deltaX > 0) {
            let clampedTranslate = Math.min(statsWidth, deltaX);
            statsDrawer.style.transform = `translateX(${clampedTranslate}px)`;
            let progress = Math.min(1, deltaX / statsWidth);
            let bentoShift = -1 * (statsWidth - clampedTranslate);

            let shiftStyle = `translateX(${bentoShift}px) scale(${0.96 + (progress * 0.04)})`;

            mainBento.style.transform = shiftStyle;
            if (anniversaryHero) anniversaryHero.style.transform = shiftStyle;

            fabDock.style.transform = `translateX(${bentoShift}px)`;
            menuFab.style.transform = `translateX(${bentoShift}px)`;
        }
    }
}, { passive: true });

window.addEventListener('touchend', () => {
    let deltaX = currentX - startX;

    if (isNavSwiping) {
        isNavSwiping = false;
        navDrawer.classList.add('smooth-transition');
        
        mainBento.style.transform = '';
        mainBento.style.filter = '';
        if (anniversaryHero) {
            anniversaryHero.style.transform = '';
            anniversaryHero.style.filter = '';
        }

        let threshold = navWidth * 0.60;
        if (!isNavOpen) {
            applyNavState(deltaX >= threshold);
        } else {
            applyNavState(!(Math.abs(deltaX) >= threshold && deltaX < 0));
        }
    }

    if (isStatsSwiping) {
        isStatsSwiping = false;
        statsDrawer.classList.add('smooth-transition');
        
        mainBento.style.transform = '';
        if (anniversaryHero) anniversaryHero.style.transform = '';

        fabDock.style.transform = '';
        menuFab.style.transform = '';

        let threshold = statsWidth * 0.60;
        if (!isStatsOpen) {
            applyStatsState(Math.abs(deltaX) >= threshold && deltaX < 0);
        } else {
            applyStatsState(!(deltaX >= threshold && deltaX > 0));
        }
    }
});

// -----------------------------------------------------------------------------
// ACCORDION SPRING PHYSICS ENGINE
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.stats-drawer details.faq-item');
    faqItems.forEach(item => {
        attachSpringAccordion(item, 'summary.faq-summary', '.faq-content');
    });
});

function attachSpringAccordion(el, summarySelector, contentSelector) {
    const summary = el.querySelector(summarySelector);
    const content = el.querySelector(contentSelector);
    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener('click', (e) => {
        e.preventDefault();

        if (isClosing || !el.open) {
            openAccordion();
        } else if (isExpanding || el.open) {
            shrinkAccordion();
        }
    });

    function shrinkAccordion() {
        isClosing = true;
        const startHeight = `${el.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight}px`;

        if (animation) animation.cancel();

        animation = el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 300,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });

        content.animate({
            opacity: [1, 0]
        }, {
            duration: 180,
            easing: 'ease'
        });

        animation.onfinish = () => {
            el.open = false;
            animation = null;
            isClosing = false;
            content.style.opacity = '';
        };
    }

    function openAccordion() {
        el.style.height = `${el.offsetHeight}px`;
        el.open = true;
        window.requestAnimationFrame(() => expandAccordion());
    }

    function expandAccordion() {
        isExpanding = true;
        const startHeight = `${el.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

        if (animation) animation.cancel();

        animation = el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        });

        content.animate({
            opacity: [0, 1],
            transform: ['translateY(-6px)', 'translateY(0px)']
        }, {
            duration: 320,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        });

        animation.onfinish = () => {
            el.style.height = '';
            animation = null;
            isExpanding = false;
        };
    }
}

// -----------------------------------------------------------------------------
// IMPACT STORIES CAROUSEL CONTROLLER (5-SECOND INTERVAL + DOTS)
// -----------------------------------------------------------------------------
let currentSlide = 0;
const totalSlides = 3;
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('#carouselDots .carousel-dot');
let carouselTimer = null;

function updateCarouselUI(index) {
    currentSlide = index;
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
    });
}

function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    updateCarouselUI(next);
}

function gotoSlide(index) {
    updateCarouselUI(index);
    restartCarouselTimer();
}

function startCarouselTimer() {
    carouselTimer = setInterval(nextSlide, 5000);
}

function restartCarouselTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    startCarouselTimer();
}

const storyCard = document.querySelector('.box-stories');
if (storyCard) {
    storyCard.addEventListener('mouseenter', () => clearInterval(carouselTimer));
    storyCard.addEventListener('mouseleave', () => startCarouselTimer());
}

document.addEventListener('DOMContentLoaded', () => {
    startCarouselTimer();
});