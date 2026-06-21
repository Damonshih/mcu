/* ═══════════════════════════════════════════════════════════
   NetMCQ — app.js
   Quiz logic: mode selection, question rendering, scoring,
   progress tracking, explanation display, dark/light toggle
   ═══════════════════════════════════════════════════════════ */

'use strict';

// ── State ──────────────────────────────────────────────────
const state = {
  mode: 'all',
  questions: [],
  current: 0,
  correct: 0,
  wrong: 0,
  answered: false,
};

// ── Theme toggle ────────────────────────────────────────────
(function initTheme() {
  const html = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');

  // Default from system preference
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.setAttribute('data-theme', theme);
  updateToggleIcon(toggle, theme);

  if (!toggle) return;
  toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    updateToggleIcon(toggle, theme);
  });
})();

function updateToggleIcon(btn, theme) {
  if (!btn) return;
  btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
  }
}

// ── Category labels ─────────────────────────────────────────
const CATEGORY_LABELS = {
  basics:   'Network Basics',
  ch6:      'Link Layer',
  mac:      'MAC Addressing',
  ethernet: 'Ethernet',
  arp:      'ARP',
  error:    'Error Detection',
  switch:   'Switches',
  vlan:     'VLAN',
  mpls:     'MPLS',
};

const LETTERS = ['A', 'B', 'C', 'D'];

// ── Init: update question count on home ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Show total count
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = QUESTIONS.length;

  // Update mode card counts dynamically
  updateModeCounts();
});

function updateModeCounts() {
  const counts = {};
  QUESTIONS.forEach(q => {
    counts[q.category] = (counts[q.category] || 0) + 1;
  });

  // Update any [data-mode-count] attributes
  document.querySelectorAll('[data-mode-count]').forEach(el => {
    const cat = el.getAttribute('data-mode-count');
    if (counts[cat]) el.textContent = counts[cat];
  });
}

// ── Build question set ───────────────────────────────────────
function buildQuestionSet(mode) {
  let pool;
  if (mode === 'all') {
    pool = [...QUESTIONS];
  } else if (mode === 'random') {
    const shuffled = shuffle([...QUESTIONS]);
    pool = shuffled.slice(0, 20);
  } else {
    // Support multi-category modes
    const modeMap = {
      ch6:  ['ch6'],
      basics: ['basics'],
      mac:  ['mac', 'arp', 'ethernet'],
      error: ['error'],
      switch: ['switch', 'vlan'],
    };
    const cats = modeMap[mode] || [mode];
    pool = QUESTIONS.filter(q => cats.includes(q.category));
    if (pool.length === 0) pool = [...QUESTIONS];
  }
  return shuffle(pool);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Start quiz ───────────────────────────────────────────────
function startQuiz(mode) {
  state.mode = mode;
  state.questions = buildQuestionSet(mode);
  state.current = 0;
  state.correct = 0;
  state.wrong = 0;
  state.answered = false;

  showScreen('quizScreen');
  document.getElementById('scoreDisplay').style.display = 'flex';
  renderQuestion();
}

// ── Render current question ──────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) { endQuiz(); return; }

  state.answered = false;

  // Progress
  const total = state.questions.length;
  const idx = state.current + 1;
  const pct = ((state.current) / total) * 100;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = idx + ' / ' + total;
  document.getElementById('miniScore').innerHTML =
    `<span style="color:var(--color-success)">✓ ${state.correct}</span>&nbsp;&nbsp;<span style="color:var(--color-error)">✗ ${state.wrong}</span>`;

  // Header score
  document.getElementById('scoreLabel').textContent = state.correct + ' / ' + (state.correct + state.wrong);

  // Question meta
  const tag = document.getElementById('questionTag');
  tag.textContent = CATEGORY_LABELS[q.category] || q.category;
  document.getElementById('questionNum').textContent = 'Q' + idx;
  document.getElementById('questionText').textContent = q.question;

  // Options
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';

  // Shuffle option indices for display
  const optionOrder = shuffle([0, 1, 2, 3]);

  optionOrder.forEach((origIdx, displayPos) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('data-orig', origIdx);
    btn.innerHTML = `
      <span class="option-letter">${LETTERS[displayPos]}</span>
      <span class="option-text">${q.options[origIdx]}</span>
    `;
    btn.addEventListener('click', () => handleAnswer(origIdx, optionOrder));
    grid.appendChild(btn);
  });

  // Hide explanation & next btn
  const expBox = document.getElementById('explanationBox');
  expBox.style.display = 'none';
  expBox.classList.remove('correct-state');
  document.getElementById('nextBtn').style.display = 'none';

  // Animate card
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}

// ── Handle answer ────────────────────────────────────────────
function handleAnswer(chosenIdx, optionOrder) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.current];
  const isCorrect = (chosenIdx === q.answer);

  if (isCorrect) state.correct++;
  else state.wrong++;

  // Update mini score immediately
  document.getElementById('miniScore').innerHTML =
    `<span style="color:var(--color-success)">✓ ${state.correct}</span>&nbsp;&nbsp;<span style="color:var(--color-error)">✗ ${state.wrong}</span>`;
  document.getElementById('scoreLabel').textContent = state.correct + ' / ' + (state.correct + state.wrong);

  // Style all buttons
  const grid = document.getElementById('optionsGrid');
  const buttons = grid.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const orig = parseInt(btn.getAttribute('data-orig'));
    if (orig === q.answer) {
      btn.classList.add('correct');
    } else if (orig === chosenIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Show explanation
  const expBox = document.getElementById('explanationBox');
  expBox.style.display = 'block';

  if (isCorrect) {
    expBox.classList.add('correct-state');
    document.getElementById('expIcon').textContent = '✅';
    document.getElementById('expTitle').textContent = 'Correct! 答對了';
    document.getElementById('expCorrect').textContent = '';
    document.getElementById('expText').textContent = q.explanation || '';
  } else {
    expBox.classList.remove('correct-state');
    document.getElementById('expIcon').textContent = '❌';
    document.getElementById('expTitle').textContent = 'Incorrect — 答錯了';
    document.getElementById('expCorrect').textContent = '✓ 正確答案：' + q.options[q.answer];
    document.getElementById('expText').textContent = q.explanation || '';
  }

  // Show next button
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'flex';

  const isLast = state.current === state.questions.length - 1;
  nextBtn.textContent = isLast ? '查看結果 →' : 'Next Question →';
}

// ── Next question ────────────────────────────────────────────
function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
    // Scroll back to top of card on mobile
    document.getElementById('questionCard').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ── End quiz / show results ──────────────────────────────────
function endQuiz() {
  const total = state.correct + state.wrong;
  const pct = total > 0 ? Math.round((state.correct / total) * 100) : 0;

  document.getElementById('scoreBig').textContent = state.correct + ' / ' + total;
  document.getElementById('scorePct').textContent = pct + '%';
  document.getElementById('statCorrect').textContent = state.correct;
  document.getElementById('statWrong').textContent = state.wrong;
  document.getElementById('statTotal').textContent = total;

  // Emoji + message
  let emoji, msg;
  if (pct >= 90) {
    emoji = '🏆';
    msg = '太厲害了！滿分就在眼前。繼續保持！';
  } else if (pct >= 75) {
    emoji = '🎉';
    msg = '表現優秀！再多練習幾題就能達到滿分。';
  } else if (pct >= 60) {
    emoji = '👍';
    msg = '不錯的成績！建議回頭複習答錯的題目。';
  } else if (pct >= 40) {
    emoji = '📚';
    msg = '繼續加油！多複習 PPT 重點，再試一次看看。';
  } else {
    emoji = '💪';
    msg = '別灰心，熟能生巧！從 Link Layer 基礎開始練習。';
  }

  document.getElementById('resultsEmoji').textContent = emoji;
  document.getElementById('resultsTitle').textContent = 'Quiz Complete!';
  document.getElementById('resultsMsg').textContent = msg;

  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('scoreDisplay').style.display = 'none';

  showScreen('resultsScreen');
}

// ── Retry ────────────────────────────────────────────────────
function retryQuiz() {
  startQuiz(state.mode);
}

// ── Go home ──────────────────────────────────────────────────
function goHome() {
  showScreen('homeScreen');
  document.getElementById('scoreDisplay').style.display = 'none';
  document.getElementById('progressFill').style.width = '0%';

  // Update total count in case it wasn't set
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = QUESTIONS.length;
}

// ── Screen management ────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ── Keyboard navigation ──────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (document.getElementById('quizScreen').classList.contains('active')) {
    if (state.answered) {
      // Enter or Space → next question
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextQuestion();
      }
    } else {
      // 1-4 or A-D to select option
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3,
                       'a': 0, 'b': 1, 'c': 2, 'd': 3,
                       'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      if (e.key in keyMap) {
        const displayPos = keyMap[e.key];
        const buttons = document.querySelectorAll('.option-btn');
        if (buttons[displayPos]) buttons[displayPos].click();
      }
    }
  }
});
