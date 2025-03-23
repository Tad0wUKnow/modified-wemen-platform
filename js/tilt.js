document.addEventListener('DOMContentLoaded', function() {
    // Apply tilt effect to cards
    initializeTiltEffect();
});

function initializeTiltEffect() {
    // Cards that will have tilt effect
    const cards = document.querySelectorAll('.feature-card, .stat-card, .testimonial');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

function handleTilt(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;
    
    // Calculate percentage of mouse position within the card
    const xPercent = mouseX / cardRect.width;
    const yPercent = mouseY / cardRect.height;
    
    // Calculate tilt angle (max tilt of 15deg)
    const tiltX = (0.5 - yPercent) * 15;
    const tiltY = (xPercent - 0.5) * 15;
    
    // Apply tilt transformation
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY}deg`);
    card.classList.add('tilt');
    
    // Add 3D shadow effect
    updateCardShadow(card, xPercent, yPercent);
}

function resetTilt() {
    const card = this;
    card.classList.remove('tilt');
    card.style.boxShadow = '';
}

function updateCardShadow(card, xPercent, yPercent) {
    // Calculate shadow position (opposite to mouse position)
    const shadowX = (0.5 - xPercent) * 20;
    const shadowY = (0.5 - yPercent) * 20;
    const shadowBlur = 20;
    
    // Apply shadow
    card.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.5)`;
} 