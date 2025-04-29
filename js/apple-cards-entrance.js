// Apple-style vertical converging entrance animation for highlight cards (all cards start below, triggers on scroll, slower)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.apple-cards-grid .apple-card');
  // Positive Y-offsets: cards start below final row (custom offsets per user request)
  const yOffsets = [0, 100, 150, 200];
  cards.forEach((card, i) => {
    const y = yOffsets[i % yOffsets.length];
    card.style.opacity = '1';
    card.style.transform = `translateY(${y}px) scale(0.98)`;
    card.style.filter = 'blur(8px)';
  });

  const animateCards = () => {
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.transition = 'opacity 1.5s cubic-bezier(.5,1.5,.5,1), transform 1.5s cubic-bezier(.5,1.5,.5,1), filter 1.5s cubic-bezier(.5,1.5,.5,1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        card.style.filter = 'blur(0)';
      }, 200 + i * 300);
    });
  };

  // Use IntersectionObserver to trigger animation on scroll
  const grid = document.querySelector('.apple-cards-grid');
  if (grid) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCards();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(grid);
  } else {
    // fallback: animate on load
    animateCards();
  }
});
