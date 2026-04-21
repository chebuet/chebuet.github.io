/**
 * main.js - ChemE BUET Departmental Website
 * Handles UI interactions, slider logic, and navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initStickyNav();
    initMobileMenu();
});

/**
 * Hero Slider Logic
 * Rotates through the department's key images and headlines.
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideInterval = 6000; // 6 seconds

    if (slides.length === 0) return;

    function goToSlide(n) {
        // Remove active class from current slide/dot
        slides[currentSlide].classList.remove('active');
        if (dots.length > 0) dots[currentSlide].classList.remove('active');
        
        // Update index
        currentSlide = (n + slides.length) % slides.length;
        
        // Add active class to new slide/dot
        slides[currentSlide].classList.add('active');
        if (dots.length > 0) dots[currentSlide].classList.add('active');
    }

    // Auto-advance
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, slideInterval);

    // Event listeners for dots (if present)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}

/**
 * Sticky Navigation
 * Changes the navbar background on scroll for better legibility.
 */
function initStickyNav() {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

/**
 * Mobile Navigation Toggle
 * Placeholder for mobile responsiveness if you add a hamburger menu.
 */
function initMobileMenu() {
    // This can be expanded if you add a .mobile-toggle button to your header.php
    const menuToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}