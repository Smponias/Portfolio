// skillsCarousel.js
// Manage skills carousel scroll and indicators
export function initSkillsCarousel() {
  const carousel = document.querySelector('.skills-carousel');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  const skillCategories = document.querySelectorAll('.skill-category');

  let currentIndex = 0;
  const itemWidth = skillCategories[0]?.offsetWidth + parseInt(getComputedStyle(skillCategories[0]).marginRight) || 0;

  function updateCarousel() {
    // Scroll carousel horizontally without affecting page scroll
    const target = skillCategories[currentIndex];
    const offsetLeft = target.offsetLeft - (carousel.clientWidth - target.offsetWidth) / 2;
    carousel.scrollTo({ left: offsetLeft, behavior: 'smooth' });
    indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === currentIndex));
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; updateCarousel(); }
  });
  nextButton.addEventListener('click', () => {
    if (currentIndex < skillCategories.length - 1) { currentIndex++; updateCarousel(); }
  });
  indicators.forEach((ind, idx) => ind.addEventListener('click', () => { currentIndex = idx; updateCarousel(); }));

  // Initial indicator setup without scrolling
  indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === currentIndex));

  // Update indicators on manual horizontal scroll
  carousel.addEventListener('scroll', () => {
    const newIndex = Math.round(carousel.scrollLeft / itemWidth);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < skillCategories.length) {
      currentIndex = newIndex;
      indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === currentIndex));
    }
  });
}
