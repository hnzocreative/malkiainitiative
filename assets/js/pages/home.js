/**
 * Malkia Corporate - Homepage Specific Component Drivers
 * Accordion, Carousel, Glance Slider, Investment Calculator
 */

// 1. Accordion Navigation Handler
function toggleAccordion(button) {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-trigger span').innerText = '+';
    });

    if (!isActive) {
        item.classList.add('active');
        button.querySelector('span').innerText = '−';
    }
}

// 2. 3D Card Swipe Carousel Controller
let currentCardIndex = 0;
function initCarouselEngine() {
    const cards = document.querySelectorAll('.portfolio-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    const scatterAngles = [-5, -3, -1, 1, 3, 5, 2];

    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentCardIndex) {
            card.classList.add('active');
            card.style.zIndex = totalCards.toString();
            card.style.transform = 'none';
            card.style.opacity = '1';
        } else {
            let depthIndex = index - currentCardIndex;
            if (depthIndex < 0) depthIndex += totalCards;
            
            card.style.zIndex = (totalCards - depthIndex).toString();
            let angle = scatterAngles[(index % scatterAngles.length)];
            card.style.transform = `translateX(0px) translateY(-${depthIndex * 4}px) scale(${1 - (depthIndex * 0.02)}) rotate(${angle}deg)`;
            card.style.opacity = depthIndex < 4 ? "0.95" : "0";
        }
    });

    const counter = document.getElementById('carouselCounter');
    if (counter) counter.innerText = `Project ${currentCardIndex + 1} of ${totalCards}`;
}

let isShuffling = false;
function slideCarousel(direction) {
    if (isShuffling) return; 
    const cards = document.querySelectorAll('.portfolio-card');
    const totalCards = cards.length;
    if (totalCards <= 1) return;

    isShuffling = true;
    const currentCard = cards[currentCardIndex];

    if (direction === 1) {
        currentCard.classList.add('shuffle-out');
        setTimeout(() => {
            currentCardIndex = (currentCardIndex + 1) % totalCards;
            currentCard.classList.remove('shuffle-out');
            currentCard.classList.add('shuffle-in');
            initCarouselEngine();
            setTimeout(() => {
                currentCard.classList.remove('shuffle-in');
                isShuffling = false;
            }, 400);
        }, 300);
    } else {
        currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
        const newTopCard = cards[currentCardIndex];
        newTopCard.classList.add('shuffle-out');
        setTimeout(() => {
            initCarouselEngine();
            newTopCard.classList.remove('shuffle-out');
            setTimeout(() => { isShuffling = false; }, 400);
        }, 150);
    }
}
document.addEventListener('DOMContentLoaded', initCarouselEngine);

// 3. At A Glance Slider Controller
function scrollGlance(direction) {
    const grid = document.getElementById('glanceGrid');
    const cards = Array.from(grid.querySelectorAll('.glance-card'));
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 16; 
    const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
    const currentScroll = grid.scrollLeft;
    
    if (direction === 1 && currentScroll >= maxScrollLeft - 5) {
        grid.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === -1 && currentScroll <= 5) {
        grid.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
        grid.scrollBy({ left: (cardWidth + gap) * direction, behavior: 'smooth' });
    }
}

// 4. Investment Calculator Bento Driver
let cardPledgeQty = 1;
function updateCalcPledge(delta) {
    cardPledgeQty = Math.max(1, Math.min(50, cardPledgeQty + delta));
    syncCalcDisplay();
}

function setCalcPledge(amount) {
    cardPledgeQty = amount;
    syncCalcDisplay();
}

function syncCalcDisplay() {
    const totalUsd = cardPledgeQty * 75;
    const totalKes = (totalUsd * 130).toLocaleString();

    document.getElementById('calcGirlsCount').textContent = cardPledgeQty;
    document.getElementById('calcTotalUsd').textContent = `$${totalUsd.toLocaleString()} USD`;
    document.getElementById('calcTotalKes').textContent = `~KES ${totalKes}`;

    document.querySelectorAll('.calc-chip').forEach(chip => {
        const text = chip.textContent;
        const matches = (cardPledgeQty === 1 && text.includes('1')) ||
                        (cardPledgeQty === 5 && text.includes('5')) ||
                        (cardPledgeQty === 10 && text.includes('10')) ||
                        (cardPledgeQty === 20 && text.includes('20'));
        chip.classList.toggle('active', matches);
    });
}

function launchPledgeFromCalc() {
    if (typeof adjustPledgeQty === 'function') {
        pledgeQty = cardPledgeQty;
        adjustPledgeQty(0);
    }
    openPledgeModal();
}