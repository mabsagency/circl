// ════════════════════════════════════════
// CURSOR
// ════════════════════════════════════════
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

// Smooth trail
setInterval(() => {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';
}, 16);

// Cursor interaction on interactive elements
document.querySelectorAll('a, button, [role="button"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
    cursor.style.background = 'rgba(56, 189, 248, 0.6)';
    trail.style.borderColor = 'rgba(56, 189, 248, 0.6)';
    trail.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'var(--cyan)';
    trail.style.borderColor = 'rgba(56, 189, 248, 0.4)';
    trail.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// ════════════════════════════════════════
// NAV SCROLL
// ════════════════════════════════════════
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// ════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[class*="visible"]').forEach(el => {
  observer.observe(el);
});

// ════════════════════════════════════════
// 3D CARD TILT
// ════════════════════════════════════════
document.querySelectorAll('.feat-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) scale(1.01) perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1) perspective(600px) rotateX(0) rotateY(0)';
  });
});

// ════════════════════════════════════════
// MAGNETIC BUTTONS
// ════════════════════════════════════════
document.querySelectorAll('.btn-primary, .btn-secondary, .store-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translateX(${x * 0.15}px) translateY(${y * 0.15 - 3}px) scale(1.02)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ════════════════════════════════════════
// PARALLAX ORBS
// ════════════════════════════════════════
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelectorAll('.orb').forEach((orb, i) => {
    const d = (i + 1) * 0.4;
    orb.style.transform = `translate(${x * d}px, ${y * d}px)`;
  });
});

console.log('✦ Circl interactions loaded');
