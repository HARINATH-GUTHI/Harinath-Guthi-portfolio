// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  burger.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Back to top button
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTop.classList.add('visible');
  } else {
    toTop.classList.remove('visible');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form (front-end only — swap in a real backend or form service)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

// Formspree handles submission directly via the form's action attribute

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Please fill in every field before sending.';
    formNote.style.color = '#a9432e';
    return;
  }

  formNote.textContent = 'Thanks, ' + name + ' — your message is ready. Connect a form service (see README) to actually deliver it.';
  formNote.style.color = 'var(--coffee)';
  form.reset();
});

// Reveal sections on scroll
const revealTargets = document.querySelectorAll('.stat-card, .project-card, .skill-group, .about-copy, .about-stats');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObserver.observe(el);
});
