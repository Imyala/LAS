/* ============================================================
   LAS – Luke's Aircon Services  |  main.js
   ============================================================ */
'use strict';

/* ---------- Snow Particle Generator (hero) ---------- */
(function snowParticles() {
  const container = document.getElementById('snowParticles');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'snow-particle';
    const size = Math.random() * 3 + 2;
    p.style.cssText = [
      `left: ${Math.random() * 100}%`,
      `width: ${size}px`,
      `height: ${size}px`,
      `opacity: ${Math.random() * 0.5 + 0.15}`,
      `animation-duration: ${Math.random() * 10 + 8}s`,
      `animation-delay: ${Math.random() * 10}s`,
    ].join(';');
    container.appendChild(p);
  }
})();

/* ---------- Inject shared navigation ---------- */
(function injectNav() {
  const topbar = `
  <div class="topbar">
    <div class="container">
      <div class="topbar__inner">
        <div class="topbar__links">
          <a href="tel:+61400000000">0400 000 000</a>
          <a href="mailto:info@lashvac.com">info@lashvac.com</a>
        </div>
        <div class="topbar__links">
          <span>Mon–Fri 7am–5pm &nbsp;|&nbsp; Sat 8am–2pm</span>
          <span>Brisbane &amp; surrounds</span>
        </div>
      </div>
    </div>
  </div>`;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (page) => currentPage === page ? 'active' : '';

  const snowflakeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>`;

  const navbar = `
  <nav class="navbar" id="navbar">
    <div class="container navbar__inner">
      <a href="index.html" class="navbar__logo">
        <div class="navbar__logo-icon">${snowflakeIcon}</div>
        LAS<span>HVAC</span>
      </a>
      <div class="navbar__nav">
        <a href="index.html" class="${isActive('index.html')}">Home</a>
        <div class="nav-dropdown" id="servicesDropdown">
          <div class="nav-dropdown__trigger" id="servicesDropdownTrigger">
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="nav-dropdown__menu" id="servicesDropdownMenu">
            <a href="services.html">All Services</a>
            <a href="residential.html">Residential</a>
            <a href="commercial.html">Commercial</a>
            <a href="industrial.html">Industrial / HVACR</a>
          </div>
        </div>
        <a href="gallery.html" class="${isActive('gallery.html')}">Gallery</a>
        <a href="about.html" class="${isActive('about.html')}">About</a>
        <a href="contact.html" class="${isActive('contact.html')}">Contact</a>
      </div>
      <div class="navbar__cta">
        <a href="contact.html" class="btn btn-outline-primary btn-sm">Get a Quote</a>
        <a href="tel:+61400000000" class="btn btn-primary btn-sm">Call Now</a>
      </div>
      <button class="navbar__hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="navbar__mobile" id="mobileNav">
    <div class="mobile-section-title">Navigation</div>
    <a href="index.html">Home</a>
    <div class="mobile-section-title">Services</div>
    <a href="services.html">All Services</a>
    <a href="residential.html">Residential Cleaning</a>
    <a href="commercial.html">Commercial Cleaning</a>
    <a href="industrial.html">Industrial / HVACR</a>
    <div class="mobile-section-title">Company</div>
    <a href="gallery.html">Gallery</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact</a>
    <div class="mobile-cta">
      <a href="contact.html" class="btn btn-primary">Get a Free Quote</a>
      <a href="tel:+61400000000" class="btn btn-outline-primary">0400 000 000</a>
    </div>
  </div>`;

  const header = document.getElementById('site-header');
  if (header) header.innerHTML = topbar + navbar;
})();

/* ---------- Inject shared footer ---------- */
(function injectFooter() {
  const snowflakeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>`;
  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="index.html" class="footer__logo">
            <div class="footer__logo-icon">${snowflakeIcon}</div>
            LAS<span>HVAC</span>
          </a>
          <p class="footer__desc">
            Luke's Aircon Services – your trusted specialists in residential, commercial,
            and industrial air conditioning cleaning across Brisbane and surrounding regions.
            Breathe clean, breathe healthy.
          </p>
          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Facebook">Fb</a>
            <a href="#" class="footer__social" aria-label="Instagram">Ig</a>
            <a href="#" class="footer__social" aria-label="Google">G</a>
          </div>
        </div>

        <div>
          <div class="footer__heading">Services</div>
          <div class="footer__links">
            <a href="residential.html">Residential Aircon Cleaning</a>
            <a href="commercial.html">Commercial Aircon Cleaning</a>
            <a href="industrial.html">Industrial / HVACR</a>
            <a href="services.html">View All Services</a>
          </div>
        </div>

        <div>
          <div class="footer__heading">Company</div>
          <div class="footer__links">
            <a href="about.html">About Us</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Get a Quote</a>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>

        <div>
          <div class="footer__heading">Contact</div>
          <div class="footer__contact-item">
            <span class="footer__contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.91-1.83a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 14v2.92z"/></svg></span>
            <div class="footer__contact-text"><a href="tel:+61400000000">0400 000 000</a></div>
          </div>
          <div class="footer__contact-item">
            <span class="footer__contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <div class="footer__contact-text"><a href="mailto:info@lashvac.com">info@lashvac.com</a></div>
          </div>
          <div class="footer__contact-item">
            <span class="footer__contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <div class="footer__contact-text">Brisbane &amp; Surrounds, QLD, Australia</div>
          </div>
          <div class="footer__contact-item">
            <span class="footer__contact-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            <div class="footer__contact-text">Mon–Fri 7am–5pm<br>Sat 8am–2pm</div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div>© ${new Date().getFullYear()} LAS – Luke's Aircon Services. All rights reserved.</div>
        <div class="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <a href="#top" class="back-to-top" id="backToTop" aria-label="Back to top">↑</a>

  <div class="sticky-quote">
    <a href="tel:+61400000000" class="sticky-quote__btn sticky-quote__btn--phone">Call Now</a>
    <a href="contact.html" class="sticky-quote__btn">Get a Quote</a>
  </div>`;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = footer;
})();

/* ---------- Navbar: scroll effect ---------- */
(function navScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
})();

/* ---------- Navbar: hamburger ---------- */
(function hamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // close when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ---------- Navbar: dropdown ---------- */
(function dropdown() {
  const trigger = document.getElementById('servicesDropdownTrigger');
  const menu    = document.getElementById('servicesDropdownMenu');
  const wrapper = document.getElementById('servicesDropdown');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = trigger.classList.toggle('open');
    menu.classList.toggle('open', open);
  });
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      trigger.classList.remove('open');
      menu.classList.remove('open');
    }
  });
})();

/* ---------- Reveal on scroll ---------- */
(function revealOnScroll() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

/* ---------- Counter animation ---------- */
(function counters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const step = duration / 60;
      let current = 0;
      const increment = target / (duration / step);
      const tick = () => {
        current = Math.min(current + increment, target);
        el.textContent = (Number.isInteger(target) ? Math.floor(current) : current.toFixed(1)) + suffix;
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
})();

/* ---------- Back to top ---------- */
(function backToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---------- FAQ accordion ---------- */
(function faqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close all
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---------- Gallery lightbox ---------- */
(function gallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !items.length) return;

  const lbImg     = lightbox.querySelector('.lightbox__img');
  const lbCaption = lightbox.querySelector('.lightbox__caption');
  const closeBtn  = lightbox.querySelector('.lightbox__close');
  const prevBtn   = lightbox.querySelector('.lightbox__prev');
  const nextBtn   = lightbox.querySelector('.lightbox__next');

  let currentIndex = 0;
  const galleryItems = Array.from(items);

  function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-item__caption');
    if (lbImg) {
      lbImg.src = img ? img.src : '';
      lbImg.alt = img ? img.alt : '';
    }
    if (lbCaption) lbCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  items.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn)  prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn)  nextBtn.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();

/* ---------- Gallery filter ---------- */
(function galleryFilter() {
  const filters = document.querySelectorAll('.gallery-filter');
  const items   = document.querySelectorAll('.gallery-item');
  if (!filters.length || !items.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ---------- Contact form validation ---------- */
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMsg = document.getElementById('formSuccess');

  function validate(input) {
    const group = input.closest('.form-group');
    const err   = group ? group.querySelector('.form-error') : null;
    let msg = '';
    if (input.required && !input.value.trim()) {
      msg = 'This field is required.';
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      msg = 'Please enter a valid email address.';
    } else if (input.type === 'tel' && input.value && !/^[\d\s\+\-\(\)]{8,}$/.test(input.value)) {
      msg = 'Please enter a valid phone number.';
    }
    if (err) err.textContent = msg;
    input.classList.toggle('error', !!msg);
    return !msg;
  }

  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => validate(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = form.querySelectorAll('input, select, textarea');
    let valid = true;
    fields.forEach(f => { if (!validate(f)) valid = false; });
    if (!valid) return;
    // Simulate form submission
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setTimeout(() => {
      if (successMsg) successMsg.classList.add('show');
      form.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1200);
  });
})();

/* ---------- Smooth scroll for anchor links ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
