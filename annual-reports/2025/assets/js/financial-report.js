document.addEventListener('DOMContentLoaded', () => {
      initSpendDonut();
      initRevenueGrowthChart();
    });

    function initSpendDonut() {
      const container = document.getElementById('chartSpendEfficiency');
      if (!container) return;

      Highcharts.chart('chartSpendEfficiency', {
        chart: { 
          type: 'pie', 
          backgroundColor: 'transparent', 
          style: { fontFamily: 'Inter, sans-serif' },
          reflow: true
        },
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
            { name: 'Operations & Governance (18.6%)', y: 56116.25, color: '#5B1B5D' }
          ]
        }]
      });
    }

    function initRevenueGrowthChart() {
      const container = document.getElementById('chartRevenueGrowth');
      if (!container) return;

      const chart = Highcharts.chart('chartRevenueGrowth', {
        chart: { 
          type: 'areaspline', 
          backgroundColor: 'transparent', 
          style: { fontFamily: 'Inter, sans-serif' },
          reflow: true
        },
        title: { text: null },
        credits: { enabled: false },
        xAxis: {
          categories: ['2022', '2023', '2024', '2025'],
          labels: { style: { color: '#F1EBF2', fontFamily: 'Space Grotesk', fontWeight: '700' } },
          lineColor: 'rgba(242, 201, 76, 0.18)'
        },
        yAxis: {
          min: 0,
          title: { text: 'Revenue (USD)', style: { color: '#C8BDCB' } },
          gridLineColor: 'rgba(242, 201, 76, 0.1)',
          labels: {
            formatter: function () { return '$' + (this.value / 1000) + 'k'; },
            style: { color: '#C8BDCB' }
          }
        },
        legend: { enabled: false },
        tooltip: {
          backgroundColor: '#250A26',
          borderColor: '#F2C94C',
          style: { color: '#FFFFFF' },
          formatter: function () {
            return `<strong>${this.x} Total Revenue:</strong> $${this.y.toLocaleString()}`;
          }
        },
        plotOptions: {
          areaspline: {
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, 'rgba(242, 201, 76, 0.45)'],
                [1, 'rgba(242, 201, 76, 0.02)']
              ]
            },
            marker: { enabled: true, radius: 5, fillColor: '#F2C94C' },
            lineWidth: 3,
            lineColor: '#F2C94C'
          }
        },
        series: [{
          name: 'Annual Revenue',
          data: [142000, 198000, 254000, 310002]
        }]
      });

      // Force instant reflow once parent DOM dimensions stabilize
      setTimeout(() => {
        chart.reflow();
      }, 100);
    }