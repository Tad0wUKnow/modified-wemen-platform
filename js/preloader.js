document.addEventListener('DOMContentLoaded', function() {
    // Create preloader elements
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    
    const logo = document.createElement('div');
    logo.className = 'preloader-logo';
    logo.innerHTML = '<h1>WeMen</h1>';
    
    const loadingText = document.createElement('p');
    loadingText.className = 'loading-text';
    loadingText.textContent = 'Loading...';
    
    // Append elements to preloader
    preloader.appendChild(spinner);
    preloader.appendChild(logo);
    preloader.appendChild(loadingText);
    
    // Add preloader to body
    document.body.prepend(preloader);
    
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            // Remove preloader from DOM after transition
            setTimeout(function() {
                preloader.remove();
            }, 500);
        }, 500);
    });
}); 