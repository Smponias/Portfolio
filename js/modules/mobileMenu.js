// mobileMenu.js
// Handles mobile menu toggle and closing
export function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');
  const links = document.querySelectorAll('.nav-link');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
  links.forEach(link => link.addEventListener('click', () => {
    toggle.classList.remove('active');
    nav.classList.remove('active');
  }));
  document.addEventListener('click', e => {
    if (!e.target.closest('.main-nav') && !e.target.closest('.mobile-menu-toggle') && nav.classList.contains('active')) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}
