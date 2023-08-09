# Hackers Week
## Dependencias
La página de la Hackers Week está basada en **Hugo** con el tema de **Blowfish**.
## Desarrollo
### Iniciar en desarrollo
```
hugo server [-D]
```
Podemos añadir la ```-D``` para que se muestren los artículos en borrador también.
### Contenido
```
hugo new carpeta/subcarpeta/archivo.md
```
Si quieres usar las plantillas, puedes crear basadas en tipos, por ejemplo
```
hugo new --kind ponencia carpeta/subcarpeta/archivo.md
```
Se basará en el arquetipo de ponencia para que sirva de plantilla, que es algo más elegante que copiar y pegar...
### Cómo añadir nuevo contenido
La estructura del contenido viene dada por:
- index.md como artículos
- _index.md como aglomeradores de artículos.
### Thumbnails
Añadir un archivo featured.(png/webp) en la misma carpeta que la entrada.
### SEO
El SEO está desactivado para desarrollo por lo que Lighthouse puede notificarlo en desarrollo, pero no debería en producción.

### Configuración
Viene indicada en config/_default, ver más detalles en la documentación oficial.
### Tools
- Herramienta para la generación de colores para Tailwind [Fugu](https://github.com/nunocoracao/fugu)
### Colores
Existen tres colores personalizables que conforman la paleta de colores: **neutral**, **primary** y **secondary**; los colores originales se encuentran en la variable "*-500", si el número crece, se hace más oscuro y disminuirlo lo hace más claro.
## Despliegue
### Actions
En la carpeta `.github/workflows` se puede encontrar el `.yml` para el despliegue de la página en Github Pages
### Build
Para construir el sitio web de Hugo deberás ejecutar el siguiente comando:
```
hugo --minify
```
, el resultado, los archivos de la página web, se depositarán en la carpeta public, aunque el resultado no funciona si no está siendo ejecutado desde un servidor.