(() => {
  const navToggle = document.querySelector('.service-nav-toggle');
  const nav = document.querySelector('.service-nav');
  const servicesMenuWrap = document.querySelector('.services-menu-wrap');
  const servicesMenuTrigger = document.querySelector('.services-menu-trigger');
  const servicesMenu = document.querySelector('.services-menu');
  const clientAccessWrap = document.querySelector('.client-access-wrap');
  const clientAccess = document.querySelector('.client-access');
  const clientAccessMenu = document.querySelector('.client-access-menu');

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
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
      navToggle?.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
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
})();
