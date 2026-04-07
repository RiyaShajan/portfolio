/* ── Data ── */
const SKILLS = [
  { name: 'HTML', icon: '🌐', desc: 'Semantic markup & accessibility' },
  { name: 'CSS', icon: '🎨', desc: 'Modern layouts & animations' },
  { name: 'JavaScript', icon: '⚡', desc: 'Interactive web apps' },
  { name: 'Python', icon: '🐍', desc: 'Scripting & automation' },
  { name: 'C', icon: '⚙️', desc: 'Systems programming' },
  { name: 'Java', icon: '☕', desc: 'Object-oriented development' },
];

const PROJECTS = [
  { title: 'Calculator', desc: 'A fully functional calculator with keyboard support and a clean interface.', url: 'https://odin-calculator-rust.vercel.app/', tag: 'JS · CSS' },
  { title: 'Etch-a-Sketch', desc: 'A pixel drawing board with adjustable grid size, color modes, and eraser.', url: 'https://odin-etch-a-sketch-eight.vercel.app/', tag: 'JS · DOM' },
  { title: 'Rock Paper Scissors', desc: 'The classic game with score tracking, animated results, and polished UI.', url: 'http://odin-rockpaperscissors.vercel.app/', tag: 'JS · CSS' },
];

/* ── Render Skills ── */
const skillsGrid = document.getElementById('skills-grid');
SKILLS.forEach(s => {
  const card = document.createElement('div');
  card.className = 'glow-card skill-card fade-up';
  card.innerHTML = `<div class="icon">${s.icon}</div><h3>${s.name}</h3><p class="desc">${s.desc}</p>`;
  skillsGrid.appendChild(card);
});

/* ── Render Projects ── */
const projectsList = document.getElementById('projects-list');
PROJECTS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'glow-card project-card fade-up';
  card.innerHTML = `
    <div class="project-info">
      <div class="title-row">
        <h3>${p.title}</h3>
        <span class="project-tag">${p.tag}</span>
      </div>
      <p>${p.desc}</p>
    </div>
    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
      View <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
    </a>`;
  projectsList.appendChild(card);
});

/* ── Year ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Typing Animation ── */
(function () {
  const text = 'I build clean and interactive web experiences';
  const el = document.getElementById('tagline');
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      el.innerHTML = text.slice(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        el.innerHTML = text;
      }
    }, 50);
  }, 1000);
})();

/* ── Smooth scroll ── */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('open');
}

/* ── Mobile menu toggle ── */
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

/* ── Active section tracking ── */
const sections = ['about', 'skills', 'projects', 'contact'];
const navButtons = document.querySelectorAll('.nav-links button');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', sections[i] === id);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* ── Scroll reveal ── */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      const parent = entry.target.closest('.section, .hero');
      const siblings = parent ? parent.querySelectorAll('.fade-up') : [entry.target];
      const index = Array.from(siblings).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), index * 100);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
