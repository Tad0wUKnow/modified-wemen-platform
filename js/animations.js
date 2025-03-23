// Scroll Animation and Smooth Transitions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollReveal();
    
    // Initialize button animations
    initButtonAnimations();
    
    // Add smooth scroll behavior to links
    initSmoothScroll();
    
    // Initialize hover effects
    initHoverEffects();
    
    // Initialize cursor trail if enabled
    // Uncomment the following line to enable cursor trail effect
    // initCursorTrail();
});

// Reveal elements on scroll
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-up, .reveal-down, .reveal-scale, .reveal-sequence, .img-reveal');
    
    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                // Optional: Remove the active class when scrolling back up
                // element.classList.remove('active');
            }
        });
    };
    
    // Initial check
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
}

// Button animations and effects
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-outline, .btn-light, .btn-dark, .btn-ghost, .btn-attention');
    
    buttons.forEach(button => {
        // Add ripple effect to buttons
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const rippleElement = document.createElement('span');
            rippleElement.classList.add('ripple');
            rippleElement.style.left = x + 'px';
            rippleElement.style.top = y + 'px';
            
            this.appendChild(rippleElement);
            
            setTimeout(() => {
                rippleElement.remove();
            }, 600);
        });
        
        // Fix for button animation jumping
        button.addEventListener('mouseenter', function() {
            this.style.willChange = 'transform';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
    
    // Initialize submit button animations
    const submitButtons = document.querySelectorAll('.submit-btn');
    submitButtons.forEach(button => {
        if (button.querySelector('.default-text') && button.querySelector('.success-text')) {
            button.addEventListener('click', function(e) {
                // Prevent double-clicks
                if (this.classList.contains('processing')) return;
                
                // Prevent default form submission if needed
                // e.preventDefault();
                
                // Add processing state
                this.classList.add('processing');
                
                // Simulate form processing (replace with actual form handling)
                setTimeout(() => {
                    this.classList.remove('processing');
                    this.classList.add('success');
                    
                    // Reset after showing success
                    setTimeout(() => {
                        this.classList.remove('success');
                    }, 2000);
                }, 1000);
            });
        }
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get offset considering fixed headers
                const headerOffset = document.querySelector('header.fixed') ? 
                    document.querySelector('header.fixed').offsetHeight : 0;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hover animation effects
function initHoverEffects() {
    // Card hover animations
    const hoverCards = document.querySelectorAll('.lawyer-card, .resource-card, .document-card, .hover-lift, .hover-zoom, .interactive-item, .subtle-hover');
    
    hoverCards.forEach(card => {
        // Force GPU acceleration for smoother animations
        card.style.transform = 'translateZ(0)';
        card.style.backfaceVisibility = 'hidden';
        
        card.addEventListener('mouseenter', function() {
            this.style.willChange = 'transform, box-shadow';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
    
    // Interactive text effects
    const textEffects = document.querySelectorAll('.text-hover-effect');
    
    textEffects.forEach(text => {
        text.addEventListener('mouseenter', function() {
            this.style.willChange = 'color, text-shadow';
        });
        
        text.addEventListener('mouseleave', function() {
            this.style.willChange = 'auto';
        });
    });
}

// Cursor trail effect (optional, can be resource-intensive)
function initCursorTrail() {
    const body = document.body;
    const maxTrails = 10;
    const trails = [];
    
    // Create trail elements
    for (let i = 0; i < maxTrails; i++) {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.opacity = 1 - (i / maxTrails);
        trail.style.transform = 'scale(' + (1 - (i / maxTrails) * 0.5) + ')';
        body.appendChild(trail);
        trails.push({
            element: trail,
            x: 0,
            y: 0
        });
    }
    
    window.addEventListener('mousemove', function(e) {
        // Update the position of the first trail
        trails[0].x = e.clientX;
        trails[0].y = e.clientY;
        trails[0].element.style.left = trails[0].x + 'px';
        trails[0].element.style.top = trails[0].y + 'px';
        
        // Update the rest of the trails
        for (let i = 1; i < trails.length; i++) {
            trails[i].x += (trails[i-1].x - trails[i].x) * 0.3;
            trails[i].y += (trails[i-1].y - trails[i].y) * 0.3;
            trails[i].element.style.left = trails[i].x + 'px';
            trails[i].element.style.top = trails[i].y + 'px';
        }
    });
}

// Additional animation for floating elements
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-animation');
    
    floatingElements.forEach((element, index) => {
        // Add random delay to create more natural movement
        const delay = index * 0.3;
        element.style.animationDelay = delay + 's';
    });
}

// Create parallax effect for backgrounds
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollTop = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const distance = scrollTop - elementOffset;
            const speed = element.dataset.speed || 0.3;
            
            // Apply parallax only when element is in viewport
            if (elementOffset < scrollTop + window.innerHeight && 
                elementOffset + element.offsetHeight > scrollTop) {
                element.style.backgroundPositionY = (distance * speed) + 'px';
            }
        });
    });
} 