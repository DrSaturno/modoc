# SDD — páginas de servicios MODOC

## Objetivo

Implementar las páginas estáticas de detalle de los cuatro servicios del home aprobado, preservando el contenido existente del backup y manteniendo el sitio ejecutable desde una subcarpeta sin depender de PHP.

## Alcance

- Comercio Exterior PSAD.
- Consultoría de archivos.
- Digitalización y Gestión Documental.
- Guarda y Custodia de documentación física y digital.
- Versión en español y versión en inglés para cada servicio.
- Navegación compartida con el home: logo, menú, Acceso Clientes, WhatsApp, footer, certificaciones IRAM y firma.

## Invariantes del proyecto

- El home aprobado no se rediseña en esta etapa. Solo se agregan el destinatario solicitado del formulario, los menús de Acceso Clientes y Servicios, y se alinea el carrusel con las cuatro páginas de servicios aprobadas.
- El texto de las páginas se toma del backup sin reescritura editorial. Las correcciones de estilo o contenido quedan sujetas a aprobación del sector Comercial de MODOC.
- La implementación es HTML5 semántico, CSS3 y JavaScript vanilla ES6. No se agrega una dependencia de PHP.
- El layout debe funcionar desde la raíz del sitio o dentro de una subcarpeta, en desktop y mobile.
- Se mantienen las tipografías locales y la paleta aprobada: blanco, negro y amarillo MODOC.
- Las imágenes se sirven desde `assets/services/` para que el sitio sea autocontenido.

## Fuentes de contenido

La fuente primaria es `Backup 20-04/servicios/`:

- `COMERCIO EXTERIOR (PSAD)/index.html` y `index_en.php`.
- `CONSULTORIA/index.html` y `index_en.php`.
- `DIGITALIZACION Y GESTION DOCUMENTAL/index.html` y `index_en.php`.
- `GUARDA Y CUSTODIA DE DOCUMENTACION FISICA Y DIGITAL/index.html` y `index_en.php`.

Las imágenes originales se copian a `assets/services/` manteniendo una carpeta por servicio.

## Decisiones técnicas

### Iteración 2026 — Comercio Exterior PSAD

La primera modernización individual se aplica a Comercio Exterior PSAD en español e inglés. Las otras tres páginas conservan su composición actual hasta ser abordadas una por una.

- El hero utiliza una nueva fotografía aduanera en colores naturales, con luz cálida y un velo amarillo/negro de baja opacidad para mantener legibilidad sin ocultar la imagen.
- El contenido existente se conserva literalmente y se redistribuye en bloques editoriales más legibles.
- “Cómo lo hacemos posible” presenta las mismas tres ideas del backup y destaca el respaldo KODAK como parte del método, sin incorporar métricas nuevas.
- “Nuestro proceso” se implementa como una infografía HTML/CSS vertical de cuatro etapas: recepción, captura y control, firma/publicación, y rearmado/guarda.
- El cierre amarillo contiene el mismo llamado comercial y un formulario propio que utiliza el mismo destinatario, CAPTCHA y protección antispam del home.
- La infografía, el formulario y el hero deben conservar su jerarquía a 390 px sin depender de una imagen rasterizada para explicar el proceso.

### Visor de certificados IRAM

Todos los enlaces de imágenes IRAM abren un diálogo accesible con una vista previa del PDF y una acción explícita de descarga. Si JavaScript no se ejecuta, el enlace conserva la descarga directa como alternativa.

### Formulario

Los formularios del home y de las páginas modernizadas se envían por HTTPS a FormSubmit para entregar las consultas a `contacto.web@modoc.com.ar`, sin depender de PHP. La primera recepción requiere confirmar el correo de activación del proveedor.

### Acceso Clientes

El control se convierte en un botón accesible con apertura por click, hover y teclado. Por decisión del cliente, el submenú muestra únicamente los dos accesos con hipervínculo aprobados:

1. `https://gd.modoc.com.ar/zamba.web/` — Gestor Documental - Despachantes de Aduana.
2. `http://gdg1.modoc.com.ar` — Gestor Documental - Administración de Archivos.
No se muestran el tercer renglón ni los iconos decorativos del panel anterior.

### Menú Servicios y carrusel

El ítem Servicios despliega las cuatro páginas de detalle por hover, teclado y click/toque. En mobile el desplegable se integra al menú hamburguesa. El carrusel del home contiene exactamente los cuatro servicios desarrollados: Comercio Exterior PSAD, Consultoría, Digitalización y Gestión Documental, y Guarda y Custodia. Firma Digital y Logística no forman parte del carrusel de esta etapa.

### CAPTCHA

El backup implementaba Google reCAPTCHA v2. La versión estática utiliza el CAPTCHA administrado por FormSubmit (`_captcha=true`) para evitar una simulación insegura en JavaScript y no requerir claves expuestas ni un backend PHP.

## Criterios de aceptación

- Cada tarjeta de servicio del home abre el detalle correcto.
- Cada detalle tiene URL HTML independiente y versión inglesa independiente.
- No existe una referencia funcional a `index.php` para renderizar las páginas nuevas.
- El formulario contiene el destinatario `contacto.web@modoc.com.ar` y el botón es de tipo submit.
- Acceso Clientes abre y cierra el submenú con mouse, teclado y click fuera; Escape lo cierra.
- Servicios abre sus cuatro enlaces con mouse, teclado y toque, tanto en el home como en las páginas de detalle.
- El carrusel presenta cuatro slides y cada botón “Más información” abre el detalle correspondiente.
- Las cabeceras de los servicios muestran una imagen a pantalla completa con contraste suficiente para el texto.
- El menú y el contenido no generan overflow horizontal en viewports desktop, tablet o mobile.
- Los textos incorporados pueden contrastarse literalmente con los archivos fuente indicados.
- Los enlaces externos de acceso se abren en una pestaña nueva con `rel="noopener"`.
- Las imágenes IRAM abren el visor emergente, Escape y el botón cerrar lo cierran, y la descarga conserva el nombre correcto del PDF.
- Comercio Exterior PSAD presenta su proceso como una secuencia vertical de cuatro etapas y contiene un formulario funcional en su cierre amarillo.
