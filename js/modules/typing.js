// typing.js module
// Handles hero section typing animation
export function initTyping() {
  const words = ["App Developer", "UX Designer", "Agile Coach", "Content Creator"];
  const typingElement = document.querySelector('.typing-text');
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      letterIndex = Math.max(0, letterIndex - 1);
      typingElement.innerHTML = (currentWord.substring(0, letterIndex)) || '&nbsp;';
    } else {
      letterIndex = Math.min(currentWord.length, letterIndex + 1);
      typingElement.innerHTML = currentWord.substring(0, letterIndex);
    }

    if (!isDeleting && letterIndex === currentWord.length) {
      setTimeout(() => { isDeleting = true; type(); }, 1500);
      return;
    }
    if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
  }

  if (typingElement) {
    type();
  }
}
