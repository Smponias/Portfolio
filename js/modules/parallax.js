// parallax.js
// Parallax scrolling and mouse movement effects, scroll reveal, and scroll indicator
export function initParallaxScroll() {
  const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-element, .parallax-card, .parallax-gallery');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach(element => {
      let speed = 0.1;
      if (element.classList.contains('parallax-bg')) speed = 0.5;
      else if (element.classList.contains('parallax-card')) speed = 0.15;
      else if (element.classList.contains('parallax-gallery')) speed = 0.2;
      const yOffset = scrollY * speed;
      if (element.classList.contains('parallax-bg')) element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      else element.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
    });
  });
}
export function initParallaxMouseMove() {
  const heroSection = document.querySelector('.hero-section');
  const heroContent = document.querySelector('.hero-content');
  const workCards = document.querySelectorAll('.work-card');
  const skillCategories = document.querySelectorAll('.skill-category');
  if (heroSection && heroContent) {
    heroSection.addEventListener('mousemove', e => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
      heroContent.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
    heroSection.addEventListener('mouseleave', () => {
      heroContent.style.transform = 'translate3d(0, 0, 0)';
    });
  }
  workCards.forEach(card => {
    const cardImage = card.querySelector('.work-image img');
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${y*5}deg) rotateY(${-x*5}deg) scale3d(1.02,1.02,1.02)`;
      if (cardImage) cardImage.style.transform = `translate3d(${x*10}px, ${y*10}px, 0) scale(1.1)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      if (cardImage) cardImage.style.transform = 'translate3d(0,0,0) scale(1)';
    });
  });
}
export function initScrollRevealAnimations() {
  const sections = document.querySelectorAll('section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  sections.forEach(section => { revealObserver.observe(section); section.classList.add('reveal-section'); });
}
export function initScrollIndicator() {
  const indicator = document.querySelector('.scroll-indicator');
  if (!indicator) return;
  window.addEventListener('scroll', () => indicator.classList.toggle('hidden', window.scrollY>100));
  indicator.addEventListener('click', () => {
    const about = document.querySelector('#about');
    if (about) window.scrollTo({ top: about.offsetTop-70, behavior: 'smooth' });
  });
}
