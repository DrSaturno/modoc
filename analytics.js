/* Eventos de conversión para la pauta.
   El formulario es la conversión principal del sitio, así que cada envío se
   reporta como Lead. El asunto identifica de qué servicio vino la consulta,
   para poder separar el rendimiento por página en el administrador de anuncios. */
(() => {
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!/formsubmit\.co/.test(form.getAttribute('action') || '')) return;
    if (typeof window.fbq !== 'function') return;

    window.fbq('track', 'Lead', {
      content_name: document.title,
      content_category: form.querySelector('input[name="_subject"]')?.value || '',
    });
  });
})();
