/* =========================================
   SAKSHAM DIXIT PORTFOLIO — main.js
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- HAMBURGER MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });


  /* ---- ACTIVE NAV LINK ON SCROLL ---- */
  const sections = document.querySelectorAll('section[id], .hero[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    let current = '';
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });


  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll(
    '.proj-card, .achieve-card, .event-row, .blog-card, .sec-header, .about-text, .skills-panel, .hire-box'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards in grids
        const delay = entry.target.closest('.proj-grid, .achieve-grid, .blog-grid')
          ? [...entry.target.parentElement.children].indexOf(entry.target) * 80
          : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ---- ANIMATED STAT COUNTERS ---- */
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const isFloat = String(target).includes('.');
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target;
    };

    requestAnimationFrame(tick);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statsObserver.observe(el));


  /* ---- SKILL BAR ANIMATION ---- */
  const skillFills = document.querySelectorAll('.skill-fill[data-width]');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));


  /* ---- SMOOTH SCROLL for # links (fallback for older browsers) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- COPY EMAIL BUTTON ---- */
  const copyEmailButton = document.querySelector('.btn-copy-email');
  if (copyEmailButton) {
    copyEmailButton.addEventListener('click', () => {
      const email = copyEmailButton.dataset.email;
      navigator.clipboard.writeText(email).then(() => {
        copyEmailButton.textContent = 'Copied!';
        setTimeout(() => { copyEmailButton.textContent = 'Copy email'; }, 1800);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  }

  /* ---- EXPERIENCE TAB SWITCHER ---- */
  const tabs = document.querySelectorAll('.tab-panel .tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(button => {
        const isSelected = button === tab;
        button.classList.toggle('active', isSelected);
        button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });

      tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tab.dataset.target);
      });
    });
  });

  /* ---- PROJECT CARD NAVIGATION ---- */
  const projectCards = document.querySelectorAll('.proj-card[data-project-id]');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.projectId;
      if (projectId) {
        window.location.href = `project.html?project=${encodeURIComponent(projectId)}`;
      }
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  /* ---- NAVBAR SHADOW ON SCROLL ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.borderBottomColor = window.scrollY > 10
      ? 'rgba(0,200,180,0.2)'
      : 'rgba(0,200,180,0.12)';
  }, { passive: true });


  /* ---- TYPING CURSOR EFFECT on hero tag ---- */
  const heroTag = document.querySelector('.hero-tag');
  if (heroTag) {
    const text = heroTag.textContent;
    heroTag.textContent = '';
    heroTag.style.opacity = '1';
    heroTag.style.animation = 'none';

    let i = 0;
    const type = () => {
      if (i <= text.length) {
        heroTag.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 30);
      }
    };
    setTimeout(type, 300);
  }

});
