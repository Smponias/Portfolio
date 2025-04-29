// darkMode.js
// Handles dark mode toggle, demo, and theme-color updates
export function initDarkMode() {
  const root = document.documentElement;
  const toggle = document.querySelector('.dark-mode-toggle');
  const saved = localStorage.getItem('darkMode');
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (saved === 'true' || (saved === null && prefers)) {
    enable();
  }
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      root.classList.contains('dark-mode') ? disable() : enable();
    });
  }
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('darkMode') === null) {
      e.matches ? enable() : disable();
    }
  });
  
  function enable() {
    root.classList.add('dark-mode-transition');
    setTimeout(() => {
      root.classList.add('dark-mode');
      updateToggleIcon(true);
      localStorage.setItem('darkMode', 'true');
      setTimeout(() => root.classList.remove('dark-mode-transition'), 500);
    }, 10);
  }
  function disable() {
    root.classList.add('dark-mode-transition');
    setTimeout(() => {
      root.classList.remove('dark-mode');
      updateToggleIcon(false);
      localStorage.setItem('darkMode', 'false');
      setTimeout(() => root.classList.remove('dark-mode-transition'), 500);
    }, 10);
  }
  function updateToggleIcon(isDark) {
    const sun = document.querySelector('.toggle-icon.sun');
    const moon = document.querySelector('.toggle-icon.moon');
    if (sun) sun.style.display = isDark ? 'none' : 'block';
    if (moon) moon.style.display = isDark ? 'block' : 'none';
  }
}

export function initDarkModeDemo() {
  const toggle = document.querySelector('.demo-toggle');
  const screen = document.querySelector('.device-screen');
  const header = document.querySelector('.demo-header');
  const elems = document.querySelectorAll('.demo-element');
  if (!toggle || !screen) return;
  const isDark = document.documentElement.classList.contains('dark-mode');
  apply(isDark);
  toggle.addEventListener('click', () => apply(!screen.classList.contains('dark')));
  function apply(d) {
    screen.classList.toggle('dark', d);
    header.classList.toggle('dark', d);
    elems.forEach(el => el.classList.toggle('dark', d));
    toggle.classList.toggle('active', d);
  }
}

export function initThemeColorWatcher() {
  function updateThemeColor() {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = document.documentElement.classList.contains('dark-mode') ? '#000000' : '#ffffff';
  }
  updateThemeColor();
  const obs = new MutationObserver(muts => muts.forEach(m => {
    if (m.attributeName === 'class') updateThemeColor();
  }));
  obs.observe(document.documentElement, { attributes: true });
}
