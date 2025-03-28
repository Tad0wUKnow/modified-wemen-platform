//
DOM
Elements

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animation On Scroll)
    initializeAOS();
    
    // Enable smooth scrolling for all anchor links
    enableSmoothScrolling();
    
    // Add hover effects to elements
    addHoverEffects();
    
    // Initialize testimonial slider with improved transitions
    initializeTestimonialSlider();
    
    // Add floating submit button functionality
    setupFloatingButton();
    
    // Add parallax scrolling effect to sections with backgrounds
    initializeParallaxEffect();
    
    // Add counters animation to stats section
    initializeCounters();
    
    // Make navigation menu sticky with animation
    initializeStickyNav();
});

function initializeAOS() {
    // Add animation classes based on scroll position
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial, .stat-card, .hero-content, .cta, .section-title, .footer-col');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    setTimeout(animateOnScroll, 100);
}

function enableSmoothScrolling() {
    // Get all links that have hash (#) references
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process internal links (not external ones)
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                // Skip if it's just "#" (to avoid scrolling to top)
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Smooth scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function addHoverEffects() {
    // Add hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
            // Slightly elevate the icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-10px) scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
            // Return icon to normal position
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-community');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
    
    // Add hover effect to navigation items
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add pulse effect to icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'pulse 0.5s ease-in-out';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
}

function initializeTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    // Initially hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.opacity = '0';
            testimonial.style.display = 'none';
        } else {
            testimonial.style.opacity = '1';
        }
    });
    
    // Function to show next testimonial
    function showNextTestimonial() {
        // Fade out current testimonial
        testimonials[currentTestimonial].style.opacity = '0';
        
        setTimeout(() => {
            testimonials[currentTestimonial].style.display = 'none';
            
            // Update index
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            
            // Show new testimonial
            testimonials[currentTestimonial].style.display = 'block';
            
            // Slight delay before fading in
            setTimeout(() => {
                testimonials[currentTestimonial].style.opacity = '1';
            }, 50);
        }, 500); // Wait for fade out to complete
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
}

function setupFloatingButton() {
    const floatingBtn = document.querySelector('.floating-submit-btn');
    
    if (floatingBtn) {
        floatingBtn.style.display = 'flex';
        
        // Add bounce effect on page load
        setTimeout(() => {
            floatingBtn.classList.add('bounce');
            
            // Remove bounce class after animation completes
            setTimeout(() => {
                floatingBtn.classList.remove('bounce');
            }, 1000);
        }, 2000);
        
        // Periodically add subtle pulse effect to draw attention
        setInterval(() => {
            floatingBtn.classList.add('pulse');
            
            setTimeout(() => {
                floatingBtn.classList.remove('pulse');
            }, 1000);
        }, 10000);
    }
}

function initializeParallaxEffect() {
    // Add parallax effect to sections with background images
    const parallaxSections = document.querySelectorAll('.hero, .cta, .features');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxSections.forEach(section => {
            // Calculate parallax offset (slower scroll for background)
            const offset = scrollPosition * 0.4;
            
            // Apply the parallax effect using transform instead of background-position
            // for better performance
            section.style.backgroundPosition = `center ${-offset}px`;
        });
    });
}

function initializeCounters() {
    // Animate the stat numbers when they come into view
    const statCards = document.querySelectorAll('.stat-card h3');
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        const statSection = document.querySelector('.stats');
        if (!statSection) return;
        
        const sectionPosition = statSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            counted = true;
            
            statCards.forEach(stat => {
                const targetNumber = parseInt(stat.textContent.replace(/\D/g, ''), 10);
                let currentNumber = 0;
                const increment = Math.ceil(targetNumber / 30); // Adjust for speed
                const duration = 1500; // ms
                const interval = duration / (targetNumber / increment);
                
                const counter = setInterval(() => {
                    currentNumber += increment;
                    
                    if (currentNumber >= targetNumber) {
                        stat.textContent = stat.textContent.includes('+') 
                            ? targetNumber + '+' 
                            : targetNumber;
                        clearInterval(counter);
                    } else {
                        stat.textContent = stat.textContent.includes('+') 
                            ? currentNumber + '+' 
                            : currentNumber;
                    }
                }, interval);
            });
        }
    }
    
    window.addEventListener('scroll', startCounting);
    // Check once on page load
    setTimeout(startCounting, 100);
}

function initializeStickyNav() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    
    if (!header || !hero) return;
    
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Minimum scroll amount to trigger change
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // If we're scrolling more than the threshold
        if (Math.abs(lastScrollTop - scrollTop) <= scrollThreshold) return;
        
        // If scrolled down past the hero section
        if (scrollTop > hero.offsetHeight) {
            // Add sticky header with shadow
            header.classList.add('sticky');
            
            // Hide header when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            // At the top of the page
            header.classList.remove('sticky');
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}
