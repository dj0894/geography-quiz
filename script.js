const screens = [...document.querySelectorAll('.screen')];
const levelCards = [...document.querySelectorAll('.level-card')];
const homeScreen = document.getElementById('homeScreen');
const quizScreen = document.getElementById('quizScreen');
const learnScreen = document.getElementById('learnScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const resultScreen = document.getElementById('resultScreen');
const answerArea = document.getElementById('answerArea');
const feedbackText = document.getElementById('feedbackText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const mapDialog = document.getElementById('mapDialog');

const QUIZ_LENGTH = 10;
let state = {
  level: 'easy', questions: [], index: 0, score: 0, streak: 0, lives: 3,
  answered: false, sound: true, learnIndex: 0
};
let map;
let geoLayer;

const defaultProgress = {
  totalQuestions: 0,
  correctAnswers: 0,
  bestStreak: 0,
  learnedCountries: [],
  mistakes: {}
};
let progress = loadProgress();

function loadProgress() {
  try { return { ...defaultProgress, ...JSON.parse(localStorage.getItem('geoQuestProgress') || '{}') }; }
  catch { return { ...defaultProgress }; }
}
function saveProgress() { localStorage.setItem('geoQuestProgress', JSON.stringify(progress)); }
function showScreen(screen) {
  screens.forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
}
function beep(type = 'good') {
  if (!state.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = type === 'good' ? 660 : 220;
  gain.gain.setValueAtTime(.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .25);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + .25);
}

function startQuiz(level) {
  state.level = level;
  const pool = COUNTRIES.filter(c => c.level === level);
  state.questions = shuffle(pool).slice(0, QUIZ_LENGTH);
  state.index = 0; state.score = 0; state.streak = 0; state.lives = 3; state.answered = false;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  if (state.index >= state.questions.length || state.lives <= 0) return finishQuiz();
  const q = state.questions[state.index];
  state.answered = false;
  document.getElementById('countryName').textContent = q.country;
  document.getElementById('flagDisplay').textContent = q.flag;
  document.getElementById('levelBadge').textContent = state.level[0].toUpperCase() + state.level.slice(1);
  feedbackText.textContent = '';
  feedbackText.className = 'feedback';
  nextQuestionBtn.classList.add('hidden');
  updateStatus();
  answerArea.innerHTML = '';

  if (state.level === 'hard') {
    const wrap = document.createElement('div');
    wrap.className = 'hard-answer';
    const input = document.createElement('input');
    input.type = 'text'; input.placeholder = 'Type the capital…'; input.autocomplete = 'off'; input.autocapitalize = 'words';
    const submit = document.createElement('button');
    submit.className = 'primary-button'; submit.textContent = 'Check Answer';
    submit.addEventListener('click', () => checkTypedAnswer(input.value));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') checkTypedAnswer(input.value); });
    wrap.append(input, submit); answerArea.appendChild(wrap); input.focus();
  } else {
    const optionPool = COUNTRIES.filter(c => c.capital !== q.capital);
    const distractors = state.level === 'medium'
      ? shuffle(optionPool.filter(c => c.continent === q.continent)).slice(0, 3)
      : shuffle(optionPool).slice(0, 3);
    const options = shuffle([q.capital, ...distractors.map(d => d.capital)]);
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'answer-button'; btn.textContent = option;
      btn.addEventListener('click', () => checkChoice(option, btn));
      answerArea.appendChild(btn);
    });
  }
}

function checkChoice(answer, button) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  document.querySelectorAll('.answer-button').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.capital) btn.classList.add('correct');
  });
  if (answer === q.capital) handleCorrect();
  else { button.classList.add('wrong'); handleWrong(); }
}

function checkTypedAnswer(answer) {
  if (state.answered || !answer.trim()) return;
  state.answered = true;
  const q = state.questions[state.index];
  const acceptedAnswers = [q.capital, ...(q.aliases || [])];
  const correct = acceptedAnswers.some(value => normalize(answer) === normalize(value));
  answerArea.querySelectorAll('input,button').forEach(el => el.disabled = true);
  correct ? handleCorrect() : handleWrong();
}

function handleCorrect() {
  const q = state.questions[state.index];
  state.streak += 1;
  state.score += 100 + Math.min(state.streak * 10, 100);
  progress.totalQuestions += 1;
  progress.correctAnswers += 1;
  progress.bestStreak = Math.max(progress.bestStreak, state.streak);
  if (!progress.learnedCountries.includes(q.country)) progress.learnedCountries.push(q.country);
  saveProgress();
  feedbackText.textContent = state.streak >= 3 ? `Amazing! ${state.streak} in a row! 🔥` : 'Correct! Great job! 🎉';
  feedbackText.className = 'feedback good';
  beep('good');
  nextQuestionBtn.classList.remove('hidden');
  updateStatus();
}

function handleWrong() {
  const q = state.questions[state.index];
  state.streak = 0; state.lives -= 1;
  progress.totalQuestions += 1;
  progress.mistakes[q.country] = (progress.mistakes[q.country] || 0) + 1;
  saveProgress();
  feedbackText.textContent = `Oops! The capital is ${q.capital}.`;
  feedbackText.className = 'feedback bad';
  beep('bad');
  nextQuestionBtn.classList.remove('hidden');
  updateStatus();
  setTimeout(() => openMap(q, `The capital of ${q.country} is ${q.capital}.`), 350);
}

function updateStatus() {
  document.getElementById('scoreValue').textContent = state.score;
  document.getElementById('streakValue').textContent = state.streak;
  document.getElementById('livesValue').textContent = '❤️'.repeat(Math.max(state.lives, 0)) + '🤍'.repeat(Math.max(3 - state.lives, 0));
  document.getElementById('progressBar').style.width = `${(state.index / state.questions.length) * 100}%`;
}

function finishQuiz() {
  document.getElementById('finalScore').textContent = state.score;
  const completed = Math.min(state.index, state.questions.length);
  const message = state.lives <= 0
    ? `You explored ${completed} countries. Try again and beat your score!`
    : `You completed all ${state.questions.length} questions. Fantastic work!`;
  document.getElementById('resultMessage').textContent = message;
  showScreen(resultScreen);
}

nextQuestionBtn.addEventListener('click', () => { state.index += 1; renderQuestion(); });
levelCards.forEach(card => card.addEventListener('click', () => startQuiz(card.dataset.level)));
document.getElementById('quitQuizBtn').addEventListener('click', () => showScreen(homeScreen));
document.getElementById('playAgainBtn').addEventListener('click', () => startQuiz(state.level));
document.getElementById('resultHomeBtn').addEventListener('click', () => showScreen(homeScreen));

document.getElementById('soundToggle').addEventListener('click', e => {
  state.sound = !state.sound;
  e.currentTarget.textContent = state.sound ? '🔊' : '🔇';
});

function renderLearn() {
  const q = COUNTRIES[state.learnIndex % COUNTRIES.length];
  document.getElementById('learnFlag').textContent = q.flag;
  document.getElementById('learnContinent').textContent = q.continent;
  document.getElementById('learnCountry').textContent = q.country;
  document.getElementById('learnCapital').textContent = q.capital;
  if (!progress.learnedCountries.includes(q.country)) {
    progress.learnedCountries.push(q.country); saveProgress();
  }
}
document.getElementById('learnModeBtn').addEventListener('click', () => { state.learnIndex = Math.floor(Math.random() * COUNTRIES.length); renderLearn(); showScreen(learnScreen); });
document.getElementById('nextLearnBtn').addEventListener('click', () => { state.learnIndex = (state.learnIndex + 1) % COUNTRIES.length; renderLearn(); });
document.getElementById('showLearnMapBtn').addEventListener('click', () => {
  const q = COUNTRIES[state.learnIndex % COUNTRIES.length]; openMap(q, `${q.country} is in ${q.continent}. Its capital is ${q.capital}.`);
});
document.getElementById('backFromLearnBtn').addEventListener('click', () => showScreen(homeScreen));

function renderDashboard() {
  document.getElementById('statQuestions').textContent = progress.totalQuestions;
  document.getElementById('statAccuracy').textContent = progress.totalQuestions ? `${Math.round(progress.correctAnswers / progress.totalQuestions * 100)}%` : '0%';
  document.getElementById('statStreak').textContent = progress.bestStreak;
  document.getElementById('statCountries').textContent = progress.learnedCountries.length;
  const list = document.getElementById('practiceList'); list.innerHTML = '';
  const mistakes = Object.entries(progress.mistakes).sort((a,b) => b[1]-a[1]).slice(0, 8);
  if (!mistakes.length) list.textContent = 'No mistakes yet — keep exploring!';
  else mistakes.forEach(([country, count]) => {
    const chip = document.createElement('span'); chip.className = 'practice-chip'; chip.textContent = `${country} (${count})`; list.appendChild(chip);
  });
}
document.getElementById('dashboardBtn').addEventListener('click', () => { renderDashboard(); showScreen(dashboardScreen); });
document.getElementById('backFromDashboardBtn').addEventListener('click', () => showScreen(homeScreen));
document.getElementById('resetProgressBtn').addEventListener('click', () => {
  if (confirm('Reset all saved quiz progress?')) { progress = { ...defaultProgress, learnedCountries: [], mistakes: {} }; saveProgress(); renderDashboard(); }
});

async function openMap(country, caption) {
  document.getElementById('mapDialogTitle').textContent = country.country;
  document.getElementById('mapCaption').textContent = caption;
  mapDialog.showModal();
  setTimeout(() => {
    if (!map) {
      map = L.map('map', { zoomControl: true, attributionControl: true }).setView([country.lat, country.lng], 3);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 8,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
    }
    map.invalidateSize();
    map.setView([country.lat, country.lng], country.code === 'USA' || country.code === 'CAN' || country.code === 'AUS' ? 3 : 4);
    if (geoLayer) { map.removeLayer(geoLayer); geoLayer = null; }
    highlightCountry(country);
  }, 100);
}

async function highlightCountry(country) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${country.code}`);
    const data = await response.json();
    const borders = data[0]?.borders;
    L.circleMarker([country.lat, country.lng], {
      radius: 18, color: '#ef5b70', fillColor: '#ffcf5a', fillOpacity: .85, weight: 5
    }).addTo(map).bindPopup(`<strong>${country.country}</strong><br>Capital: ${country.capital}`).openPopup();
    if (borders) {
      // The marker is always shown; country outline is loaded below from a public GeoJSON dataset.
      const geoResponse = await fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson');
      const geoData = await geoResponse.json();
      const feature = geoData.features.find(f => f.properties.ISO_A3 === country.code || f.properties['ISO3166-1-Alpha-3'] === country.code || f.properties.ADMIN === country.country);
      if (feature) {
        geoLayer = L.geoJSON(feature, { style: { color: '#5b35d5', weight: 4, fillColor: '#ffcf5a', fillOpacity: .55 } }).addTo(map);
        map.fitBounds(geoLayer.getBounds(), { padding: [30, 30], maxZoom: 5 });
      }
    }
  } catch {
    L.circleMarker([country.lat, country.lng], { radius: 18, color: '#5b35d5', fillColor: '#ffcf5a', fillOpacity: .85, weight: 5 })
      .addTo(map).bindPopup(`<strong>${country.country}</strong><br>Capital: ${country.capital}`).openPopup();
  }
}

document.getElementById('closeMapBtn').addEventListener('click', () => mapDialog.close());
mapDialog.addEventListener('click', e => { if (e.target === mapDialog) mapDialog.close(); });
