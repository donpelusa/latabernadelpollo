# La Barra - Menú Digital de Cócteles

Menú digital elegante y mobile-first para eventos de bar.

## Características

- Interfaz de acordeón interactivo
- Solo un cóctel abierto a la vez
- Animaciones suaves
- Diseño mobile-first
- Tema oscuro estilo bar
- Imágenes lazy loading
- 8 cócteles clásicos incluidos

## Tecnologías

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
/menu-bar
  /app
    layout.tsx       # Layout principal con metadatos
    page.tsx         # Página principal con header y footer
    globals.css      # Estilos globales Tailwind
  /components
    CocktailList.tsx # Lista de cócteles con estado del acordeón
    CocktailItem.tsx # Item individual con animación
  /data
    cocktails.ts     # Datos de los cócteles
```

## Personalización

Para modificar los cócteles, edita `/data/cocktails.ts`.

Para cambiar el tema de colores, modifica `tailwind.config.ts`:
- `background`: Color de fondo (#1a1a2e)
- `foreground`: Color de texto (#eee)
- `accent`: Color de acento (#e94560)
- `secondary`: Color secundario (#0f3460)
