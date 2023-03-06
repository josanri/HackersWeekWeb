# Hackers Week Web

[![Build and Deploy to Pages](https://github.com/ConsejoInfUMA/HackersWeekWeb/actions/workflows/main.yml/badge.svg)](https://github.com/ConsejoInfUMA/HackersWeekWeb/actions/workflows/main.yml)

<a href="https://bulma.io">
  <img
    src="https://bulma.io/images/made-with-bulma.png"
    alt="Made with Bulma"
    width="128"
    height="24">
</a>

## Desarrollo

Una vez clonado el repositorio instala las dependencias con `npm i` e inicia el development server:

```bash
npm run dev
```

La web está hecha con [SvelteKit](https://kit.svelte.dev/), en caso de dudas mira la [documentación oficial](https://kit.svelte.dev/docs/introduction) o haz el [tutorial de Svelte](https://svelte.dev/tutorial/basics).

## Compilación

Compila el proyecto y visualiza una versión de producción:

```bash
npm run build
npm run preview
```

## Actualización

El favicon se encuentra en `static/favicon.png` y es una imagen png 128x128.

### Datos

Los datos de las actividades se guardan en el directorio `src/lib/data/`. Los datos se encuentran en varios archivos llamados `src/lib/data/conferences.json`, `src/lib/data/workshops.json` y `src/lib/data/videogames.json`. Los datos se guardan dentro de un array compuesto por objetos de tipo evento. El archivo `src/lib/data/rol.json` puede añadirse en caso de que se planifiquen partidas.

Cada evento consiste en un objeto JSON con los campos:
- `"title"`: Nombre del evento.
- `"description"`: Descripción del evento como array de strings.
- `"url"`: Enlace al evento.
- `"date"`: Fecha y hora del evento.
- `"ubicacion"`: Ubicación del evento.
- `"ponente, tutor, moderador"`: Añaden información sobre actividades organizadas.

El componente `src/lib/components/tarjeta` controla la forma en la que se presenta la información.

### Estilo

El estilo de la página se puede cambiar editando `src/app.scss` (estilo global, fuentes, etc) y `src/variables.scss` (colores, tamaños, etc.). La web usa [Bulma](https://bulma.io/) como framework css. Para ver la lista completa de variables que puedes editar visita la [documentación sobre personalización](https://bulma.io/documentation/customize/variables/) de Bulma.

Actualmente la web usa los colores corporativos de la Hackers Week y algunos colores de la paleta [Catppuccin](https://github.com/catppuccin/catppuccin). En el futuro se podrían tomar más colores de esta paleta, escoger otra o prescindir de ella.