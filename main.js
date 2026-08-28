(() => {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots = [...document.querySelectorAll('.carousel-pagination button')];
  const previous = document.querySelector('.carousel-arrow--prev');
  const next = document.querySelector('.carousel-arrow--next');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const servicesMenuWrap = document.querySelector('.services-menu-wrap');
  const servicesMenuTrigger = document.querySelector('.services-menu-trigger');
  const servicesMenu = document.querySelector('.services-menu');
  const clientAccessWrap = document.querySelector('.client-access-wrap');
  const clientAccess = document.querySelector('.client-access');
  const clientAccessMenu = document.querySelector('.client-access-menu');
  const heroStage = document.querySelector('.hero-stage');
  const languageLink = document.querySelector('.language a');
  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === current);
      slide.setAttribute('aria-hidden', String(slideIndex !== current));
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === current);
      dot.setAttribute('aria-current', dotIndex === current ? 'true' : 'false');
    });
  };

  const AUTOPLAY_MS = 7000;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let autoplayId = null;

  const stopAutoplay = () => {
    if (autoplayId !== null) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (slides.length < 2 || reduceMotion.matches || document.hidden) return;
    autoplayId = setInterval(() => showSlide(current + 1), AUTOPLAY_MS);
  };

  // Cada interacción manual reinicia el ciclo para no cortar la lectura.
  const goTo = (index) => {
    showSlide(index);
    startAutoplay();
  };

  previous?.addEventListener('click', () => goTo(current - 1));
  next?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => goTo(Number(dot.dataset.go))));

  if (heroStage && slides.length > 1) {
    heroStage.addEventListener('mouseenter', stopAutoplay);
    heroStage.addEventListener('mouseleave', startAutoplay);
    heroStage.addEventListener('focusin', stopAutoplay);
    heroStage.addEventListener('focusout', startAutoplay);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopAutoplay(); else startAutoplay();
    });
    reduceMotion.addEventListener('change', startAutoplay);
    startAutoplay();
  }

  if (heroStage && slides.length > 1) {
    let touchStartX = 0;
    heroStage.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0;
    }, { passive: true });
    heroStage.addEventListener('touchend', (event) => {
      const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
      const distance = touchStartX - touchEndX;
      if (Math.abs(distance) >= 48) goTo(current + (distance > 0 ? 1 : -1));
    }, { passive: true });
  }

  const setNav = (open) => {
    if (!navToggle || !nav) return;
    const isEnglish = document.documentElement.lang === 'en';
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open
      ? (isEnglish ? 'Close menu' : 'Cerrar menú')
      : (isEnglish ? 'Open menu' : 'Abrir menú'));
    nav.classList.toggle('is-open', open);
  };

  navToggle?.addEventListener('click', () => {
    setNav(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  const setServicesMenu = (open) => {
    if (!servicesMenuTrigger || !servicesMenu) return;
    servicesMenuTrigger.setAttribute('aria-expanded', String(open));
    servicesMenu.classList.toggle('is-open', open);
  };

  servicesMenuTrigger?.addEventListener('click', () => {
    const open = servicesMenuTrigger.getAttribute('aria-expanded') === 'true';
    setServicesMenu(!open);
  });
  servicesMenuWrap?.addEventListener('pointerenter', () => servicesMenuWrap.classList.remove('is-hover-suppressed'));
  servicesMenuWrap?.addEventListener('pointerleave', () => servicesMenuWrap.classList.remove('is-hover-suppressed'));

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setServicesMenu(false);
      setNav(false);
    });
  });

  const setAccessMenu = (open) => {
    if (!clientAccess || !clientAccessMenu) return;
    clientAccess.setAttribute('aria-expanded', String(open));
    clientAccessMenu.classList.toggle('is-open', open);
  };

  clientAccess?.addEventListener('click', () => {
    const open = clientAccess.getAttribute('aria-expanded') === 'true';
    setAccessMenu(!open);
  });
  clientAccessWrap?.addEventListener('pointerenter', () => clientAccessWrap.classList.remove('is-hover-suppressed'));
  clientAccessWrap?.addEventListener('pointerleave', () => clientAccessWrap.classList.remove('is-hover-suppressed'));

  clientAccessMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setAccessMenu(false));
  });
  document.addEventListener('click', (event) => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    if (servicesMenuWrap && !servicesMenuWrap.contains(event.target) && !path.includes(servicesMenuWrap)) setServicesMenu(false);
    if (clientAccessWrap && !clientAccessWrap.contains(event.target) && !path.includes(clientAccessWrap)) setAccessMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const focusInServices = servicesMenuWrap?.contains(document.activeElement);
      const focusInAccess = clientAccessWrap?.contains(document.activeElement);
      servicesMenuWrap?.classList.add('is-hover-suppressed');
      clientAccessWrap?.classList.add('is-hover-suppressed');
      setServicesMenu(false);
      setAccessMenu(false);
      if (focusInServices) servicesMenuTrigger?.focus();
      else if (focusInAccess) clientAccess?.focus();
    }
  });

  if (languageLink && window.location.hash) {
    languageLink.href = `${languageLink.getAttribute('href').split('#')[0]}${window.location.hash}`;
  }

  showSlide(0);
})();
