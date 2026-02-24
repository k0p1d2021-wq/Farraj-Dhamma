// Init Animasi Scroll
AOS.init({
    duration: 1000,
    once: true
});

// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.photo-slide');

function moveSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-play Carousel 5s
setInterval(() => moveSlide(1), 5000);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) nav.style.padding = '1rem 0';
    else nav.style.padding = '1.5rem 0';
});