/* ============================================================
   KIGORO SAMSON MWANGI — Portfolio JS
   ============================================================ */

/* ── NAVBAR: scroll class + hamburger ────────────────────────── */
(function () {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  // Add scrolled class for stronger shadow
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger toggle
  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click (mobile)
  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── ACTIVE NAV LINK on scroll ───────────────────────────────── */
(function () {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const links    = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
(function () {
  // Tag every direct child of .container inside a section
  document.querySelectorAll('.section > .container > *').forEach(el => {
    el.classList.add('reveal');
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ── PROJECT FILTER ──────────────────────────────────────────── */
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        // small pop-in
        if (show) {
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
          });
        }
      });
    });
  });
})();

/* ── CONTACT FORM ────────────────────────────────────────────── */
(function () {
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Validate
    if (name.length < 2)          return notify('Please enter your full name.', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return notify('Please enter a valid email.', 'error');
    if (subject.length < 3)       return notify('Please enter a subject.', 'error');
    if (message.length < 10)      return notify('Message is too short (min 10 characters).', 'error');

    // Loading state
    const btnText   = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    submitBtn.disabled = true;
    btnText.style.display   = 'none';
    btnLoader.style.display = 'inline';

    try {
      // Using FormSubmit — replace ACTION_URL with your FormSubmit endpoint
      // e.g. https://formsubmit.co/kigorosammwangi@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/kigorosammwangi@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, _subject: `Portfolio: ${subject}` })
      });

      if (res.ok) {
        notify('Message sent! I\'ll get back to you soon. 🙌', 'success');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      notify('Could not send — please email me directly at kigorosammwangi@gmail.com', 'error');
    } finally {
      submitBtn.disabled = false;
      btnText.style.display   = 'inline';
      btnLoader.style.display = 'none';
    }
  });
})();

/* ── NOTIFICATION TOAST ──────────────────────────────────────── */
function notify(message, type = 'info') {
  // Remove any existing toast
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;

  Object.assign(toast.style, {
    position:     'fixed',
    bottom:       '2rem',
    right:        '2rem',
    padding:      '1rem 1.5rem',
    borderRadius: '10px',
    fontWeight:   '600',
    fontSize:     '.9rem',
    maxWidth:     '360px',
    zIndex:       '9999',
    boxShadow:    '0 8px 30px rgba(0,0,0,.15)',
    background:   type === 'success' ? '#d4af37' : '#ef4444',
    color:        type === 'success' ? '#1a1a1a' : '#fff',
    transform:    'translateY(100px)',
    opacity:      '0',
    transition:   'all .35s cubic-bezier(.4,0,.2,1)'
  });

  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity   = '1';
    });
  });

  // Animate out and remove
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity   = '0';
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/* ── SKILL BAR ANIMATION on visible ─────────────────────────── */
(function () {
  const bars = document.querySelectorAll('.skill-bar');
  const io   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => {
    bar.style.animationPlayState = 'paused';
    io.observe(bar);
  });
})();

/* ── STAT COUNTER ANIMATION ──────────────────────────────────── */
(function () {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el    = e.target;
      const raw   = el.textContent.trim();        // e.g. "5+", "10+", "7"
      const num   = parseFloat(raw);
      const suffix = raw.replace(/[\d.]/g, '');   // e.g. "+" or ""
      if (isNaN(num)) return;

      let start = 0;
      const step = num / 40;                       // ~40 frames
      const tick = () => {
        start = Math.min(start + step, num);
        el.textContent = Math.round(start) + suffix;
        if (start < num) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => io.observe(c));
})();

/* ── HERO CARD BADGE STAGGER ─────────────────────────────────── */
(function () {
  document.querySelectorAll('.badge').forEach((badge, i) => {
    badge.style.opacity = '0';
    badge.style.transform = 'translateX(-20px)';
    badge.style.transition = `opacity .4s ease ${.3 + i * .12}s, transform .4s ease ${.3 + i * .12}s`;
    setTimeout(() => {
      badge.style.opacity   = '1';
      badge.style.transform = 'translateX(0)';
    }, 100);
  });
})();

/* ── KEYBOARD NAVIGATION ─────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (!e.altKey) return;
  const map = { h:'home', a:'about', s:'skills', e:'experience', p:'projects', g:'gallery', c:'contact' };
  const id  = map[e.key.toLowerCase()];
  if (id) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
  }
});

/* ── DEV CONSOLE GREETING ────────────────────────────────────── */
console.log('%c✨ Kigoro Samson Mwangi', 'font-size:18px;font-weight:bold;color:#7c3aed;');
console.log('%cIT Professional · Full-Stack Developer · Videographer · Mixologist', 'font-size:13px;color:#7a7a7a;');
console.log('%c📧 kigorosammwangi@gmail.com', 'color:#7c3aed;');
console.log('%c💻 https://github.com/mwangikigoro1', 'color:#7c3aed;');
