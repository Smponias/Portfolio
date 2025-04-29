// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle && mainNav) {
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.main-nav') && 
                !e.target.closest('.mobile-menu-toggle') && 
                mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });
    }
});

// Optimize parallax effects for mobile
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Disable heavy animations on mobile
        const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-element, .parallax-card, .parallax-gallery');
        parallaxElements.forEach(element => {
            element.style.transform = 'none';
            element.style.transition = 'none';
        });
        
        // Use simpler animations for gradient text
        const gradientTexts = document.querySelectorAll('.gradient-text, .section-title');
        gradientTexts.forEach(text => {
            text.style.backgroundSize = '300% auto';
        });
    }
});

// Fix iOS 100vh issue
document.addEventListener('DOMContentLoaded', () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const setHeight = () => {
                heroSection.style.height = window.innerHeight + 'px';
            };
            
            setHeight();
            window.addEventListener('resize', setHeight);
            window.addEventListener('orientationchange', setHeight);
        }
    }
});

// Improve touch interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add active states for touch
    const touchElements = document.querySelectorAll('a, button, .work-card, .skill-category');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.classList.add('touch-active');
        }, { passive: true });
        
        element.addEventListener('touchend', () => {
            element.classList.remove('touch-active');
        }, { passive: true });
    });
});
