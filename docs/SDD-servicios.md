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
- El layout debe funcionar dentro de `/propuestas-v2/` en desktop y mobile.
- Se mantienen las tipografías locales y la paleta aprobada: blanco, negro y amarillo MODOC.
- Las imágenes se sirven desde `propuestas-v2/assets/services/` para que el prototipo sea autocontenido.

## Fuentes de contenido

La fuente primaria es `Backup 20-04/servicios/`:

- `COMERCIO EXTERIOR (PSAD)/index.html` y `index_en.php`.
- `CONSULTORIA/index.html` y `index_en.php`.
- `DIGITALIZACION Y GESTION DOCUMENTAL/index.html` y `index_en.php`.
- `GUARDA Y CUSTODIA DE DOCUMENTACION FISICA Y DIGITAL/index.html` y `index_en.php`.

Las imágenes originales se copian a `propuestas-v2/assets/services/` manteniendo una carpeta por servicio.

## Decisiones técnicas

### Formulario

El formulario del home queda dirigido a `mailto:contacto.web@modoc.com.ar` como destino estático verificable en el prototipo. La entrega real de correo y la validación CAPTCHA efectiva requieren definir el proveedor y sus claves antes de publicación.

### Acceso Clientes

El control se convierte en un botón accesible con apertura por click, hover y teclado. Por decisión del cliente, el submenú muestra únicamente los dos accesos con hipervínculo aprobados:

1. `https://gd.modoc.com.ar/zamba.web/` — Gestor Documental - Despachantes de Aduana.
2. `http://gdg1.modoc.com.ar` — Gestor Documental - Administración de Archivos.
No se muestran el tercer renglón ni los iconos decorativos del panel anterior.

### Menú Servicios y carrusel

El ítem Servicios despliega las cuatro páginas de detalle por hover, teclado y click/toque. En mobile el desplegable se integra al menú hamburguesa. El carrusel del home contiene exactamente los cuatro servicios desarrollados: Comercio Exterior PSAD, Consultoría, Digitalización y Gestión Documental, y Guarda y Custodia. Firma Digital y Logística no forman parte del carrusel de esta etapa.

### CAPTCHA

El backup implementa Google reCAPTCHA v2 y la propuesta conserva el bloque visual con ese proveedor. No se simula una validación de seguridad en JavaScript: la integración real queda pendiente de la clave de sitio, el dominio y el endpoint de envío definidos por MODOC.

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
