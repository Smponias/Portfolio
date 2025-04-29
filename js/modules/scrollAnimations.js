// scrollAnimations.js
// Import this module to initialize scroll reveal animations
export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.work-item, .skill-category, .food-gallery, .contact-content');
  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(element => {
    animationObserver.observe(element);
    element.classList.add('animate-on-scroll');
  });
}
