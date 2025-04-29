// scroll-reveal.js
// Fade-in animation for elements on scroll

document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.apple-card, .work-card, .foodie-card');
  els.forEach(el => el.classList.add('animate-on-scroll'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  els.forEach(el => observer.observe(el));
});
