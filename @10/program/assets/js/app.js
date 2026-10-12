document.addEventListener('DOMContentLoaded', () => {
  fetchProgramTimeline();
});

async function fetchProgramTimeline() {
  try {
    const response = await fetch('assets/data/program.json');
    if (!response.ok) throw new Error('Data payload offline');
    const programData = await response.json();
    renderGroupedProgram(programData);
  } catch (error) {
    console.error('Failed to load program schema:', error);
    document.getElementById('chaptersRoot').innerHTML = `
      <p style="text-align: center; color: var(--color-purple-900);">
        Unable to load program data. Please confirm assets/data/program.json is accessible.
      </p>
    `;
  }
}

function renderGroupedProgram(chapters) {
  const container = document.getElementById('chaptersRoot');
  container.innerHTML = '';

  chapters.forEach((chapter, chapIndex) => {
    // 1. Build Master Outer Accordion for Chapter
    const chapterDetails = document.createElement('details');
    chapterDetails.className = 'chapter-group';
    if (chapIndex === 0) chapterDetails.open = true; // First chapter open by default

    const chapterSummary = document.createElement('summary');
    chapterSummary.className = 'chapter-summary';
    chapterSummary.innerHTML = `
      <div class="chapter-title-group">
        <span class="chapter-badge">${chapter.chapterNumber}</span>
        <div class="chapter-text">
          <h2>${chapter.chapterTitle}</h2>
          <span class="chapter-tagline">${chapter.chapterTagline} • ${chapter.timeSpan}</span>
        </div>
      </div>
      <span class="chapter-toggle-icon">+</span>
    `;
    chapterDetails.appendChild(chapterSummary);

    // 2. Build Chapter Content Body
    const chapterBody = document.createElement('div');
    chapterBody.className = 'chapter-content-body';

    chapter.items.forEach((item, itemIndex) => {
      if (item.isDivider) {
        const divider = document.createElement('div');
        divider.className = 'program-divider';
        divider.innerHTML = `
          <div class="divider-flex">
            <div class="divider-text">
              <span class="time-pill" style="background: rgba(255,255,255,0.2); color: #FFF;">${item.time}</span>
              <h4 style="margin-top: 6px;">${item.activity}</h4>
              <p>${item.description}</p>
            </div>
            <button class="divider-action-btn" onclick="openInteractiveModal('${chapter.chapterId}', ${itemIndex})">
              Participate
            </button>
          </div>
        `;
        chapterBody.appendChild(divider);
      } else {
        const innerDetails = document.createElement('details');
        innerDetails.className = 'inner-program-item';
        
        innerDetails.innerHTML = `
          <summary class="inner-summary">
            <div class="inner-meta-left">
              <span class="time-pill">${item.time}</span>
              <span>${item.activity}</span>
            </div>
            <span class="inner-indicator">+</span>
          </summary>
          <div class="inner-body">
            <p>${item.description}</p>
            <span class="lead-pill">Lead: ${item.responsible}</span>
          </div>
        `;
        
        // Attach spring animation to inner item
        attachPhysicsAccordion(innerDetails, '.inner-summary', '.inner-body', '.inner-program-item');
        chapterBody.appendChild(innerDetails);
      }
    });

    chapterDetails.appendChild(chapterBody);

    // Attach spring animation to outer chapter
    attachPhysicsAccordion(chapterDetails, '.chapter-summary', '.chapter-content-body', '.chapter-group');
    container.appendChild(chapterDetails);
  });

  window.cachedChapters = chapters;
}

/**
 * WAAPI Physics Animation Driver for Native Details/Summary
 */
function attachPhysicsAccordion(el, summarySelector, contentSelector, groupSelector) {
  const summary = el.querySelector(summarySelector);
  const content = el.querySelector(contentSelector);
  let animation = null;
  let isClosing = false;
  let isExpanding = false;

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (isClosing || !el.open) {
      // Auto-collapse siblings in the same container with physics
      if (groupSelector) {
        const parent = el.parentElement;
        const siblings = parent.querySelectorAll(`:scope > ${groupSelector}[open]`);
        siblings.forEach(sibling => {
          if (sibling !== el && sibling._shrinkAccordion) {
            sibling._shrinkAccordion();
          }
        });
      }
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
      duration: 320,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Crisp drop-away
    });

    // Fade out inner content slightly ahead of collapse
    content.animate({
      opacity: [1, 0]
    }, {
      duration: 200,
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
    // Expand height immediately to start calculation
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
      duration: 450,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)' // Spring snap curve
    });

    content.animate({
      opacity: [0, 1],
      transform: ['translateY(-6px)', 'translateY(0px)']
    }, {
      duration: 350,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
    });

    animation.onfinish = () => {
      el.style.height = '';
      animation = null;
      isExpanding = false;
    };
  }

  // Expose collapse callback for sibling mutual exclusivity
  el._shrinkAccordion = shrinkAccordion;
}

/* Modal Controller */
const modal = document.getElementById('interactiveModal');

window.openInteractiveModal = function(chapterId, itemIndex) {
  const chapter = window.cachedChapters.find(c => c.chapterId === chapterId);
  if (!chapter) return;
  const item = chapter.items[itemIndex];

  document.getElementById('modalTitle').innerText = item.activity;
  document.getElementById('modalPrompt').innerText = item.interactivePrompt || item.description;
  modal.showModal();
};

window.closeModal = function() {
  modal.close();
};

window.handleFormSubmit = function(e) {
  e.preventDefault();
  alert('Response submitted to the event screen!');
  closeModal();
  e.target.reset();
};