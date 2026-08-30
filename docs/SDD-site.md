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

- Hero de altura completa con fotografía documental y un panel blanco opaco que envuelve el texto y representa el paso de papel a información digital. El panel se usa igual en el home y en las cuatro páginas de servicio.
- Navegación superpuesta y transparente sobre la imagen.
- Servicios en cuatro columnas en desktop y apilados en mobile.
- Sección Nosotros sobre fondo negro, en tres columnas alineadas al tope: marca, "Quienes somos" y "Qué hacemos". Las dos columnas de texto comparten barra amarilla y título para que arranquen a la misma altura.
- Contacto en amarillo para concentrar la conversión principal.
- Footer negro con certificaciones IRAM descargables.

La firma visual distintiva es el panel blanco del hero: una pieza sobria que vincula el soporte físico con la gestión digital sin agregar ornamentos ajenos a la marca. El velo del hero es neutro; no lleva tinte amarillo sobre la fotografía.

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

- Activación inicial de FormSubmit desde `contacto.web@modoc.com.ar`.
- Revisión final de textos por el sector Comercial.

## Redes sociales

El pie del home enlaza Instagram (`https://www.instagram.com/modocarg/`) y Facebook (`https://www.facebook.com/ModocArgentina`), los únicos dos perfiles oficiales confirmados por MODOC. No hay LinkedIn: no se muestra un tercer ícono apagado, se saca directamente del footer. Los enlaces abren en pestaña nueva con `rel="noopener"`.

## Criterios de aceptación

- B2 carga directamente desde `/` sin parámetros de tema ni redirecciones a carpetas de propuestas.
- El home muestra exactamente cuatro servicios y cada CTA abre su página correcta.
- El cambio de idioma conserva la sección o abre la página equivalente.
- El formulario valida campos obligatorios, utiliza CAPTCHA y apunta al correo aprobado sin PHP.
- Los tres certificados IRAM se descargan desde el home y desde todas las páginas de servicios.
- Las páginas cargan sin errores 404 ni errores JavaScript en desktop, tablet y mobile.

## Iteración de ajustes 2026

Cambios pedidos por MODOC sobre el sitio ya publicado:

- La barra de navegación queda reducida a Home, Servicios y Contacto en las diez páginas. Nosotros y Clientes siguen siendo secciones del home y se alcanzan desde el footer.
- El panel blanco del hero envuelve el texto en lugar de ser una caja de alto fijo, y se aplica también a las páginas de servicio, que antes usaban un panel oscuro translúcido.
- Los degradados de los heroes de servicio pierden el tinte amarillo y quedan neutros para no teñir la fotografía.
- Las páginas de servicio conservan únicamente el botón Contactanos; se elimina "Conocé el servicio".
- El carrusel del home avanza solo cada 7 segundos. Se detiene con hover, foco, pestaña oculta o `prefers-reduced-motion`, y cualquier interacción manual reinicia el ciclo.
- Receptorías amplía el listado y el mapa para ganar legibilidad; el mapa pasa de 520 px a 628 px de ancho.
- Los logos de clientes se agrandan y los tres originales con más margen interno (Swiss Medical, Ministerio de Hacienda y Gobierno de la Ciudad) reciben una ampliación adicional para leerse a la par del resto.

### Primera devolución del cliente

- Receptorías incorpora la sucursal de Santo Tomé, Corrientes, tanto en el listado como en el mapa, y actualiza la cobertura nacional a 19 puntos.
- Dentro de la misma sección se comunica el plazo de 24/48 horas para la digitalización y publicación en ARCA.
- La información de retiros, beneficios, plazo y contactos se agrupa en una ficha de filas equivalentes; el amarillo funciona como acento lateral y ningún dato secundario domina visualmente sobre los demás.
- Se descarta el pedido de sumar retiros personalizados como contenido nuevo; el resto del home permanece sin cambios.

## RITE

Bajo la línea de certificaciones IRAM, en el pie de las diez páginas, se muestra centrado el logotipo conjunto de RITE y la Oficina Anticorrupción. Al pulsarlo se abre un diálogo con el texto institucional sobre la participación de MODOC en el Registro de Integridad y Transparencia para Empresas y Entidades.

- El logotipo es blanco y se apoya sobre el pie negro; vive en `assets/brand/rite-oa.png`.
- El texto del diálogo está en el HTML, no se inyecta por JavaScript, para que siga siendo contenido de la página.
- El diálogo cierra con el botón, con click en el fondo y con Escape. El desbloqueo del scroll no depende del evento `close`.
- Si el archivo del logotipo faltara, la franja se retira sola en lugar de dejar una imagen rota en el pie.

- El pie del diálogo enlaza a `https://www.rite.gob.ar/` en una pestaña nueva con `rel="noopener"`.
- El texto existe en español e inglés, igual que el resto del sitio.

## Medición

Pixel de Meta `2154921781722526` ("Modoc Pixel") instalado en las diez páginas.

- El fragmento de inicialización va al final del `<head>` y dispara `PageView`.
- El `<img>` de respaldo para navegadores sin JavaScript va al comienzo del `<body>`, no en el `<head>`: dentro de `<head>` un `<img>` en `<noscript>` no es HTML válido.
- `analytics.js` reporta el evento `Lead` cuando se envía cualquiera de los formularios, que son la conversión principal del sitio. Sin ese evento la pauta solo podría optimizar por visitas.
- El `Lead` viaja con `content_category` tomado del asunto del formulario, de modo que en el administrador de anuncios se distingue de qué servicio provino cada consulta.
- El evento solo se dispara si `fbq` existe, así que un bloqueador de anuncios no rompe el envío del formulario.

La política de seguridad de contenido de `vercel.json` bloqueaba el pixel por completo: script inline, `connect.facebook.net`, la imagen de `facebook.com` y las conexiones salientes. Se amplió lo mínimo necesario y el script inline se habilita por hash SHA-256, no con `'unsafe-inline'`, para no permitir cualquier script inline en el sitio.

El hash corresponde al contenido exacto del fragmento del pixel, idéntico en las diez páginas. Si se modifica una sola letra del fragmento hay que recalcular el hash y actualizar `vercel.json`, o el pixel deja de ejecutarse en producción sin aviso.

`vercel.json` solo rige en el entorno de prueba de Vercel. El pase al hosting definitivo del cliente se hace copiando el código, no a través de Vercel, así que estas reglas no viajan solas: `.htaccess` en la raíz del repositorio las reproduce para Apache/cPanel. Los dos archivos deben mantenerse sincronizados a mano.

Google Analytics 4 (`G-KKVCGFB5XJ`) instalado en las diez páginas, con el mismo criterio que el pixel de Meta.

- `gtag.js` va apenas se abre el `<head>`, antes que cualquier otro recurso, siguiendo la recomendación de Google para no perder mediciones tempranas de carga.
- El fragmento inline de inicialización se habilita en la CSP por su propio hash SHA-256 (distinto del hash del pixel), no por `'unsafe-inline'`.
- `analytics.js` reporta `generate_lead` en GA4 al mismo tiempo que reporta `Lead` en Meta, cuando se envía cualquier formulario. Los dos eventos viajan con el asunto del formulario para poder separar el rendimiento por servicio.
- La CSP permite `https://*.googletagmanager.com`, `https://*.google-analytics.com` y `https://*.analytics.google.com` porque gtag.js reparte sus peticiones entre subdominios regionales; restringir a un host fijo rompe la medición de forma intermitente. Con Meta y Analytics activos conviene definir con MODOC si se agrega un aviso de cookies.
