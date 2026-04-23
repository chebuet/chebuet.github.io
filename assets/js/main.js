/* ============================================================
   BUET ChE — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile nav toggle ─────────────────────────────────── */
  const toggle   = document.getElementById('navToggle');
  const navMenu  = document.getElementById('navMenu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      // Animate hamburger → X
      toggle.classList.toggle('open', isOpen);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }

  /* ── Mobile dropdown accordion ─────────────────────────── */
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav-link[data-dropdown]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = link.closest('.nav-item');
        parent.classList.toggle('open');
      });
    });
  }

  /* ── Active nav link ───────────────────────────────────── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, .dropdown__item').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Normalize paths
    const normPath = path.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    const normHref = href.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    if (normPath && normHref && normPath.endsWith(normHref) && normHref !== '') {
      link.classList.add('active');
      // Also activate parent
      const parentLink = link.closest('.nav-item')?.querySelector('.nav-link');
      if (parentLink) parentLink.classList.add('active');
    }
  });

  /* ── Tab system ─────────────────────────────────────────── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-tab-group');
      const target = btn.getAttribute('data-tab');

      // Deactivate all in group
      document.querySelectorAll(`.tab-btn[data-tab-group="${group}"]`)
              .forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.tab-panel[data-tab-group="${group}"]`)
              .forEach(p => p.classList.remove('active'));

      // Activate selected
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Smooth scroll for anchor links ────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')) || 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Hamburger CSS toggle ──────────────────────────────── */
  /* Inject simple open-state styles for the hamburger icon */
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

})();
