document.addEventListener('DOMContentLoaded', function() {
    // Load all components
    loadComponent('nav-placeholder', 'components/nav.html');
    loadComponent('home-placeholder', 'components/home.html');
    loadComponent('about-placeholder', 'components/about.html');
    loadComponent('expertise-placeholder', 'components/expertise.html');
    loadComponent('experience-placeholder', 'components/experience.html');
    loadComponent('apps-placeholder', 'components/apps.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});

function loadComponent(elementId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
} 