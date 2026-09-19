let pledgeQty = 1;
const UNIT_USD = 75;
const FX_RATE_KES = 130; // 1 USD ~ 130 KES benchmark

const pledgeDialog = document.getElementById('pledgeDialog');

function openPledgeModal() {
    if (pledgeDialog) pledgeDialog.showModal();
}

function closePledgeModal() {
    if (pledgeDialog) pledgeDialog.close();
}

function closePledgeOnBackdrop(e) {
    if (e.target === pledgeDialog) closePledgeModal();
}

function adjustPledgeQty(delta) {
    pledgeQty = Math.max(1, Math.min(20, pledgeQty + delta));
    document.getElementById('pledgeQtyDisplay').textContent = pledgeQty;

    const totalUsd = pledgeQty * UNIT_USD;
    const totalKes = (totalUsd * FX_RATE_KES).toLocaleString();

    const labelText = pledgeQty === 1 ? '1 Girl' : `${pledgeQty} Girls`;
    document.getElementById('pledgeSummaryText').textContent = `${labelText} • $${totalUsd} USD (~KES ${totalKes})`;
    document.getElementById('mpesaKesTotal').textContent = `KES ${totalKes}`;
    document.getElementById('btnCardSubmitText').textContent = `Complete $${totalUsd} USD Pledge`;
}

function switchGatewayTab(type) {
    const tabMpesa = document.getElementById('tabMpesa');
    const tabCard = document.getElementById('tabCard');
    const panelMpesa = document.getElementById('panelMpesa');
    const panelCard = document.getElementById('panelCard');

    if (type === 'mpesa') {
    tabMpesa.classList.add('active');
    tabCard.classList.remove('active');
    panelMpesa.classList.add('active');
    panelCard.classList.remove('active');
    } else {
    tabCard.classList.add('active');
    tabMpesa.classList.remove('active');
    panelCard.classList.add('active');
    panelMpesa.classList.remove('active');
    }
}