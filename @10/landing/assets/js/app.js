/**
 * Malkia @10 Landing Hub & Dynamic Village Detail Controller
 */

let villageDataCache = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchVillagesRegistry();
  initBackdropModalCloser();
});

// 1. Fetch Village Knowledge Registry
async function fetchVillagesRegistry() {
  const container = document.getElementById('villagesListContainer');
  if (!container) return;

  try {
    const res = await fetch('assets/data/villages.json');
    if (!res.ok) throw new Error('Data offline');
    villageDataCache = await res.json();
    renderVillagesList(villageDataCache);
  } catch (err) {
    console.error('Failed to load villages registry:', err);
    container.innerHTML = `
      <p style="color: var(--color-gold-100); font-size: 0.85rem; padding: 10px;">
        Unable to load village registries. Please ensure assets/data/villages.json exists.
      </p>
    `;
  }
}

// 2. Render Village Buttons Inside the Accordion
function renderVillagesList(villages) {
  const container = document.getElementById('villagesListContainer');
  container.innerHTML = '';

  villages.forEach((village) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'village-chip-btn';
    btn.innerHTML = `
      <span>${village.name}</span>
      <i class="ph-bold ph-arrow-right"></i>
    `;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVillageModal(village.id);
    });
    container.appendChild(btn);
  });
}

// 3. Populate and Open Modal
window.openVillageModal = function(villageId) {
  const modal = document.getElementById('villageModal');
  const village = villageDataCache.find(v => v.id === villageId);
  if (!modal || !village) return;

  document.getElementById('vName').textContent = village.name;
  document.getElementById('vMeaning').textContent = `Meaning: ${village.meaning}`;
  document.getElementById('vDescription').textContent = village.description;
  document.getElementById('vBeneficiaries').textContent = Number(village.beneficiaries).toLocaleString();
  
  const imgEl = document.getElementById('vImage');
  imgEl.src = village.image || 'assets/images/logo.png';
  imgEl.alt = `${village.name} Community`;

  const mapBtn = document.getElementById('vMapLink');
  mapBtn.href = village.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(village.name + ' Kajiado Kenya')}`;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
};

window.closeVillageModal = function() {
  const modal = document.getElementById('villageModal');
  if (modal && typeof modal.close === 'function') {
    modal.close();
  }
};

// 4. Close Modal on Backdrop Click
function initBackdropModalCloser() {
  const modal = document.getElementById('villageModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      window.closeVillageModal();
    }
  });
}