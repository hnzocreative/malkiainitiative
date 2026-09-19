/**
 * Malkia Corporate - UNGA 2026 Executive Engine
 * Dual-Axis Highchart, Auto-Scrolling Stat Carousels & Tier Simulator
 */

// -----------------------------------------------------------------------------
// 1. Instant Lifecycle Bootloader
// -----------------------------------------------------------------------------
function bootUngaPage() {
  // 1. Boot carousels immediately and independently
  try {
    initAutoScrollCarousels();
  } catch (err) {
    console.error("Carousel init error:", err);
  }

  // 2. Boot simulator
  try {
    const defaultTierBtn =
      document.querySelector(".tier-chip.active") ||
      document.querySelector(".tier-chip");
    if (defaultTierBtn) selectUngaTier(defaultTierBtn);
  } catch (err) {
    console.error("Tier simulator error:", err);
  }

  // 3. Boot Highcharts
  try {
    initUngaJourneyChart();
  } catch (err) {
    console.error("Chart init error:", err);
  }
}

// Ensure execution whether script runs before or after DOM readiness
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootUngaPage);
} else {
  bootUngaPage();
}

// -----------------------------------------------------------------------------
// 2. Instant Auto-Scrolling Carousel Engine
// -----------------------------------------------------------------------------
const carouselIntervals = {};
const CAROUSEL_SPEED_MS = 3000; // 3-second transition loop

function initAutoScrollCarousels() {
  const carousels = ["focus", "achieve", "future"];

  carousels.forEach((id, index) => {
    const wrap = document.querySelector(`[data-carousel="${id}"]`);
    if (!wrap) return;

    // Ensure at least one slide has the active class initially
    const slides = wrap.querySelectorAll(".stat-slide");
    if (slides.length > 0 && !wrap.querySelector(".stat-slide.active")) {
      slides[0].classList.add("active");
    }

    // Start the rotation loop immediately (staggered by 350ms across the 3 cards)
    setTimeout(() => {
      startCarouselLoop(id);
    }, index * 350);

    // Hover / touch pause handlers
    wrap.addEventListener("mouseenter", () => stopCarouselLoop(id));
    wrap.addEventListener("mouseleave", () => startCarouselLoop(id));
    wrap.addEventListener("touchstart", () => stopCarouselLoop(id), {
      passive: true,
    });
    wrap.addEventListener("touchend", () => startCarouselLoop(id), {
      passive: true,
    });
  });
}

function startCarouselLoop(id) {
  if (carouselIntervals[id]) clearInterval(carouselIntervals[id]);
  carouselIntervals[id] = setInterval(() => {
    advanceSlide(id, 1);
  }, CAROUSEL_SPEED_MS);
}

function stopCarouselLoop(id) {
  if (carouselIntervals[id]) {
    clearInterval(carouselIntervals[id]);
    carouselIntervals[id] = null;
  }
}

function manualRotateSlide(id, direction) {
  stopCarouselLoop(id);
  advanceSlide(id, direction);
  startCarouselLoop(id);
}

function advanceSlide(carouselId, direction) {
  const wrap = document.querySelector(`[data-carousel="${carouselId}"]`);
  if (!wrap) return;

  const slides = Array.from(wrap.querySelectorAll(".stat-slide"));
  if (slides.length <= 1) return;

  let currentIndex = slides.findIndex((s) => s.classList.contains("active"));

  // Fallback if none was marked active
  if (currentIndex === -1) currentIndex = 0;

  let nextIndex = currentIndex + direction;
  if (nextIndex >= slides.length) nextIndex = 0;
  if (nextIndex < 0) nextIndex = slides.length - 1;

  // Transition out current slide
  slides[currentIndex].classList.remove("active");
  slides[currentIndex].classList.add(
    direction > 0 ? "exit-left" : "exit-right",
  );

  // Transition in target slide
  slides[nextIndex].classList.remove("exit-left", "exit-right");
  slides[nextIndex].classList.add("active");

  // Clean up exit helper classes
  setTimeout(() => {
    slides[currentIndex].classList.remove("exit-left", "exit-right");
  }, 450);
}

// -----------------------------------------------------------------------------
// 3. Highcharts Dual-Axis Engine
// -----------------------------------------------------------------------------
function initUngaJourneyChart() {
  const chartContainer = document.getElementById("ungaJourneyChart");
  if (!chartContainer || typeof Highcharts === "undefined") return;

  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark" ||
    (!document.documentElement.getAttribute("data-theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  Highcharts.chart("ungaJourneyChart", {
    chart: {
      backgroundColor: "transparent",
      style: { fontFamily: "'Space Grotesk', -apple-system, sans-serif" },
    },
    title: { text: null },
    credits: { enabled: false },
    xAxis: {
      categories: [
        "2016",
        "2018",
        "2020",
        "2022",
        "2024",
        "2025",
        "2026",
        "2027",
        "2028",
        "2029",
      ],
      labels: { style: { color: isDark ? "#C8BDCB" : "#766579" } },
      lineColor: isDark ? "rgba(242, 201, 76, 0.2)" : "rgba(91, 27, 93, 0.15)",
    },
    yAxis: [
      {
        // Primary Axis: Cumulative Reach (Area)
        title: {
          text: "Cumulative Girls Reached",
          style: { color: isDark ? "#FFFFFF" : "#250A26" },
        },
        labels: {
          formatter: function () {
            return this.value.toLocaleString();
          },
          style: { color: isDark ? "#C8BDCB" : "#766579" },
        },
        gridLineColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.05)",
      },
      {
        // Secondary Axis: Financing Ask in USD (Column)
        title: {
          text: "Financing Need (USD)",
          style: { color: "#F2C94C" },
        },
        labels: {
          formatter: function () {
            return "$" + this.value / 1000 + "k";
          },
          style: { color: "#F2C94C" },
        },
        opposite: true,
        gridLineWidth: 0,
      },
    ],
    tooltip: {
      shared: true,
      backgroundColor: isDark ? "#421444" : "#FFFFFF",
      borderColor: isDark ? "rgba(242, 201, 76, 0.3)" : "rgba(91, 27, 93, 0.2)",
      style: { color: isDark ? "#FFFFFF" : "#250A26" },
    },
    plotOptions: {
      column: {
        borderRadius: 4,
        pointWidth: 18,
      },
    },
    series: [
      {
        name: "Cumulative Lives Reached",
        type: "area",
        yAxis: 0,
        color: "#5B1B5D",
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "rgba(91, 27, 93, 0.7)"],
            [1, "rgba(91, 27, 93, 0.02)"],
          ],
        },
        data: [0, 800, 2365, 12000, 23467, 26009, 29000, 37000, 43000, 50200],
      },
      {
        name: "Annual Capital Need (USD)",
        type: "column",
        yAxis: 1,
        color: "#F2C94C",
        data: [
          null,
          null,
          null,
          null,
          null,
          310002,
          300000,
          400000,
          500000,
          600000,
        ],
      },
    ],
  });
}

// -----------------------------------------------------------------------------
// 4. Sponsorship Simulator
// -----------------------------------------------------------------------------
const TARGET_1000_DAYS_GIRLS = 12000;

function selectUngaTier(button) {
  if (!button) return;

  document
    .querySelectorAll(".tier-chip")
    .forEach((c) => c.classList.remove("active"));
  button.classList.add("active");

  const girls = parseInt(button.getAttribute("data-girls"), 10);
  const amount = parseInt(button.getAttribute("data-amount"), 10);

  const dispAmount = document.getElementById("dispUngaAmount");
  const dispGirls = document.getElementById("dispUngaGirls");
  const btnLabel = document.getElementById("btnPledgeLabel");
  const impactBox = document.getElementById("dispUngaImpact");
  const avatarGrid = document.getElementById("ungaAvatarGrid");
  const goalPct = document.getElementById("dispGoalPct");
  const goalBar = document.getElementById("dispGoalBar");

  if (dispAmount) dispAmount.textContent = `$${amount.toLocaleString()} USD`;
  if (dispGirls)
    dispGirls.textContent = `Sponsors ${girls} Adolescent Queen${girls > 1 ? "s" : ""}`;
  if (btnLabel)
    btnLabel.textContent = `Underwrite ${girls} Girl${girls > 1 ? "s" : ""} ($${amount.toLocaleString()})`;

  if (impactBox) {
    if (girls === 1) {
      impactBox.textContent =
        "Guarantees 12 months of emergency boarding sanctuary, menstrual dignity kits, and academic retention coaching.";
    } else if (girls === 10) {
      impactBox.textContent =
        "Provides an entire community study group with continuous sanitary toolkits and peer-to-peer leadership mentorship.";
    } else if (girls === 20) {
      impactBox.textContent =
        "Underwrites 1 full rural classroom with safe boarding accommodation, nutritious meals, and foundational numeracy facilitators.";
    } else if (girls === 50) {
      impactBox.textContent =
        "Establishes a localized Crown Club assembly network and supports 5 teen mothers back into technical TVET enterprise tracks.";
    } else {
      impactBox.textContent =
        "Sustains a multi-ward school boarding wing, completely eliminating walk-to-school assault hazards for 100 students.";
    }
  }

  if (avatarGrid) {
    avatarGrid.innerHTML = "";
    const iconsCount = Math.min(girls, 50);
    for (let i = 0; i < iconsCount; i++) {
      const icon = document.createElement("span");
      icon.className = "girl-avatar-icon";
      icon.innerHTML = '<i class="ph-fill ph-user"></i>';
      avatarGrid.appendChild(icon);
    }
    if (girls > 50) {
      const moreLabel = document.createElement("span");
      moreLabel.style.fontSize = "0.78rem";
      moreLabel.style.fontWeight = "700";
      moreLabel.style.color = "var(--c-gold)";
      moreLabel.style.alignSelf = "center";
      moreLabel.textContent = `+${girls - 50} more`;
      avatarGrid.appendChild(moreLabel);
    }
  }

  const progressPct = ((girls / TARGET_1000_DAYS_GIRLS) * 100).toFixed(2);
  if (goalPct) goalPct.textContent = `${progressPct}% of 1,000-Day Target`;
  if (goalBar)
    goalBar.style.width = `${Math.max(2, Math.min(100, progressPct * 10))}%`;

  if (typeof adjustPledgeQty === "function") {
    pledgeQty = Math.min(20, girls);
    adjustPledgeQty(0);
  }
}

// -----------------------------------------------------------------------------
// 5. Dialog Modal Controls
// -----------------------------------------------------------------------------
function openUngaDialog(dialogId) {
  const dlg = document.getElementById(dialogId);
  if (dlg && typeof dlg.showModal === "function") {
    dlg.showModal();
  }
}

function closeUngaDialog(dialogId) {
  const dlg = document.getElementById(dialogId);
  if (dlg) {
    dlg.close();
  }
}
