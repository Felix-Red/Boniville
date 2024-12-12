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

const sliderTrack = document.getElementById('slider-track');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slides.length;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

window.addEventListener('resize', updateSlider);

sliderTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    sliderTrack.style.transition = 'none';
});

sliderTrack.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
});

sliderTrack.addEventListener('touchend', () => {
    isDragging = false;
    const slideWidth = slides[0].clientWidth;
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < totalSlides - 1) currentIndex++;
    if (movedBy > 50 && currentIndex > 0) currentIndex--;

    updateSlider();
    sliderTrack.style.transition = 'transform 0.5s ease';
    prevTranslate = -currentIndex * slideWidth;
});

