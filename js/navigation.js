document.addEventListener('DOMContentLoaded', () => {
    // Wait for nav to load
    setTimeout(() => {
        initializeNavigation();
        handleScrollEvents();
    }, 100);
});

function initializeNavigation() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Smooth scroll to section
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            updateNavigation(this);
            showSection(targetId);
        });
    });

    // Show home by default
    const defaultNav = document.querySelector('nav a[href="#home"]');
    if (defaultNav) {
        updateNavigation(defaultNav);
        showSection('#home');
    }

    // Add back-to-top button functionality
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function handleScrollEvents() {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Hide/show navigation on scroll
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScrollTop) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll;

        // Show/hide back to top button
        if (backToTop) {
            backToTop.classList.toggle('visible', currentScroll > 300);
        }

        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            const id = `#${section.id}`;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === id);
            });
        }
    });
}

function updateNavigation(activeLink) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
} 