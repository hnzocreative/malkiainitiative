let currentForecastMode = 'budget';
let forecastChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    renderForecastChart('budget');
});

function switchForecastView(mode) {
    if (currentForecastMode === mode) return;
    currentForecastMode = mode;

    document.getElementById('btnViewBudget').classList.toggle('active', mode === 'budget');
    document.getElementById('btnViewGirls').classList.toggle('active', mode === 'girls');

    renderForecastChart(mode);
}

function renderForecastChart(mode) {
    const container = document.getElementById('chartForecastInteractive');
    if (!container) return;

    if (mode === 'budget') {
        forecastChartInstance = Highcharts.chart('chartForecastInteractive', {
            chart: { type: 'column', backgroundColor: 'transparent', style: { fontFamily: 'Inter, sans-serif' }, reflow: true },
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
                { name: 'SheRISE (TVET & Toolkits)', data: [90000, 110000, 130000, 150000], color: '#5B1B5D' },
                { name: 'Voices Uncut (SRHR & Dignity)', data: [80000, 100000, 120000, 140000], color: '#06B6D4' },
                { name: 'KUZA (TaRL Literacy Bootcamps)', data: [60000, 80000, 100000, 120000], color: '#10B981' },
                { name: 'Evidence Knowledge Hub & Systems', data: [70000, 110000, 150000, 190000], color: '#F2C94C' }
            ]
        });
    } else {
        forecastChartInstance = Highcharts.chart('chartForecastInteractive', {
            chart: { type: 'spline', backgroundColor: 'transparent', style: { fontFamily: 'Inter, sans-serif' }, reflow: true },
            title: { text: null },
            credits: { enabled: false },
            xAxis: {
                categories: ['2026', '2027', '2028', '2029'],
                labels: { style: { color: '#F1EBF2', fontFamily: 'Space Grotesk', fontWeight: '700' } },
                lineColor: 'rgba(242, 201, 76, 0.18)'
            },
            yAxis: {
                min: 0,
                title: { text: 'Direct Beneficiaries Reached (Annual)', style: { color: '#C8BDCB' } },
                gridLineColor: 'rgba(242, 201, 76, 0.1)',
                labels: {
                    formatter: function () { return (this.value).toLocaleString(); },
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
                style: { color: '#FFFFFF' },
                formatter: function () {
                    return `<strong>${this.x} Projection:</strong> ${this.y.toLocaleString()} Girls Supported`;
                }
            },
            plotOptions: {
                spline: {
                    lineWidth: 3,
                    marker: { enabled: true, radius: 5 }
                }
            },
            series: [
                { name: 'Projected Adolescent Girls Reached', data: [4000, 5330, 6660, 8000], color: '#F2C94C' }
            ]
        });
    }

    setTimeout(() => {
        if (forecastChartInstance) forecastChartInstance.reflow();
    }, 100);
}