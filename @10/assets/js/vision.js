/**
 * Strategic Vision 2029 Controller
 * Unit Investment Calculator Engine, Dynamic Payment Matrix, 
 * Accordion Physics & Highcharts Interactive Funding Visualizer
 */

let currentCalculatedCount = 1;
let rampChart = null;

document.addEventListener('DOMContentLoaded', () => {
    initInvestmentCalculator();
    initPillarAccordions();
    handlePaymentChannelChange();
    initFundingRampChart();
});

// -----------------------------------------------------------------------------
// 1. HIGHCHARTS INTERACTIVE FUNDING RAMP
// -----------------------------------------------------------------------------
const chartColors = {
    purple: '#4A154B',
    purpleDeep: '#2A092B',
    gold: '#F2C94C',
    cyan: '#0E8E89',
    bone: '#F7F5F0',
    border: '#E8E2D8'
};

function initFundingRampChart() {
    const container = document.getElementById('fundingRampChartContainer');
    if (!container) return;

    rampChart = Highcharts.chart('fundingRampChartContainer', {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            style: { fontFamily: 'Inter, sans-serif' },
            spacing: [16, 8, 16, 8]
        },
        title: { text: null },
        credits: { enabled: false },
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '700',
                    fontSize: '13px',
                    color: '#4A154B'
                }
            },
            lineColor: '#E8E2D8',
            tickColor: '#E8E2D8'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Funding Allocation (USD)',
                style: { color: '#5C555E', fontSize: '12px' }
            },
            labels: {
                formatter: function () {
                    return '$' + (this.value / 1000) + 'k';
                },
                style: { color: '#5C555E' }
            },
            gridLineDashStyle: 'Dash',
            gridLineColor: '#E8E2D8'
        },
        legend: {
            align: 'center',
            verticalAlign: 'top',
            itemStyle: {
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '600',
                fontSize: '12px',
                color: '#4A154B'
            }
        },
        tooltip: {
            useHTML: true,
            backgroundColor: 'transparent',
            borderWidth: 0,
            shadow: false,
            formatter: function () {
                if (this.point.drilldown) {
                    return `
                        <div class="custom-chart-tooltip">
                            <div class="tooltip-title">${this.point.name} Total: $${this.y.toLocaleString()}</div>
                            <div class="tooltip-metric"><span>Pillar 1 (Prog):</span> <strong>72%</strong></div>
                            <div class="tooltip-metric"><span>Pillar 2 (Research):</span> <strong>15%</strong></div>
                            <div class="tooltip-metric"><span>Pillar 3 (Gov):</span> <strong>13%</strong></div>
                            <div class="tooltip-note">Click bar to drill down into programmatic items</div>
                        </div>
                    `;
                }
                return `
                    <div class="custom-chart-tooltip">
                        <div class="tooltip-title">${this.series.name}</div>
                        <div class="tooltip-metric"><span>Allocation:</span> <strong>$${this.y.toLocaleString()}</strong></div>
                        <div class="tooltip-note">Click "Back" to return to 5-year overview</div>
                    </div>
                `;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderRadius: 4,
                borderWidth: 0,
                cursor: 'pointer'
            },
            series: {
                animation: { duration: 600 }
            }
        },
        // Stacked Series: Pillar 1 (72%), Pillar 2 (15%), Pillar 3 (13%)
        series: [
            {
                name: 'Pillar 1: Programs (72%)',
                color: chartColors.purple,
                data: [
                    { name: '2025 (Y1)', y: 144000, drilldown: 'y1-details' },
                    { name: '2026 (Y2)', y: 216000, drilldown: 'y2-details' },
                    { name: '2027 (Y3)', y: 288000, drilldown: 'y3-details' },
                    { name: '2028 (Y4)', y: 360000, drilldown: 'y4-details' },
                    { name: '2029 (Y5)', y: 432000, drilldown: 'y5-details' }
                ]
            },
            {
                name: 'Pillar 2: Research (15%)',
                color: chartColors.cyan,
                data: [
                    { name: '2025 (Y1)', y: 30000, drilldown: 'y1-details' },
                    { name: '2026 (Y2)', y: 45000, drilldown: 'y2-details' },
                    { name: '2027 (Y3)', y: 60000, drilldown: 'y3-details' },
                    { name: '2028 (Y4)', y: 75000, drilldown: 'y4-details' },
                    { name: '2029 (Y5)', y: 90000, drilldown: 'y5-details' }
                ]
            },
            {
                name: 'Pillar 3: Governance (13%)',
                color: chartColors.gold,
                data: [
                    { name: '2025 (Y1)', y: 26000, drilldown: 'y1-details' },
                    { name: '2026 (Y2)', y: 39000, drilldown: 'y2-details' },
                    { name: '2027 (Y3)', y: 52000, drilldown: 'y3-details' },
                    { name: '2028 (Y4)', y: 65000, drilldown: 'y4-details' },
                    { name: '2029 (Y5)', y: 78000, drilldown: 'y5-details' }
                ]
            }
        ],
        // Drilldown sub-allocations
        drilldown: {
            activeDataLabelStyle: { textDecoration: 'none', color: '#FFFFFF' },
            breadcrumbs: {
                position: { align: 'right' },
                buttonTheme: {
                    fill: chartColors.purple,
                    stroke: 'none',
                    style: { color: '#FFFFFF', fontFamily: 'Space Grotesk', fontWeight: '700' },
                    states: { hover: { fill: chartColors.purpleDeep } }
                }
            },
            series: [
                {
                    id: 'y1-details',
                    name: '2025 Program Details ($200k Total)',
                    data: [
                        ['SRHR & YouthWyze', 60000],
                        ['Menstrual Dignity Kits', 40000],
                        ['Survivor Rehabilitation', 44000],
                        ['TaRL & Evidence Pilot', 30000],
                        ['Institutional Systems', 26000]
                    ]
                },
                {
                    id: 'y2-details',
                    name: '2026 Program Details ($300k Total)',
                    data: [
                        ['Malkia@10 Campaign Deployments', 90000],
                        ['Girls Assembly Hubs', 70000],
                        ['Scholarships & Transition', 56000],
                        ['Evidence Knowledge Hub', 45000],
                        ['Governance & Audits', 39000]
                    ]
                },
                {
                    id: 'y3-details',
                    name: '2027 Program Details ($400k Total)',
                    data: [
                        ['Cross-County Outreach', 120000],
                        ['Safe Dormitory Expansions', 95000],
                        ['Vocational MNP Cosmetology', 73000],
                        ['Mid-Term Evaluation Hub', 60000],
                        ['Leadership Systems', 52000]
                    ]
                },
                {
                    id: 'y4-details',
                    name: '2028 Program Details ($500k Total)',
                    data: [
                        ['Olgulului Center Operations', 160000],
                        ['Scale To 20,000 Girls', 120000],
                        ['Alternative Rites Barazas', 80000],
                        ['Policy Shadow Submissions', 75000],
                        ['Strategic Endowment Seed', 65000]
                    ]
                },
                {
                    id: 'y5-details',
                    name: '2029 Program Details ($600k Total)',
                    data: [
                        ['Pan-Pastoral Sovereignty Hub', 200000],
                        ['Full Cohort Retention Fund', 140000],
                        ['Regional TVET Networks', 92000],
                        ['Final Evaluation & Dissemination', 90000],
                        ['Permanent Capital Reserve', 78000]
                    ]
                }
            ]
        }
    });
}

// Interactive Mode Switcher
function switchChartMode(mode) {
    if (!rampChart) return;

    document.querySelectorAll('.btn-chart-mode').forEach(b => {
        b.classList.toggle('active', b.dataset.mode === mode);
    });

    if (mode === 'stacked') {
        rampChart.update({
            chart: { type: 'column' },
            yAxis: {
                title: { text: 'Funding Allocation (USD)' },
                labels: { formatter: function () { return '$' + (this.value / 1000) + 'k'; } }
            },
            plotOptions: { column: { stacking: 'normal' } },
            series: [
                {
                    name: 'Pillar 1: Programs (72%)',
                    color: chartColors.purple,
                    data: [
                        { name: '2025 (Y1)', y: 144000, drilldown: 'y1-details' },
                        { name: '2026 (Y2)', y: 216000, drilldown: 'y2-details' },
                        { name: '2027 (Y3)', y: 288000, drilldown: 'y3-details' },
                        { name: '2028 (Y4)', y: 360000, drilldown: 'y4-details' },
                        { name: '2029 (Y5)', y: 432000, drilldown: 'y5-details' }
                    ]
                },
                {
                    name: 'Pillar 2: Research (15%)',
                    color: chartColors.cyan,
                    data: [
                        { name: '2025 (Y1)', y: 30000, drilldown: 'y1-details' },
                        { name: '2026 (Y2)', y: 45000, drilldown: 'y2-details' },
                        { name: '2027 (Y3)', y: 60000, drilldown: 'y3-details' },
                        { name: '2028 (Y4)', y: 75000, drilldown: 'y4-details' },
                        { name: '2029 (Y5)', y: 90000, drilldown: 'y5-details' }
                    ]
                },
                {
                    name: 'Pillar 3: Governance (13%)',
                    color: chartColors.gold,
                    data: [
                        { name: '2025 (Y1)', y: 26000, drilldown: 'y1-details' },
                        { name: '2026 (Y2)', y: 39000, drilldown: 'y2-details' },
                        { name: '2027 (Y3)', y: 52000, drilldown: 'y3-details' },
                        { name: '2028 (Y4)', y: 65000, drilldown: 'y4-details' },
                        { name: '2029 (Y5)', y: 78000, drilldown: 'y5-details' }
                    ]
                }
            ]
        }, true, true);
    } else if (mode === 'cumulative') {
        rampChart.update({
            chart: { type: 'area' },
            yAxis: {
                title: { text: 'Cumulative Capital Target (USD)' },
                labels: { formatter: function () { return '$' + (this.value / 1000) + 'k'; } }
            },
            plotOptions: { area: { stacking: null } },
            series: [{
                name: 'Cumulative Capital Target',
                color: chartColors.purple,
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'rgba(74, 21, 75, 0.7)'],
                        [1, 'rgba(74, 21, 75, 0.05)']
                    ]
                },
                data: [
                    { name: '2025 (Y1)', y: 200000 },
                    { name: '2026 (Y2)', y: 500000 },
                    { name: '2027 (Y3)', y: 900000 },
                    { name: '2028 (Y4)', y: 1400000 },
                    { name: '2029 (Y5)', y: 2000000 }
                ]
            }]
        }, true, true);
    } else if (mode === 'girls') {
        rampChart.update({
            chart: { type: 'spline' },
            yAxis: {
                title: { text: 'Cumulative Girls Reached' },
                labels: { formatter: function () { return this.value.toLocaleString(); } }
            },
            plotOptions: { spline: { marker: { enabled: true, radius: 6, fillColor: chartColors.gold } } },
            series: [{
                name: 'Direct Beneficiary Agency Trajectory',
                color: chartColors.cyan,
                data: [
                    { name: '2025 (Y1)', y: 3000 },
                    { name: '2026 (Y2)', y: 7500 },
                    { name: '2027 (Y3)', y: 14000 },
                    { name: '2028 (Y4)', y: 22500 },
                    { name: '2029 (Y5)', y: 32000 }
                ]
            }]
        }, true, true);
    }
}

// -----------------------------------------------------------------------------
// 2. CALCULATOR ENGINE
// -----------------------------------------------------------------------------
function initInvestmentCalculator() {
    const costPerGirl = 75;
    const presets = document.querySelectorAll('.btn-preset');
    const totalCostEl = document.getElementById('calcTotalCost');
    const totalGirlsEl = document.getElementById('calcTotalGirls');
    const impactNoteEl = document.getElementById('calcImpactNote');

    presets.forEach(btn => {
        btn.addEventListener('click', () => {
            presets.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCalculatedCount = parseInt(btn.dataset.count, 10) || 1;
            const total = currentCalculatedCount * costPerGirl;

            if (totalCostEl) totalCostEl.textContent = `$${total.toLocaleString()}`;
            if (totalGirlsEl) totalGirlsEl.textContent = `${currentCalculatedCount} Adolescent ${currentCalculatedCount === 1 ? 'Girl' : 'Girls'} Supported for 1 Month`;

            if (impactNoteEl) {
                if (currentCalculatedCount === 1) {
                    impactNoteEl.textContent = "Guarantees 12 months of sanitary towels, education retention, and mentorship.";
                } else if (currentCalculatedCount === 10) {
                    impactNoteEl.textContent = "Sponsors a complete secondary school mentorship circle and dignity kit distribution.";
                } else if (currentCalculatedCount === 50) {
                    impactNoteEl.textContent = "Underwrites an entire in-school Girls Assembly and community baraza protection circle.";
                } else if (currentCalculatedCount === 100) {
                    impactNoteEl.textContent = "Fully resources an institutional TVET vocational transition cohort at MNP.";
                }
            }
        });
    });
}

// -----------------------------------------------------------------------------
// 3. MODAL & PAYMENT GATEWAY TIER CONTROL
// -----------------------------------------------------------------------------
function openPledgeModal(preselectedCount = 1) {
    const dialog = document.getElementById('bigIdeaDialog');
    if (!dialog) return;

    if (preselectedCount > 10) {
        const visaRadio = document.querySelector('input[name="paymentChannel"][value="visa"]');
        if (visaRadio) visaRadio.checked = true;
    }

    handlePaymentChannelChange();

    const targetTierInput = document.querySelector(`input[name="selectedTier"][value="${preselectedCount}"]`);
    if (targetTierInput && !targetTierInput.closest('.tier-option').classList.contains('disabled')) {
        targetTierInput.checked = true;
    }

    dialog.showModal();
}

function handlePaymentChannelChange() {
    const selectedChannel = document.querySelector('input[name="paymentChannel"]:checked')?.value || 'mpesa';
    const tier50 = document.getElementById('tierOption50');
    const tier100 = document.getElementById('tierOption100');
    const inputLabel = document.getElementById('channelInputLabel');
    const inputField = document.getElementById('channelInputValue');

    if (selectedChannel === 'mpesa') {
        tier50.classList.add('disabled');
        tier100.classList.add('disabled');

        const activeTier = document.querySelector('input[name="selectedTier"]:checked')?.value;
        if (activeTier === '50' || activeTier === '100') {
            document.querySelector('input[name="selectedTier"][value="10"]').checked = true;
        }

        if (inputLabel) inputLabel.textContent = "M-PESA Mobile Number";
        if (inputField) inputField.placeholder = "e.g. 0712345678";
    } else {
        tier50.classList.remove('disabled');
        tier100.classList.remove('disabled');

        if (inputLabel) inputLabel.textContent = "Cardholder Email (for invoice)";
        if (inputField) inputField.placeholder = "donor@foundation.org";
    }
}

function handlePledgeSubmit(e) {
    e.preventDefault();
    const cadence = document.querySelector('input[name="pledgeCadence"]:checked').value;
    const channel = document.querySelector('input[name="paymentChannel"]:checked').value;
    const tier = document.querySelector('input[name="selectedTier"]:checked').value;

    alert(`Pledge Initialized:\n• Tier: ${tier} Girl(s) ($${tier * 75})\n• Schedule: ${cadence}\n• Gateway: ${channel.toUpperCase()}\n\nRedirecting to secure authorization gateway...`);
    closeBigIdeaModal();
}

// -----------------------------------------------------------------------------
// 4. PILLAR DELIVERABLES ACCORDION SPRING PHYSICS
// -----------------------------------------------------------------------------
function initPillarAccordions() {
    const items = document.querySelectorAll('.pillar-deliverable-item');
    items.forEach(item => {
        const summary = item.querySelector('.pillar-deliverable-summary');
        const content = item.querySelector('.pillar-deliverable-desc');
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
            }, { duration: 300, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

            content.animate({ opacity: [1, 0] }, { duration: 180, easing: 'ease' });

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
            }, { duration: 400, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });

            content.animate({
                opacity: [0, 1],
                transform: ['translateY(-4px)', 'translateY(0px)']
            }, { duration: 300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });

            animation.onfinish = () => {
                item.style.height = '';
                animation = null;
                isExpanding = false;
            };
        }
    });
}