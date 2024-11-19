document.addEventListener('DOMContentLoaded', () => {
    // Wait for nav to load
    setTimeout(() => {
        initializeNavigation();
    }, 100);
});

function initializeNavigation() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            updateNavigation(this);
            showSection(this.getAttribute('href'));
        });
    });

    // Show home by default
    const defaultNav = document.querySelector('nav a[href="#home"]');
    if (defaultNav) {
        updateNavigation(defaultNav);
        showSection('#home');
    }
}

function updateNavigation(activeLink) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
} 