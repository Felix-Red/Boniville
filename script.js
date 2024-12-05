const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('fullscreen');
    navLinks.classList.toggle('show');
});

const footerHeadings = document.querySelectorAll('.footer-links h3');

footerHeadings.forEach(heading => {
    heading.addEventListener('click', () => {
        // Toggle 'active' class for dropdown
        const parent = heading.parentElement;
        parent.classList.toggle('active');
    });
});

