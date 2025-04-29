// navigation.js
// Handles header shadow, active nav links, and smooth scroll
export function initNavigation() {
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section').forEach(section => {
      const top = section.offsetTop;
      if (top <= scrollPos && top + section.offsetHeight > scrollPos) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    });
  });
}
