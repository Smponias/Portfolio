// contactForm.js
// Handles Contact Form functionality
export function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  /* Contact form submission disabled
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  */
}
