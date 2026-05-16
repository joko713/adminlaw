/* Confetti micro-celebration on correct quiz answers
   + small global enhancements: keyboard shortcuts, scroll-into-view-when-card-opens.
   Loaded as plain JS after the React app mounts. */

(function () {
  const COLORS = ['#2c4a7a', '#8a5b1c', '#3f5e2b', '#9b3919', '#5a3266', '#d9a945'];

  function burst(originX, originY) {
    const stage = document.createElement('div');
    stage.className = 'confetti-stage';
    document.body.appendChild(stage);
    const N = 28;
    for (let i = 0; i < N; i++) {
      const s = document.createElement('span');
      const angle = (Math.PI * (i / N)) - Math.PI / 2;
      const dist = 80 + Math.random() * 220;
      const dx = Math.cos(angle) * dist + (Math.random() - 0.5) * 80;
      s.style.setProperty('--x', dx + 'px');
      s.style.left = (originX || window.innerWidth / 2) + 'px';
      s.style.top = (originY || window.innerHeight / 3) + 'px';
      s.style.background = COLORS[i % COLORS.length];
      s.style.animationDelay = (Math.random() * .15) + 's';
      s.style.transform = `rotate(${Math.random() * 360}deg)`;
      stage.appendChild(s);
    }
    setTimeout(() => stage.remove(), 2000);
  }

  // Watch for quiz-correct: a button receives the .correct class -> burst near it.
  const obs = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === 'attributes' && m.attributeName === 'class') {
        const el = m.target;
        if (el.classList && el.classList.contains('correct') &&
            !el.dataset.burst) {
          el.dataset.burst = '1';
          const r = el.getBoundingClientRect();
          burst(r.left + r.width / 2, r.top + r.height / 2);
          setTimeout(() => { delete el.dataset.burst; }, 1500);
        }
      }
    }
  });
  // Defer attaching until DOM has content
  setTimeout(() => {
    obs.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['class'],
    });
  }, 800);

  // Keyboard shortcuts: 1–5 switch sidebar modes, ←/→ navigate weeks
  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const modes = document.querySelectorAll('nav.modes .mode-btn');
    if (e.key >= '1' && e.key <= '9' && modes.length) {
      const i = parseInt(e.key, 10) - 1;
      if (modes[i]) { modes[i].click(); e.preventDefault(); }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const weeks = Array.from(document.querySelectorAll('.week-list .week-btn'));
      const idx = weeks.findIndex(w => w.classList.contains('active'));
      if (idx >= 0) {
        const next = e.key === 'ArrowLeft' ? Math.max(0, idx - 1)
                                            : Math.min(weeks.length - 1, idx + 1);
        if (weeks[next]) { weeks[next].click(); e.preventDefault(); }
      }
    }
    // F = flip flashcard
    if (e.key === 'f' || e.key === 'F') {
      const card = document.querySelector('.flash-card');
      if (card) card.click();
    }
  });

  // Subtle parallax on memory pegs as you mousemove (very gentle)
  let raf = null;
  document.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      const dx = (e.clientX / window.innerWidth - 0.5) * 4;
      const dy = (e.clientY / window.innerHeight - 0.5) * 4;
      document.documentElement.style.setProperty('--peg-tilt-x', dx + 'px');
      document.documentElement.style.setProperty('--peg-tilt-y', dy + 'px');
    });
  });
})();
