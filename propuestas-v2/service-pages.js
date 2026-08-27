(() => {
  const navToggle = document.querySelector('.service-nav-toggle');
  const nav = document.querySelector('.service-nav');
  const clientAccessWrap = document.querySelector('.client-access-wrap');
  const clientAccess = document.querySelector('.client-access');
  const clientAccessMenu = document.querySelector('.client-access-menu');

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
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
  clientAccessMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setAccessMenu(false));
  });
  document.addEventListener('click', (event) => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    if (clientAccessWrap && !clientAccessWrap.contains(event.target) && !path.includes(clientAccessWrap)) setAccessMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setAccessMenu(false);
      clientAccess?.focus();
    }
  });
})();
