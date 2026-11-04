const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

// Subtle reveal animation for content as it enters the viewport.
const revealTargets = document.querySelectorAll(
  '.section-heading, .expertise-card, .timeline-content, .project-card, .principles article'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(target => {
    target.classList.add('reveal');
    observer.observe(target);
  });
}
