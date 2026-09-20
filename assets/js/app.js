/**
 * Malkia Corporate Global UI Engine
 * Theme Controller, Drawer Canvas Transforms & Core Telemetry
 */
let isNavOpen = false;
let isTelemetryOpen = false;

const sidebar = document.getElementById("corporateSidebar");
const mainColumn = document.getElementById("corporateMain");
const telemetry = document.getElementById("corporateTelemetryDrawer");
const backdrop = document.getElementById("corporateBackdrop");

document.addEventListener("DOMContentLoaded", () => {
  initThemeState();
  loadTelemetryData();
});

// 1. THEME SWITCHER
function initThemeState() {
  const savedTheme = localStorage.getItem("malkia_theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const activeTheme = savedTheme || (systemDark ? "dark" : "light");
  applyTheme(activeTheme);
}

function setManualTheme(theme) {
  localStorage.setItem("malkia_theme", theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btnLight = document.getElementById("btnThemeLight");
  const btnDark = document.getElementById("btnThemeDark");
  if (btnLight && btnDark) {
    btnLight.classList.toggle("active", theme === "light");
    btnDark.classList.toggle("active", theme === "dark");
  }
}

// 2. DRAWER TRANSFORMS
function toggleNavDrawer(forceState = null) {
  if (window.innerWidth >= 1024) return;
  isNavOpen = forceState !== null ? forceState : !isNavOpen;
  if (sidebar) sidebar.classList.toggle("open", isNavOpen);
  if (mainColumn) mainColumn.classList.toggle("shifted-right", isNavOpen);
  if (isNavOpen && isTelemetryOpen) toggleTelemetry(false);
  if (backdrop)
    backdrop.classList.toggle("active", isNavOpen || isTelemetryOpen);
}

function toggleTelemetry(forceState) {
  const drawer = document.getElementById("corporateTelemetryDrawer");
  const mainStage = document.getElementById("corporateMain");
  const sidebarEl = document.getElementById("corporateSidebar");
  const backdrop = document.getElementById("corporateBackdrop");
  if (!drawer || !backdrop) return;

  const isOpen = drawer.classList.contains("open");
  const nextState = typeof forceState === "boolean" ? forceState : !isOpen;

  drawer.classList.toggle("open", nextState);
  backdrop.classList.toggle("active", nextState);

  // Push both the main column and the aside navigation off-canvas to the left
  if (mainStage) mainStage.classList.toggle("shifted-left", nextState);
  if (sidebarEl) sidebarEl.classList.toggle("shifted-left", nextState);

  document.body.style.overflow = nextState ? "hidden" : "";
  isTelemetryOpen = nextState;
}

function closeAllDrawers() {
  if (isNavOpen) toggleNavDrawer(false);
  if (isTelemetryOpen) toggleTelemetry(false);
}

// -----------------------------------------------------------------------------
// 3. TELEMETRY HYDRATION
// -----------------------------------------------------------------------------
// function loadTelemetryData() {
//     const wrap = document.getElementById('telemetryCountersWrap');
//     if (!wrap) return;

//     fetch('/data/telemetry.json')
//         .then(res => res.json())
//         .then(data => {
//             wrap.innerHTML = data.metrics.map(m => `
//                 <div class="bento-card telemetry-metric-card">
//                     <div class="telemetry-metric-val">${m.value}</div>
//                     <div class="telemetry-metric-lbl">${m.label}</div>
//                 </div>
//             `).join('');
//         })
//         .catch(() => {
//             wrap.innerHTML = `
//                 <div class="bento-card telemetry-metric-card">
//                     <div class="telemetry-metric-val">26,009</div>
//                     <div class="telemetry-metric-lbl">Active Proof</div>
//                 </div>
//             `;
//         });
// }

function adjustPledgeQty(delta) {
  pledgeQty = Math.max(1, Math.min(20, pledgeQty + delta));
  document.getElementById("pledgeQtyDisplay").textContent = pledgeQty;
  const totalUsd = pledgeQty * UNIT_USD;
  const totalKes = (totalUsd * FX_RATE_KES).toLocaleString();
  const label = pledgeQty === 1 ? "1 Girl" : `${pledgeQty} Girls`;
  document.getElementById("pledgeSummaryText").textContent =
    `${label} • $${totalUsd} USD (~KES ${totalKes})`;
  document.getElementById("mpesaKesTotal").textContent = `KES ${totalKes}`;
  document.getElementById("btnCardSubmitText").textContent =
    `Complete $${totalUsd} USD Pledge`;
}

function switchGatewayTab(type) {
  document
    .getElementById("tabMpesa")
    .classList.toggle("active", type === "mpesa");
  document
    .getElementById("tabCard")
    .classList.toggle("active", type === "card");
  document
    .getElementById("panelMpesa")
    .classList.toggle("active", type === "mpesa");
  document
    .getElementById("panelCard")
    .classList.toggle("active", type === "card");
}

// -----------------------------------------------------------------------------
// 5. MOBILE GESTURE SWIPE CONTROLLERS (PHYSICS & 60% RULE)
// -----------------------------------------------------------------------------
let dragStartX = 0;
let dragStartY = 0;
let activeDragTarget = null;
let dragElementWidth = 0;
let isDragging = false;

document.addEventListener(
  "touchstart",
  (e) => {
    if (window.innerWidth >= 1024) return; // Only execute on mobile views

    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;

    // Identify intended drawer based on current state or edge proximity (30px buffer)
    if (isNavOpen) {
      activeDragTarget = "sidebar";
      dragElementWidth = sidebar.offsetWidth;
    } else if (isTelemetryOpen) {
      activeDragTarget = "telemetry";
      dragElementWidth = telemetry.offsetWidth;
    } else if (dragStartX < 30) {
      activeDragTarget = "sidebar";
      // Fallback calculation if element is completely off-DOM
      dragElementWidth =
        sidebar.offsetWidth || Math.min(300, window.innerWidth * 0.82);
    } else if (dragStartX > window.innerWidth - 30) {
      activeDragTarget = "telemetry";
      dragElementWidth =
        telemetry.offsetWidth || Math.min(440, window.innerWidth * 0.88);
    } else {
      activeDragTarget = null;
    }
  },
  { passive: true },
);

document.addEventListener(
  "touchmove",
  (e) => {
    if (!activeDragTarget || window.innerWidth >= 1024) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - dragStartX;
    const diffY = currentY - dragStartY;

    // Detect intentional horizontal swipe vs vertical scrolling
    if (!isDragging) {
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isDragging = true;
        // Disable CSS transitions for 1:1 instantaneous finger tracking
        [sidebar, telemetry, mainColumn, backdrop].forEach((el) => {
          if (el) el.style.transition = "none";
        });
      } else if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 10) {
        activeDragTarget = null; // Abort: user is scrolling vertically
        return;
      }
    }

    if (isDragging) {
      e.preventDefault(); // Lock vertical scrolling while swiping sideways
      let progress = 0;

      if (activeDragTarget === "sidebar") {
        // Bounding box logic to prevent dragging past limits
        let boundedX = isNavOpen
          ? Math.max(-dragElementWidth, Math.min(0, diffX))
          : Math.max(-dragElementWidth, Math.min(0, -dragElementWidth + diffX));

        progress = 1 - Math.abs(boundedX) / dragElementWidth;

        // Apply 1:1 physics transforms
        if (sidebar) sidebar.style.transform = `translateX(${boundedX}px)`;
        if (mainColumn) {
          mainColumn.style.transform = `translateX(${progress * dragElementWidth}px) scale(${1 - 0.04 * progress})`;
          mainColumn.style.filter = `blur(${progress * 1}px)`;
        }
        if (backdrop) {
          backdrop.style.opacity = progress;
          backdrop.classList.add("active");
        }
      } else if (activeDragTarget === "telemetry") {
        let boundedX = isTelemetryOpen
          ? Math.max(0, Math.min(dragElementWidth, diffX))
          : Math.max(0, Math.min(dragElementWidth, dragElementWidth + diffX));

        progress = 1 - boundedX / dragElementWidth;

        if (telemetry) telemetry.style.transform = `translateX(${boundedX}px)`;

        // Apply parallel physics to both Main Stage and Sidebar
        [mainColumn, sidebar].forEach((el) => {
          if (el) {
            el.style.transform = `translateX(${-progress * dragElementWidth}px) scale(${1 - 0.04 * progress})`;
            el.style.filter = `blur(${progress * 2}px)`;
            el.style.pointerEvents = "none";
          }
        });

        if (backdrop) {
          backdrop.style.opacity = progress;
          backdrop.classList.add("active");
        }
      }
    }
  },
  { passive: false },
); // Passive: false allows us to use e.preventDefault() safely

document.addEventListener("touchend", (e) => {
  if (!isDragging) {
    activeDragTarget = null;
    return;
  }

  const diffX = e.changedTouches[0].clientX - dragStartX;
  const dragPercentage = Math.abs(diffX) / dragElementWidth;

  // Clear inline styles so the CSS classes and `--spring` transitions can take over
  [sidebar, telemetry, mainColumn, backdrop].forEach((el) => {
    if (el) {
      el.style.transition = "";
      el.style.transform = "";
      el.style.filter = "";
      el.style.opacity = "";
      el.style.pointerEvents = "";
    }
  });

  // 60% Rule Evaluation
  if (dragPercentage > 0.6) {
    // Toggle to new state if threshold met
    if (activeDragTarget === "sidebar") {
      toggleNavDrawer(!isNavOpen);
    } else if (activeDragTarget === "telemetry") {
      toggleTelemetry(!isTelemetryOpen);
    }
  } else {
    // Snap back to original state if threshold failed
    if (activeDragTarget === "sidebar") {
      toggleNavDrawer(isNavOpen);
    } else if (activeDragTarget === "telemetry") {
      toggleTelemetry(isTelemetryOpen);
    }
  }

  isDragging = false;
  activeDragTarget = null;
});

// =============================================================================
// GLOBAL MODAL / DIALOG CONTROLLER (ES6 + NATIVE HTML5 DIALOG)
// =============================================================================

/**
 * Universal Dialog Opener
 * @param {string} dialogId - The ID of the <dialog> element
 * @param {Object} [params={}] - Optional parameters (e.g. { amount: 1500, qty: 20 })
 */
window.openDialog = function (dialogId, params = {}) {
  const dlg = document.getElementById(dialogId);
  if (!dlg) {
    console.warn(`[DialogEngine] No dialog found with ID: #${dialogId}`);
    return;
  }

  if (typeof dlg.showModal === "function") {
    // Prevent background scroll
    document.body.style.overflow = "hidden";

    // Handle pledge amount and quantity updates dynamically if targeting pledgeDialog
    if (dialogId === "pledgeDialog") {
      if (params.qty && typeof window.adjustPledgeQty === "function") {
        window.pledgeQty = parseInt(params.qty, 10);
        window.adjustPledgeQty(0);
      }
      if (params.amount) {
        const amountEl =
          dlg.querySelector("#pledgeModalAmount") ||
          dlg.querySelector(".disp-pledge-amount");
        if (amountEl) {
          amountEl.textContent = `$${parseInt(params.amount, 10).toLocaleString()}`;
        }
      }
    }

    dlg.showModal();
  } else {
    // Fallback for older browsers without native <dialog>
    dlg.setAttribute("open", "");
  }
};

/**
 * Universal Dialog Closer
 * @param {string} dialogId - The ID of the <dialog> element
 */
window.closeDialog = function (dialogId) {
  const dlg = document.getElementById(dialogId);
  if (!dlg) return;

  if (typeof dlg.close === "function") {
    dlg.close();
  } else {
    dlg.removeAttribute("open");
  }

  // Restore body scroll only if all dialogs are closed
  const anyOpen = document.querySelector("dialog[open]");
  if (!anyOpen && !window.isTelemetryOpen && !window.isNavOpen) {
    document.body.style.overflow = "";
  }
};

/**
 * Dedicated Pledge Modal Shortcut (Preserves backward compatibility with homepage buttons)
 * @param {number|string} [amount]
 * @param {number} [qty]
 */
window.openPledgeModal = function (amount, qty) {
  window.openDialog("pledgeDialog", { amount, qty });
};

window.closePledgeModal = function () {
  window.closeDialog("pledgeDialog");
};

// =============================================================================
// GLOBAL EVENT DELEGATION FOR DIALOGS & BACKDROP CLICKS
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Close modal on outside backdrop click
  document
    .querySelectorAll(
      "dialog.pledge-dialog, dialog.action-dialog-styled, dialog.corporate-dialog",
    )
    .forEach((dlg) => {
      dlg.addEventListener("click", (e) => {
        const rect = dlg.getBoundingClientRect();
        const isInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          window.closeDialog(dlg.id);
        }
      });

      // Ensure body scrolling restores when Escape key is pressed
      dlg.addEventListener("close", () => {
        const anyOpen = document.querySelector("dialog[open]");
        if (!anyOpen && !window.isTelemetryOpen && !window.isNavOpen) {
          document.body.style.overflow = "";
        }
      });
    });

  // 2. Delegate [data-dialog-trigger] clicks
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-dialog-trigger]");
    if (trigger) {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-dialog-trigger");
      const amount = trigger.getAttribute("data-dialog-amount");
      const qty = trigger.getAttribute("data-dialog-qty");
      window.openDialog(targetId, { amount, qty });
    }

    const closeBtn = e.target.closest("[data-dialog-close]");
    if (closeBtn) {
      e.preventDefault();
      const dlg = closeBtn.closest("dialog");
      if (dlg) window.closeDialog(dlg.id);
    }
  });
});
