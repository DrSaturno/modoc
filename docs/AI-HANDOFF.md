# Traspaso técnico — MODOC Web

Documento de continuidad para que otra persona o IA pueda retomar el proyecto sin depender del historial de conversación.

## Punto de partida

- Repositorio oficial: `https://github.com/DrSaturno/modoc.git`.
- Rama de trabajo y publicación: `main`.
- Sitio estático sin compilación: HTML5, CSS3 y JavaScript vanilla ES6.
- No agregar PHP, framework, backend propio ni rutas absolutas dependientes del dominio.
- Dirección visual aprobada: propuesta B2.

## Lectura obligatoria antes de editar

1. `README.md`: ejecución, estructura y publicación.
2. `docs/SDD-site.md`: invariantes globales y criterios de aceptación.
3. `docs/SDD-servicios.md`: fuente de contenido y decisiones de cada servicio.
4. Este documento: estado operativo y siguiente tarea.

## Fuente productiva canónica

| Área | Archivos canónicos |
| --- | --- |
| Home español | `index.html`, `styles.css`, `main.js` |
| Home inglés | `index-en.html`, `styles.css`, `main.js` |
| Base compartida de servicios | `service-pages.css`, `service-pages.js` |
| Comercio Exterior PSAD | `servicios/comercio-exterior.html`, `servicios/comercio-exterior-en.html`, `psad-2026.css` |
| Consultoría | `servicios/consultoria.html`, `servicios/consultoria-en.html`, `consultoria-2026.css` |
| Digitalización | `servicios/digitalizacion.html`, `servicios/digitalizacion-en.html`, `digitalizacion-2026.css` |
| Guarda y Custodia | `servicios/guarda-custodia.html`, `servicios/guarda-custodia-en.html`, `guarda-2026.css` |
| Certificados | `certificate-viewer.css`, `certificate-viewer.js`, `assets/certifications/` |
| Especificaciones | `docs/SDD-site.md`, `docs/SDD-servicios.md` |

No editar como fuente productiva:

- `Backup 20-04/`: fuente histórica de textos e imágenes; es de consulta.
- `propuestas/`, `propuestas-v2/` y `entrega-propuestas/`: mockups y entregas anteriores.
- `comercio-exterior.html`, `consultoria.html`, `digitalizacion.html` y `guarda-custodia.html` de la raíz: duplicados históricos cubiertos por redirecciones de Vercel.
- `output/`, `tmp/` y `.playwright-cli/`: artefactos locales.

## Estado funcional

### Terminado

- Home B2 bilingüe con carrusel de cuatro servicios.
- Sección Nosotros, receptorías con mapa, clientes, formulario y footer.
- Menús desplegables de Servicios y Acceso Clientes compatibles con mouse, teclado y toque.
- Burbuja de WhatsApp con `11 6886-1829`.
- Certificados IRAM en visor emergente, con descarga de su PDF correspondiente.
- Comercio Exterior PSAD, Consultoría, Digitalización y Guarda y Custodia modernizados en español e inglés.
- Los cuatro servicios modernizados tienen hero fotográfico, contenido visual HTML/CSS, formulario propio y adaptación desktop/tablet/mobile.

### Siguiente tarea recomendada

Las cuatro páginas de servicio ya están modernizadas. No hay una tarea de modernización pendiente por defecto; antes de iniciar trabajo nuevo:

1. Confirmar con Comercial de MODOC si hay pedidos de ajuste de contenido, fotografía o formulario sobre alguno de los cuatro servicios.
2. Revisar los "Pendientes externos" de este documento (redes sociales, activación de FormSubmit, aprobación final de textos) por si ya fueron resueltos y pueden cerrarse.
3. Si no hay pedidos nuevos, tratar cualquier cambio como una iteración puntual: documentar la decisión en `docs/SDD-servicios.md` y validar HTML/responsive antes de cerrar.

## Reglas que no deben cambiarse sin aprobación

- Paleta: amarillo MODOC `#ffd400`, negro, blanco y papel gris claro.
- Mantener español e inglés como páginas HTML independientes.
- Conservar los textos heredados sin reescritura editorial; Comercial de MODOC debe aprobar cualquier cambio.
- Conversión principal: formulario.
- Destinatario de todos los formularios: `contacto.web@modoc.com.ar`.
- Envío estático mediante FormSubmit por HTTPS, `_captcha=true` y campo trampa `_honey`.
- WhatsApp: `https://wa.me/5491168861829`.
- Teléfonos institucionales del footer: `+54 11 4304-2933 / 6823 / 4864`.
- Acceso Clientes contiene solamente los dos enlaces aprobados existentes.
- Firma del footer: `By DrSaturno`, enlazada a `http://www.planetasaturno.com` y tratada como detalle secundario.
- Las redes sociales siguen pendientes de URLs oficiales; no inventarlas.

## Recursos visuales

- Marca: `assets/brand/`.
- Clientes: `assets/clients/`.
- Receptorías: `assets/maps/mapamodoc2.png`.
- Certificaciones y PDFs oficiales: `assets/certifications/`.
- Imágenes por servicio: `assets/services/<servicio>/`.
- Las fotografías 2026 de PSAD, Consultoría y Digitalización ya están dentro de sus carpetas respectivas y son las usadas por las páginas canónicas.

## Ejecución local

Desde la raíz:

```powershell
python -m http.server 8000
```

Abrir:

- `http://127.0.0.1:8000/`
- `http://127.0.0.1:8000/servicios/guarda-custodia.html`

No abrir `/propuestas-v2/` para evaluar el producto actual.

## Verificación antes de cada commit

```powershell
npx --yes html-validate index.html index-en.html servicios/*.html
git diff --check
git status --short
```

Además:

- Revisar español e inglés.
- Probar 1280 px, 834 px y 390 px.
- Confirmar que `document.documentElement.scrollWidth` no supere el ancho visible.
- Revisar consola, carga de imágenes, navegación, menús y enlaces IRAM.
- No enviar el formulario real durante pruebas visuales.
- Mantener `vercel.json` como configuración de raíz y cabeceras de seguridad.
- La CSP de `vercel.json` es estricta y no permite scripts inline sueltos. Todo script de terceros (medición, chat, mapas) requiere ampliar la política además de pegar el fragmento, o falla solo en producción y no en local. El pixel de Meta se habilita por hash SHA-256 del fragmento: si se edita el fragmento hay que recalcular el hash y actualizar `vercel.json`.
- Vercel es un entorno de prueba: `vercel.json` solo lo interpreta Vercel y no viaja al hosting definitivo del cliente. El archivo `.htaccess` en la raíz reproduce lo mismo (redirects y cabeceras) para Apache/cPanel, que es el hosting esperado según las restricciones de PHP del proyecto. Cualquier cambio en `vercel.json` — una redirección nueva, la CSP, el hash del pixel — hay que replicarlo también en `.htaccess`, o el sitio se comporta distinto en el entorno de prueba y en producción. Si el hosting real no resulta ser Apache, `.htaccess` no sirve y hay que preparar el equivalente de ese servidor.

## Pendientes externos

- Confirmación de las URLs oficiales de redes sociales.
- Activación inicial de FormSubmit desde `contacto.web@modoc.com.ar` si todavía no fue realizada.
- Revisión y aprobación final de textos por Comercial de MODOC.
- Confirmación definitiva de URLs de Acceso Clientes, si MODOC informa cambios.

## Cierre de una iteración

1. Actualizar el SDD correspondiente.
2. Validar HTML y responsive.
3. Comprobar que el árbol de trabajo contenga únicamente cambios de la iteración.
4. Crear un commit descriptivo en `main`.
5. Subir a `origin/main`.
