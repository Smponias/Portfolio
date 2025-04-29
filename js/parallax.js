/**
 * Parallax Effects for Apple-Style Portfolio Website
 * Handles parallax scrolling and mouse movement effects
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initParallaxScroll();
    initParallaxMouseMove();
});

// Parallax scrolling effect
function initParallaxScroll() {
    const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-element, .parallax-card, .parallax-gallery');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            // Different speeds for different element types
            let speed = 0.1; // Default speed
            
            if (element.classList.contains('parallax-bg')) {
                speed = 0.5;
            } else if (element.classList.contains('parallax-card')) {
                speed = 0.15;
            } else if (element.classList.contains('parallax-gallery')) {
                speed = 0.2;
            }
            
            // Calculate transform based on scroll position
            const yOffset = scrollY * speed;
            
            // Apply transform - different for background vs. foreground elements
            if (element.classList.contains('parallax-bg')) {
                element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            } else {
                element.style.transform = `translate3d(0, ${-yOffset}px, 0)`;
            }
        });
    });
}

// Parallax mouse movement effect (Apple-style)
function initParallaxMouseMove() {
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    const workCards = document.querySelectorAll('.work-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    // Hero section parallax
    if (heroSection && heroContent) {
        heroSection.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            heroContent.style.transform = `translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0)`;
        });
        
        heroSection.addEventListener('mouseleave', () => {
            heroContent.style.transform = 'translate3d(0, 0, 0)';
        });
    }
    
    // Work cards parallax
    workCards.forEach(card => {
        const cardImage = card.querySelector('.work-image img');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
            
            card.style.transform = `perspective(1000px) rotateX(${mouseY * 5}deg) rotateY(${-mouseX * 5}deg) scale3d(1.02, 1.02, 1.02)`;
            
            if (cardImage) {
                cardImage.style.transform = `translate3d(${mouseX * 10}px, ${mouseY * 10}px, 0) scale(1.1)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            
            if (cardImage) {
                cardImage.style.transform = 'translate3d(0, 0, 0) scale(1)';
            }
        });
    });
    
    // Skill categories parallax
    skillCategories.forEach(category => {
        category.addEventListener('mousemove', (e) => {
            const rect = category.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
            const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
            
            category.style.transform = `perspective(1000px) rotateX(${mouseY * 5}deg) rotateY(${-mouseX * 5}deg) translateY(-5px)`;
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Add smooth transition for all parallax elements when page loads
    window.addEventListener('load', () => {
        document.querySelectorAll('.parallax-bg, .parallax-element, .parallax-card, .parallax-gallery').forEach(element => {
            element.style.transition = 'transform 0.3s ease-out';
            
            // Remove transition after initial load to keep parallax smooth
            setTimeout(() => {
                element.style.transition = '';
            }, 500);
        });
    });
}

// Apple-style scroll animations for section reveals
function initScrollRevealAnimations() {
    const sections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        revealObserver.observe(section);
        section.classList.add('reveal-section');
    });
}

// Initialize scroll reveal animations
initScrollRevealAnimations();

// Add Apple-style scroll indicator animation
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        // Hide scroll indicator when user scrolls down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        });
        
        // Scroll down when indicator is clicked
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Initialize scroll indicator
initScrollIndicator();
