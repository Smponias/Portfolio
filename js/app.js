// Entry point using ES6 modules
import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations } from './modules/scrollAnimations.js';
import { initWorkFilter } from './modules/workFilter.js';
import { initSkillsCarousel } from './modules/skillsCarousel.js';
import { initContactForm } from './modules/contactForm.js';
import { initBackToTop } from './modules/backToTop.js';
import { initDarkMode, initDarkModeDemo, initThemeColorWatcher } from './modules/darkMode.js';
import { initTyping } from './modules/typing.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initWorkFilter();
  initSkillsCarousel();
  initContactForm();
  initBackToTop();
  initTyping();
  initDarkMode();
  initDarkModeDemo();
  initThemeColorWatcher();
});
