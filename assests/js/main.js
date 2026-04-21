// Simple mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
    // You can add a hamburger icon in HTML and target it here
    console.log("BUET ChE Site Loaded");
});

// Highlight active page
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPath) && currentPath !== "/") {
        link.classList.add('active');
    }
});
