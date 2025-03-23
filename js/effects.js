document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initializeParallaxMouseEffect();
    initializeTypingEffect();
    initializeButtonHoverEffects();
    initializeScrollIndicator();
    initializeNavLinkHighlight();
    initializeIconBounce();
});

// Parallax mouse effect for hero section
function initializeParallaxMouseEffect() {
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) return;
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 30;
        const moveY = (mouseY - 0.5) * 30;
        
        heroSection.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
        
        // Also move hero content slightly for a deeper effect
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translate(${moveX * 0.2}px, ${moveY * 0.2}px)`;
        }
    });
}

// Typing effect for hero section title
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero h2');
    
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    function typeText() {
        let charIndex = 0;
        
        function type() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed
            } else {
                // Add blinking cursor at the end
                heroTitle.insertAdjacentHTML('beforeend', '<span class="cursor">|</span>');
                
                // Blink the cursor
                const cursor = document.querySelector('.cursor');
                setInterval(() => {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                }, 500);
            }
        }
        
        type();
    }
    
    // Start typing after a short delay
    setTimeout(typeText, 1000);
}

// Enhanced button hover effects
function initializeButtonHoverEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-community');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            
            const buttonRect = this.getBoundingClientRect();
            const rippleSize = Math.max(buttonRect.width, buttonRect.height);
            
            // Position the ripple where mouse entered
            const x = e.clientX - buttonRect.left - rippleSize / 2;
            const y = e.clientY - buttonRect.top - rippleSize / 2;
            
            ripple.style.width = ripple.style.height = `${rippleSize}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Scroll progress indicator
function initializeScrollIndicator() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
        
        // Add shadow on scroll
        if (scrollTop > 50) {
            progressBar.classList.add('with-shadow');
        } else {
            progressBar.classList.remove('with-shadow');
        }
    });
}

// Highlight active nav link on scroll
function initializeNavLinkHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Bounce effect for icons on scroll
function initializeIconBounce() {
    const icons = document.querySelectorAll('.feature-card i, .social-icons i');
    
    window.addEventListener('scroll', function() {
        icons.forEach(icon => {
            const iconPosition = icon.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (iconPosition < screenPosition) {
                setTimeout(() => {
                    icon.classList.add('bounce');
                    
                    // Remove the animation class after it completes
                    setTimeout(() => {
                        icon.classList.remove('bounce');
                    }, 1000);
                }, Math.random() * 500); // Random delay for each icon
            }
        });
    });
} 