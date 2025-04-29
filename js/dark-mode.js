/**
 * Dark Mode JavaScript for Apple-Style Portfolio Website
 * Handles dark mode toggle and preference management
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initDarkModeDemo();
});

// Initialize dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const root = document.documentElement;
    
    // Check for saved user preference
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // Check for system preference if no saved preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if saved preference or system preference
    if (savedDarkMode === 'true' || (savedDarkMode === null && prefersDarkMode)) {
        enableDarkMode();
    }
    
    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (root.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only change if user hasn't set a preference
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
    
    // Function to enable dark mode
    function enableDarkMode() {
        // Add transition class first
        root.classList.add('dark-mode-transition');
        
        // Add dark mode class after a small delay to ensure transition works
        setTimeout(() => {
            root.classList.add('dark-mode');
            
            // Update toggle icon
            updateToggleIcon(true);
            
            // Save preference
            localStorage.setItem('darkMode', 'true');
            
            // Remove transition class after transition completes
            setTimeout(() => {
                root.classList.remove('dark-mode-transition');
            }, 500);
        }, 10);
    }
    
    // Function to disable dark mode
    function disableDarkMode() {
        // Add transition class first
        root.classList.add('dark-mode-transition');
        
        // Remove dark mode class after a small delay
        setTimeout(() => {
            root.classList.remove('dark-mode');
            
            // Update toggle icon
            updateToggleIcon(false);
            
            // Save preference
            localStorage.setItem('darkMode', 'false');
            
            // Remove transition class after transition completes
            setTimeout(() => {
                root.classList.remove('dark-mode-transition');
            }, 500);
        }, 10);
    }
    
    // Update toggle icon appearance
    function updateToggleIcon(isDarkMode) {
        const sunIcon = document.querySelector('.toggle-icon.sun');
        const moonIcon = document.querySelector('.toggle-icon.moon');
        if (isDarkMode) {
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }
    }
}

// Initialize dark mode demo section
function initDarkModeDemo() {
    const demoToggle = document.querySelector('.demo-toggle');
    const deviceScreen = document.querySelector('.device-screen');
    const demoHeader = document.querySelector('.demo-header');
    const demoElements = document.querySelectorAll('.demo-element');
    
    if (demoToggle && deviceScreen) {
        // Set initial state based on current mode
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        updateDemoState(isDarkMode);
        
        // Toggle demo dark mode on button click
        demoToggle.addEventListener('click', () => {
            const isCurrentlyDark = deviceScreen.classList.contains('dark');
            updateDemoState(!isCurrentlyDark);
        });
    }
    
    // Update demo device appearance
    function updateDemoState(isDarkMode) {
        if (isDarkMode) {
            deviceScreen.classList.add('dark');
            demoHeader.classList.add('dark');
            demoElements.forEach(element => element.classList.add('dark'));
            demoToggle.classList.add('active');
        } else {
            deviceScreen.classList.remove('dark');
            demoHeader.classList.remove('dark');
            demoElements.forEach(element => element.classList.remove('dark'));
            demoToggle.classList.remove('active');
        }
    }
}

// Add Apple-style theme color meta tag based on current mode
function updateThemeColor() {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    // Set color based on current mode
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    metaThemeColor.content = isDarkMode ? '#000000' : '#ffffff';
}

// Update theme color on mode change
document.addEventListener('DOMContentLoaded', () => {
    updateThemeColor();
    
    // Create a mutation observer to watch for class changes on the root element
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                updateThemeColor();
            }
        });
    });
    
    // Start observing
    observer.observe(document.documentElement, { attributes: true });
});
