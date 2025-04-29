// backToTop.js
// Handles the "Back to Top" button functionality
export function initBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('visible', window.scrollY > 500);
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
