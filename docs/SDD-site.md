# SDD - sitio productivo MODOC

## Estado de la decisión

La propuesta B2 es la única dirección visual aprobada y pasa a ser el sitio productivo. Las propuestas restantes quedan fuera de la navegación pública y no condicionan el código final.

## Objetivo

Publicar un sitio institucional bilingüe de MODOC que convierta visitas en consultas comerciales, comunique los cuatro servicios principales y mantenga disponibles las receptorías, clientes, accesos a sistemas y certificaciones IRAM.

## Stack e invariantes

- HTML5 semántico.
- CSS3 nativo con Grid, Flexbox, variables y media queries.
- JavaScript vanilla ES6, sin frameworks ni dependencias de ejecución.
- Sin PHP ni backend propio.
- Todos los recursos del sitio se sirven desde rutas relativas para funcionar en raíz o dentro de una subcarpeta.
- Paleta aprobada: amarillo MODOC `#ffd400`, negro `#111111`, blanco `#ffffff`, papel `#f2f2ee` y línea `#d6d6cf`.
- Tipografías locales: HP Simplified para títulos, Open Sans para lectura y Myriad Pro para datos auxiliares.

## Dirección visual B2

- Hero de altura completa con fotografía documental y una lámina blanca translúcida que representa el paso de papel a información digital.
- Navegación superpuesta y transparente sobre la imagen.
- Servicios en cuatro columnas en desktop y apilados en mobile.
- Sección Nosotros en tres columnas: marca, propósito y forma de trabajo.
- Contacto en amarillo para concentrar la conversión principal.
- Footer negro con certificaciones IRAM descargables.

La firma visual distintiva es la lámina translúcida del hero: una pieza sobria que vincula el soporte físico con la gestión digital sin agregar ornamentos ajenos a la marca.

## Arquitectura pública

- `/index.html`: home en español y URL principal.
- `/index-en.html`: home en inglés.
- `/servicios/*.html`: cuatro páginas en español y cuatro en inglés.
- `/assets/`: logos, tipografías, imágenes, mapa, clientes y certificados.
- `/styles.css` y `/main.js`: estilos e interacción del home.
- `/service-pages.css` y `/service-pages.js`: estilos e interacción compartidos por los servicios.

## Navegación

- El selector ES/EN enlaza páginas equivalentes; no depende de parámetros de URL.
- Servicios y Acceso Clientes funcionan por hover, click, teclado y toque.
- Acceso Clientes contiene únicamente los dos sistemas con hipervínculos aprobados.
- WhatsApp usa `+54 9 11 6886-1829`.

## Formulario y CAPTCHA

- Destinatario: `contacto.web@modoc.com.ar`.
- El envío se delega a FormSubmit mediante HTTPS para evitar dependencia de PHP.
- Se activa el CAPTCHA administrado por FormSubmit con `_captcha=true`.
- Todos los campos se validan con controles HTML5 y el formulario incluye una trampa anti-bot oculta.
- La primera recepción requiere que MODOC confirme el correo de activación enviado por FormSubmit.

## Idiomas y contenido

- Los textos existentes del backup se conservan como fuente editorial.
- El home y las páginas de servicios tienen versiones independientes en español e inglés.
- Los textos continúan sujetos a revisión y aprobación del sector Comercial de MODOC antes de publicación definitiva.

## Accesibilidad y responsive

- Enlace para saltar al contenido, foco visible, etiquetas asociadas al formulario y estados `aria-expanded` en menús.
- Controles operables con teclado y cierre con Escape.
- Respeto de `prefers-reduced-motion`.
- Sin overflow horizontal a 390 px, 768/834 px, 1024 px y desktop.
- Imágenes con texto alternativo y certificados con nombres de descarga descriptivos.

## Pendientes externos

- URLs oficiales de redes sociales de MODOC: los perfiles deben confirmarse antes de activar enlaces públicos.
- Activación inicial de FormSubmit desde `contacto.web@modoc.com.ar`.
- Revisión final de textos por el sector Comercial.

## Criterios de aceptación

- B2 carga directamente desde `/` sin parámetros de tema ni redirecciones a carpetas de propuestas.
- El home muestra exactamente cuatro servicios y cada CTA abre su página correcta.
- El cambio de idioma conserva la sección o abre la página equivalente.
- El formulario valida campos obligatorios, utiliza CAPTCHA y apunta al correo aprobado sin PHP.
- Los tres certificados IRAM se descargan desde el home y desde todas las páginas de servicios.
- Las páginas cargan sin errores 404 ni errores JavaScript en desktop, tablet y mobile.
