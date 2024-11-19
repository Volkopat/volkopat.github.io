function showSection(sectionId) {
    // Fade out all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.opacity = '0';
    });

    // Fade in selected section
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        setTimeout(() => {
            targetSection.style.opacity = '1';
        }, 50);

        // Animate progress bars if expertise section
        if (sectionId === '#expertise') {
            animateProgressBars();
        }
    }
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
} 