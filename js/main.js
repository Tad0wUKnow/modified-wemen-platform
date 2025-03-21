//
DOM
Elements

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Floating Submit Case Button
    const floatingBtn = document.querySelector('.floating-submit-btn');
    
    // Make floating button always visible
    if (floatingBtn) {
        floatingBtn.style.display = 'flex';
    }
    
    // Testimonial slider functionality
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    // Initially hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });
    
    // Function to show next testimonial
    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);
    
    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial, .stat-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
});
