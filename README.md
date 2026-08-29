# MODOC Web

Sitio institucional estático de MODOC S.A. La dirección visual aprobada es B2 y se sirve directamente desde la raíz del repositorio.

## Estado actual

- Home B2 productivo completo en español e inglés.
- Comercio Exterior PSAD modernizado en español e inglés.
- Consultoría de Archivos modernizada en español e inglés.
- Digitalización y Gestión Documental modernizada en español e inglés.
- Guarda y Custodia modernizada en español e inglés.

Para continuar el proyecto con otra persona o IA, leer primero [docs/AI-HANDOFF.md](docs/AI-HANDOFF.md), [docs/SDD-site.md](docs/SDD-site.md) y [docs/SDD-servicios.md](docs/SDD-servicios.md).

## Stack

- HTML5 semántico.
- CSS3 nativo.
- JavaScript vanilla ES6.
- Sin PHP, framework ni proceso de compilación.

## Ejecución local

Desde la raíz del repositorio:

```powershell
python -m http.server 8000
```

Abrir `http://127.0.0.1:8000/`.

## Estructura pública

- `index.html`: home en español.
- `index-en.html`: home en inglés.
- `servicios/`: páginas de los cuatro servicios en ambos idiomas.
- `assets/`: imágenes, tipografías, logos, mapa y certificados.
- `styles.css` y `main.js`: presentación e interacción del home.
- `service-pages.css` y `service-pages.js`: código compartido por las páginas de servicios.
- `docs/`: especificaciones SDD y criterios de aceptación.

## Fuentes canónicas

Editar únicamente `index.html`, `index-en.html`, `servicios/`, los CSS/JS de raíz y `assets/`. Las carpetas `propuestas/`, `propuestas-v2/`, `entrega-propuestas/`, `Backup 20-04/` y los cuatro HTML de servicios duplicados en la raíz son material histórico o de compatibilidad; no son la implementación productiva.

## Formulario

Las consultas se envían por HTTPS mediante FormSubmit a `contacto.web@modoc.com.ar`, con CAPTCHA activo. El primer envío requiere confirmar el correo de activación que genera el proveedor.

## Publicación

Vercel se usa como entorno de prueba para que el cliente revise el sitio antes del pase a producción; `vercel.json` mantiene ahí las redirecciones de compatibilidad para las URLs anteriores y las cabeceras de seguridad (incluida la política que habilita el pixel de Meta).

El sitio definitivo se publica en el hosting propio del cliente, copiando el código — no a través de Vercel. `vercel.json` no viaja a ese hosting: `.htaccess` en la raíz reproduce las mismas redirecciones y cabeceras para Apache/cPanel. Si se cambia algo en uno, hay que replicarlo en el otro.
