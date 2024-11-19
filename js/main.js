document.addEventListener('DOMContentLoaded', function() {
    loadAllComponents()
        .then(() => {
            initializeNavigation();
            initializeTheme();
        });
});

async function loadAllComponents() {
    const components = [
        { id: 'nav-placeholder', path: 'components/nav.html' },
        { id: 'home-placeholder', path: 'components/home.html' },
        { id: 'about-placeholder', path: 'components/about.html' },
        { id: 'expertise-placeholder', path: 'components/expertise.html' },
        { id: 'experience-placeholder', path: 'components/experience.html' },
        { id: 'apps-placeholder', path: 'components/apps.html' },
        { id: 'footer-placeholder', path: 'components/footer.html' }
    ];

    await Promise.all(components.map(comp => loadComponent(comp.id, comp.path)));
}

async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
    } catch (error) {
        console.error(`Error loading component: ${error}`);
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Add theme toggle if it exists
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
} 