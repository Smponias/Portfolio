document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Typing animation (no blinking caret)
  const words = ["App Developer", "UX Expert", "System Architect"];
  const typingElement = document.getElementById("typing");
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = isDeleting
      ? currentWord.substring(0, letterIndex - 1)
      : currentWord.substring(0, letterIndex + 1);

    typingElement.innerHTML = currentText || '&nbsp;';

    if (!isDeleting) {
      letterIndex++;
      if (letterIndex === currentWord.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1500);
        return;
      }
    } else {
      letterIndex--;
      if (letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    const delay = isDeleting ? 100 : 200;
    setTimeout(type, delay);
  }

  // Start typing
  type();

  // Fade-in effect for sections using IntersectionObserver
  const sections = document.querySelectorAll('.section-content');
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
