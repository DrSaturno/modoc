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

- El home aprobado no se rediseña en esta etapa. Solo se agregan el destinatario solicitado del formulario, el comportamiento del menú de Acceso Clientes y los enlaces a las páginas de servicios.
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

El control se convierte en un botón accesible con apertura por click, hover y foco. El submenú conserva los accesos detectados en `Backup 20-04/sistemas.html`:

1. `https://gd.modoc.com.ar/zamba.web/` — Gestor Documental - Despachantes de Aduana.
2. `http://gdg1.modoc.com.ar` — Gestor Documental - Administración de Archivos.
3. `http://bddo1.modoc.com.ar` — Sistema de Firma y Recibo de Sueldo Digital.

El tercer acceso está presente en el backup aunque la referencia visual entregada muestre dos líneas principales; se conserva para no perder una ruta existente.

### CAPTCHA

El backup implementa Google reCAPTCHA v2 y la propuesta conserva el bloque visual con ese proveedor. No se simula una validación de seguridad en JavaScript: la integración real queda pendiente de la clave de sitio, el dominio y el endpoint de envío definidos por MODOC.

## Criterios de aceptación

- Cada tarjeta de servicio del home abre el detalle correcto.
- Cada detalle tiene URL HTML independiente y versión inglesa independiente.
- No existe una referencia funcional a `index.php` para renderizar las páginas nuevas.
- El formulario contiene el destinatario `contacto.web@modoc.com.ar` y el botón es de tipo submit.
- Acceso Clientes abre y cierra el submenú con mouse, teclado y click fuera; Escape lo cierra.
- El menú y el contenido no generan overflow horizontal en un viewport mobile.
- Los textos incorporados pueden contrastarse literalmente con los archivos fuente indicados.
- Los enlaces externos de acceso se abren en una pestaña nueva con `rel="noopener"`.
