(() => {
  const certificateLinks = [...document.querySelectorAll('.certificate-link[href$=".pdf"]')];
  if (!certificateLinks.length) return;

  const isEnglish = document.documentElement.lang === 'en';
  const labels = isEnglish
    ? { close: 'Close certificate', open: 'Open PDF', download: 'Download PDF', fallback: 'Certificate preview' }
    : { close: 'Cerrar certificado', open: 'Abrir PDF', download: 'Descargar PDF', fallback: 'Vista previa del certificado' };

  const dialog = document.createElement('dialog');
  dialog.className = 'certificate-modal';
  dialog.setAttribute('aria-labelledby', 'certificate-modal-title');
  dialog.innerHTML = `
    <header class="certificate-modal__header">
      <h2 class="certificate-modal__title" id="certificate-modal-title"></h2>
      <button class="certificate-modal__close" type="button" aria-label="${labels.close}">×</button>
    </header>
    <iframe class="certificate-modal__frame" title="${labels.fallback}"></iframe>
    <footer class="certificate-modal__actions">
      <a class="certificate-modal__open" target="_blank" rel="noopener">${labels.open}</a>
      <a class="certificate-modal__download" download>${labels.download}</a>
    </footer>`;

  document.body.append(dialog);

  const title = dialog.querySelector('.certificate-modal__title');
  const frame = dialog.querySelector('.certificate-modal__frame');
  const closeButton = dialog.querySelector('.certificate-modal__close');
  const openLink = dialog.querySelector('.certificate-modal__open');
  const downloadLink = dialog.querySelector('.certificate-modal__download');
  let activeTrigger = null;

  const closeDialog = () => {
    if (dialog.open) dialog.close();
  };

  certificateLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (typeof dialog.showModal !== 'function') return;

      event.preventDefault();
      activeTrigger = link;
      const pdfUrl = new URL(link.getAttribute('href'), window.location.href).href;
      const certificateName = link.querySelector('img')?.alt || labels.fallback;
      const fileName = link.getAttribute('download') || pdfUrl.split('/').pop();

      title.textContent = certificateName;
      frame.title = certificateName;
      frame.src = `${pdfUrl}#view=FitH&toolbar=1&navpanes=0`;
      openLink.href = pdfUrl;
      downloadLink.href = pdfUrl;
      downloadLink.setAttribute('download', fileName);
      document.body.classList.add('has-certificate-modal');
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('has-certificate-modal');
    frame.src = 'about:blank';
    activeTrigger?.focus();
    activeTrigger = null;
  });
})();

/* Aviso RITE: el texto vive en el HTML; el script solo abre y cierra el diálogo. */
(() => {
  const trigger = document.querySelector('.rite-trigger');
  const dialog = document.querySelector('.rite-modal');
  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

  const closeButton = dialog.querySelector('.rite-modal__close');
  const logo = trigger.querySelector('img');

  // Sin el logotipo la franja no comunica nada: se oculta en lugar de
  // dejar un icono de imagen rota en el pie.
  if (logo) {
    logo.addEventListener('error', () => {
      trigger.closest('.rite-strip')?.remove();
    });
  }

  // El desbloqueo no depende del evento close: si no llegara a dispararse,
  // el body quedaría con overflow hidden y la página sin scroll.
  const unlock = () => document.body.classList.remove('has-rite-modal');

  const closeDialog = () => {
    if (dialog.open) dialog.close();
    unlock();
    trigger.focus();
  };

  trigger.addEventListener('click', () => {
    document.body.classList.add('has-rite-modal');
    dialog.showModal();
    closeButton?.focus();
  });

  closeButton?.addEventListener('click', closeDialog);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener('cancel', unlock);
  dialog.addEventListener('close', unlock);
})();
