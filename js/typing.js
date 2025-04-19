/**
 * Typing Animation for Hero Section
 * Proven implementation from alex.smponias.de
 */

document.addEventListener('DOMContentLoaded', function() {
  // Typing animation
  const words = ["App Developer", "UX Designer", "Agile Coach", "Content Creator"];
  const typingElement = document.querySelector('.typing-text');
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

  // Start typing if element exists
  if (typingElement) {
    type();
  }
});
