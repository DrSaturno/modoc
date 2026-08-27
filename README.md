# MODOC Web

Sitio institucional estático de MODOC S.A. La dirección visual aprobada es B2 y se sirve directamente desde la raíz del repositorio.

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

## Formulario

Las consultas se envían por HTTPS mediante FormSubmit a `contacto.web@modoc.com.ar`, con CAPTCHA activo. El primer envío requiere confirmar el correo de activación que genera el proveedor.

## Publicación

El repositorio está preparado para despliegue estático en Vercel. `vercel.json` mantiene redirecciones de compatibilidad para las URLs anteriores y define cabeceras de seguridad.
