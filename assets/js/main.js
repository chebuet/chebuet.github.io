/* ============================================================
   BUET ChE — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Inject hamburger animation styles ─────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .navbar__toggle.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .navbar__toggle.open span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    .navbar__toggle.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `;
  document.head.appendChild(style);

  /* ── Mobile nav toggle ─────────────────────────────────────── */
  // Support both id-based and class-based selectors for flexibility
  const toggle  = document.getElementById('navToggle')
                || document.querySelector('.navbar__toggle');
  const navMenu = document.getElementById('navMenu')
                || document.querySelector('.navbar__nav');

  function openNav() {
    navMenu.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open'); // prevents background scroll
  }

  function closeNav() {
    navMenu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
    // Also close all open dropdowns
    document.querySelectorAll('.nav-item.open').forEach(item => {
      item.classList.remove('open');
    });
  }

  if (toggle && navMenu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.contains('open') ? closeNav() : openNav();
    });

    // Close on outside click / tap
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open')
          && !toggle.contains(e.target)
          && !navMenu.contains(e.target)) {
        closeNav();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ── Mobile dropdown accordion ──────────────────────────────── */
  // Uses event delegation so it works at any viewport width,
  // and only triggers the accordion behaviour in mobile layout.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link[data-dropdown]');
    if (!link) return;

    // Only intercept in mobile/tablet layout (hamburger visible)
    const isMobileLayout = toggle && getComputedStyle(toggle).display !== 'none';
    if (!isMobileLayout) return;

    e.preventDefault();
    e.stopPropagation();

    const parentItem = link.closest('.nav-item');
    const isOpen = parentItem.classList.contains('open');

    // Close all open siblings first
    document.querySelectorAll('.nav-item.open').forEach(item => {
      if (item !== parentItem) item.classList.remove('open');
    });

    parentItem.classList.toggle('open', !isOpen);
  });

  /* ── Close nav on link click (mobile) ──────────────────────── */
  // When a non-dropdown nav link is tapped, close the mobile menu
  document.querySelectorAll('.nav-link:not([data-dropdown]), .dropdown__item').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        closeNav();
      }
    });
  });

  /* ── Close nav on resize to desktop ─────────────────────────── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('open')) {
        closeNav();
      }
    }, 100);
  });

  /* ── Active nav link ─────────────────────────────────────────── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, .dropdown__item').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normPath = path.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    const normHref = href.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    if (normPath && normHref && normPath.endsWith(normHref) && normHref !== '') {
      link.classList.add('active');
      const parentLink = link.closest('.nav-item')?.querySelector('.nav-link');
      if (parentLink) parentLink.classList.add('active');
    }
  });

  /* ── Tab system ──────────────────────────────────────────────── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group  = btn.getAttribute('data-tab-group');
      const target = btn.getAttribute('data-tab');

      document.querySelectorAll(`.tab-btn[data-tab-group="${group}"]`)
              .forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.tab-panel[data-tab-group="${group}"]`)
              .forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Smooth scroll for anchor links ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
        ) || 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
