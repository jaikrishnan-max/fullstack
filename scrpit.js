// JavaScript code

// Toggle mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scroll to the "Book Appointment" section
const bookButton = document.querySelector('.btn-book');

bookButton.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector('#book-appointment');
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});
