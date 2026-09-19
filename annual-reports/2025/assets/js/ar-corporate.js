/**
 * Malkia Initiative AR2025: Corporate Engine
 * Menu Selection, Spring Accordions, Video Modal, and Highcharts
 */

let isNavOpen = false;
let isTelemetryOpen = false;

const sidebar = document.getElementById('arSidebar');
const mainColumn = document.getElementById('arMainColumn');
const telemetry = document.getElementById('arTelemetry');
const backdrop = document.getElementById('arBackdrop');
const fabTelemetry = document.getElementById('arFabTelemetry');
const menuFab = document.getElementById('arMenuFab');

document.addEventListener('DOMContentLoaded', () => {
    initStaticMenuSelection();
    initTocAccordions();
    initSpendEfficiencyChart();
    initForecastProjectChart();
    initMobileSwipeEngine();
});

// -----------------------------------------------------------------------------
// 1. MENU SELECTION (MANUAL CLICK ONLY - NO SCROLL HIJACKING)
// -----------------------------------------------------------------------------
function initStaticMenuSelection() {
    const navLinks = document.querySelectorAll('.ar-vertical-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (window.innerWidth < 1024) {
                toggleNavDrawer(false);
            }
        });
    });
}

function handleNavClick() {
    // Retained for any inline onclick attributes
}

// -----------------------------------------------------------------------------
// 2. UNIFIED DRAWER CONTROLLERS & SHIFTS
// -----------------------------------------------------------------------------
function toggleNavDrawer(forceState = null) {
    if (window.innerWidth >= 1024) return;
    isNavOpen = forceState !== null ? forceState : !isNavOpen;

    if (sidebar) {
        sidebar.classList.add('smooth-transition');
        sidebar.classList.toggle('open', isNavOpen);
        sidebar.style.transform = '';
    }

    if (mainColumn) {
        mainColumn.classList.toggle('shifted-right', isNavOpen);
        if (isNavOpen) mainColumn.classList.remove('shifted-left');
    }

    if (isNavOpen && isTelemetryOpen) {
        toggleTelemetry(false);
    }

    if (backdrop) backdrop.classList.toggle('active', isNavOpen || isTelemetryOpen);
    if (menuFab) {
        menuFab.innerHTML = isNavOpen 
            ? '<i class="ph-bold ph-x"></i><span>Close</span>' 
            : '<i class="ph-bold ph-list"></i><span>Menu</span>';
    }
}

function toggleTelemetry(forceState = null) {
    isTelemetryOpen = forceState !== null ? forceState : !isTelemetryOpen;

    if (isTelemetryOpen && isNavOpen) {
        toggleNavDrawer(false);
    }

    if (telemetry) telemetry.classList.toggle('open', isTelemetryOpen);

    // Shift both the main column AND the sidebar column left
    if (mainColumn) {
        mainColumn.classList.toggle('shifted-left', isTelemetryOpen);
        if (isTelemetryOpen) mainColumn.classList.remove('shifted-right');
    }
    if (sidebar) {
        sidebar.classList.toggle('shifted-left', isTelemetryOpen);
    }

    if (fabTelemetry) fabTelemetry.classList.toggle('shifted-left', isTelemetryOpen);
    if (backdrop) backdrop.classList.toggle('active', isTelemetryOpen || isNavOpen);
}

function closeAllDrawers() {
    if (isNavOpen) toggleNavDrawer(false);
    if (isTelemetryOpen) toggleTelemetry(false);
}

// -----------------------------------------------------------------------------
// 3. EXECUTIVE DIRECTOR VIDEO DIALOG
// -----------------------------------------------------------------------------
const videoDialog = document.getElementById('execVideoDialog');
const videoIframe = document.getElementById('execVideoIframe');
// Placeholder YouTube embed (replace with actual video ID as needed)
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&enablejsapi=1";

function openVideoModal() {
    if (!videoDialog || !videoIframe) return;
    videoIframe.src = YOUTUBE_VIDEO_URL;
    videoDialog.showModal();
}

function closeVideoModal() {
    if (!videoDialog || !videoIframe) return;
    videoIframe.src = ""; // Stops playback immediately
    videoDialog.close();
}

function closeVideoModalOnBackdrop(e) {
    if (e.target === videoDialog) closeVideoModal();
}

// -----------------------------------------------------------------------------
// 4. TOC DETAILS/SUMMARY SPRING ACCORDIONS (WAAPI)
// -----------------------------------------------------------------------------
function initTocAccordions() {
    const items = document.querySelectorAll('#toc .toc-item');
    items.forEach(item => {
        const summary = item.querySelector('.toc-summary');
        const content = item.querySelector('.toc-content');
        let animation = null;
        let isClosing = false;
        let isExpanding = false;

        if (!summary || !content) return;

        summary.addEventListener('click', (e) => {
            e.preventDefault();
            if (isClosing || !item.open) {
                openItem();
            } else if (isExpanding || item.open) {
                shrinkItem();
            }
        });

        function shrinkItem() {
            isClosing = true;
            const startHeight = `${item.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight}px`;

            if (animation) animation.cancel();

            animation = item.animate({
                height: [startHeight, endHeight]
            }, { duration: 280, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

            content.animate({ opacity: [1, 0] }, { duration: 160, easing: 'ease' });

            animation.onfinish = () => {
                item.open = false;
                animation = null;
                isClosing = false;
                content.style.opacity = '';
            };
        }

        function openItem() {
            item.style.height = `${item.offsetHeight}px`;
            item.open = true;
            window.requestAnimationFrame(() => expandItem());
        }

        function expandItem() {
            isExpanding = true;
            const startHeight = `${item.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

            if (animation) animation.cancel();

            animation = item.animate({
                height: [startHeight, endHeight]
            }, { duration: 380, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });

            content.animate({
                opacity: [0, 1],
                transform: ['translateY(-4px)', 'translateY(0px)']
            }, { duration: 280, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });

            animation.onfinish = () => {
                item.style.height = '';
                animation = null;
                isExpanding = false;
            };
        }
    });
}

// -----------------------------------------------------------------------------
// 5. MOBILE SWIPE ENGINE (<1024px)
// -----------------------------------------------------------------------------
function initMobileSwipeEngine() {
    let startX = 0;
    let currentX = 0;
    let isSwipingNav = false;
    let isSwipingStats = false;
    let drawerWidth = 0;
    let statsWidth = 0;

    window.addEventListener('touchstart', (e) => {
        if (window.innerWidth >= 1024) return;
        const touch = e.touches[0];
        startX = touch.clientX;
        currentX = startX;
        const wWidth = window.innerWidth;

        drawerWidth = sidebar ? sidebar.offsetWidth : Math.min(320, wWidth * 0.82);
        statsWidth = telemetry ? telemetry.offsetWidth : Math.min(460, wWidth * 0.88);

        if (!isNavOpen && !isTelemetryOpen && startX <= 45) {
            isSwipingNav = true;
            sidebar.classList.remove('smooth-transition');
        } else if (isNavOpen) {
            isSwipingNav = true;
            sidebar.classList.remove('smooth-transition');
        }

        if (!isTelemetryOpen && !isNavOpen && startX >= (wWidth - 45)) {
            isSwipingStats = true;
            telemetry.classList.remove('smooth-transition');
        } else if (isTelemetryOpen) {
            isSwipingStats = true;
            telemetry.classList.remove('smooth-transition');
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isSwipingNav && !isSwipingStats) return;
        currentX = e.touches[0].clientX;
        const deltaX = currentX - startX;

        if (isSwipingNav && sidebar) {
            if (!isNavOpen && deltaX > 0) {
                const clamped = Math.min(0, -drawerWidth + deltaX);
                sidebar.style.transform = `translateX(${clamped}px)`;
                const progress = Math.min(1, deltaX / drawerWidth);
                mainColumn.style.transform = `translateX(${clamped + drawerWidth}px) scale(${1 - progress * 0.04})`;
                mainColumn.style.filter = `blur(${progress * 8}px)`;
            } else if (isNavOpen && deltaX < 0) {
                const clamped = Math.max(-drawerWidth, deltaX);
                sidebar.style.transform = `translateX(${clamped}px)`;
                const progress = Math.min(1, Math.abs(deltaX) / drawerWidth);
                mainColumn.style.transform = `translateX(${drawerWidth + clamped}px) scale(${0.96 + progress * 0.04})`;
                mainColumn.style.filter = `blur(${8 - progress * 8}px)`;
            }
        }

        if (isSwipingStats && telemetry) {
            if (!isTelemetryOpen && deltaX < 0) {
                const clamped = Math.max(0, statsWidth + deltaX);
                telemetry.style.transform = `translateX(${clamped}px)`;
                const progress = Math.min(1, Math.abs(deltaX) / statsWidth);
                const shiftVal = -1 * (statsWidth - clamped);
                mainColumn.style.transform = `translateX(${shiftVal}px) scale(${1 - progress * 0.04})`;
                mainColumn.style.opacity = `${1 - progress * 0.55}`;
                if (sidebar) sidebar.style.transform = `translateX(${shiftVal}px)`;
                if (fabTelemetry) fabTelemetry.style.transform = `translateX(${shiftVal}px)`;
            } else if (isTelemetryOpen && deltaX > 0) {
                const clamped = Math.min(statsWidth, deltaX);
                telemetry.style.transform = `translateX(${clamped}px)`;
                const progress = Math.min(1, deltaX / statsWidth);
                const shiftVal = -1 * (statsWidth - clamped);
                mainColumn.style.transform = `translateX(${shiftVal}px) scale(${0.96 + progress * 0.04})`;
                mainColumn.style.opacity = `${0.45 + progress * 0.55}`;
                if (sidebar) sidebar.style.transform = `translateX(${shiftVal}px)`;
                if (fabTelemetry) fabTelemetry.style.transform = `translateX(${shiftVal}px)`;
            }
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        const deltaX = currentX - startX;

        if (isSwipingNav) {
            isSwipingNav = false;
            sidebar.classList.add('smooth-transition');
            mainColumn.style.transform = '';
            mainColumn.style.filter = '';
            const threshold = drawerWidth * 0.5;

            if (!isNavOpen) {
                toggleNavDrawer(deltaX >= threshold);
            } else {
                toggleNavDrawer(!(Math.abs(deltaX) >= threshold && deltaX < 0));
            }
        }

        if (isSwipingStats) {
            isSwipingStats = false;
            telemetry.classList.add('smooth-transition');
            mainColumn.style.transform = '';
            mainColumn.style.opacity = '';
            if (sidebar) sidebar.style.transform = '';
            if (fabTelemetry) fabTelemetry.style.transform = '';
            const threshold = statsWidth * 0.5;

            if (!isTelemetryOpen) {
                toggleTelemetry(Math.abs(deltaX) >= threshold && deltaX < 0);
            } else {
                toggleTelemetry(!(deltaX >= threshold && deltaX > 0));
            }
        }
    }, { passive: true });
}

// -----------------------------------------------------------------------------
// 6. HIGHCHARTS MODULES
// -----------------------------------------------------------------------------
function initSpendEfficiencyChart() {
    const container = document.getElementById('chartSpendEfficiency');
    if (!container) return;

    Highcharts.chart('chartSpendEfficiency', {
        chart: { type: 'pie', backgroundColor: 'transparent', style: { fontFamily: 'Inter, sans-serif' } },
        title: { text: null },
        credits: { enabled: false },
        tooltip: {
            backgroundColor: '#250A26',
            borderColor: '#F2C94C',
            style: { color: '#FFFFFF' },
            formatter: function () {
                return `<strong>${this.point.name}</strong>: $${this.y.toLocaleString()} (${this.percentage.toFixed(1)}%)`;
            }
        },
        plotOptions: {
            pie: {
                innerSize: '65%',
                borderWidth: 0,
                borderRadius: 4,
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f}%',
                    style: { color: '#F1EBF2', fontSize: '11px', textOutline: 'none' }
                }
            }
        },
        series: [{
            name: 'Expenditure',
            data: [
                { name: 'Direct Program Spend (81.4%)', y: 246304.12, color: '#F2C94C' },
                { name: 'Operations & Administration (18.6%)', y: 56116.25, color: '#5B1B5D' }
            ]
        }]
    });
}

function initForecastProjectChart() {
    const container = document.getElementById('chartForecastProjects');
    if (!container) return;

    Highcharts.chart('chartForecastProjects', {
        chart: { type: 'column', backgroundColor: 'transparent', style: { fontFamily: 'Inter, sans-serif' } },
        title: { text: null },
        credits: { enabled: false },
        xAxis: {
            categories: ['2026 ($300k)', '2027 ($400k)', '2028 ($500k)', '2029 ($600k)'],
            labels: { style: { color: '#F1EBF2', fontFamily: 'Space Grotesk', fontWeight: '700' } },
            lineColor: 'rgba(242, 201, 76, 0.18)'
        },
        yAxis: {
            min: 0,
            title: { text: 'Capital Allocation (USD)', style: { color: '#C8BDCB' } },
            gridLineColor: 'rgba(242, 201, 76, 0.1)',
            labels: {
                formatter: function () { return '$' + (this.value / 1000) + 'k'; },
                style: { color: '#C8BDCB' }
            }
        },
        legend: {
            itemStyle: { color: '#F1EBF2', fontSize: '11px' },
            itemHoverStyle: { color: '#F2C94C' }
        },
        tooltip: {
            backgroundColor: '#250A26',
            borderColor: '#F2C94C',
            shared: true,
            style: { color: '#FFFFFF' }
        },
        plotOptions: {
            column: { stacking: 'normal', borderRadius: 4, borderWidth: 0 }
        },
        series: [
            { name: 'SheRISE (TVET & Cosmetology)', data: [90000, 110000, 130000, 150000], color: '#5B1B5D' },
            { name: 'Voices Uncut (SRHR & Dignity)', data: [80000, 100000, 120000, 140000], color: '#06B6D4' },
            { name: 'KUZA (Literacy TaRL Pilot)', data: [60000, 80000, 100000, 120000], color: '#10B981' },
            { name: 'Evidence Knowledge Hub & Systems', data: [70000, 110000, 150000, 190000], color: '#F2C94C' }
        ]
    });
}