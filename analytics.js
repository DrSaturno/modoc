/* Eventos de conversión para la pauta.
   El formulario es la conversión principal del sitio, así que cada envío se
   reporta como Lead (Meta) y generate_lead (GA4). El asunto identifica de qué
   servicio vino la consulta, para separar el rendimiento por página tanto en
   el administrador de anuncios como en Analytics. */
(() => {
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (!/formsubmit\.co/.test(form.getAttribute('action') || '')) return;

    const subject = form.querySelector('input[name="_subject"]')?.value || '';

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: document.title,
        content_category: subject,
      });
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        page_title: document.title,
        form_subject: subject,
      });
    }
  });
})();
