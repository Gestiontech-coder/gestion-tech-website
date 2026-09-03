# Gestión Tech — Landing Page

Landing page para Gestión Tech (auditoría técnica de telecomunicaciones), construida con Next.js 15 (App Router), TypeScript, Tailwind CSS v4, `next-intl` (ES/EN), `framer-motion` y `lucide-react`.

## Instalación

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) — te redirige automáticamente a `/es` (idioma por defecto). El selector de idioma en el header cambia a `/en`.

## Estructura

```
app/
  [locale]/
    layout.tsx        # layout raíz por idioma (fuentes, metadata, provider de next-intl)
    page.tsx           # ensambla las secciones de la home
  globals.css           # tokens de color/tipografía (Tailwind v4 @theme)
middleware.ts            # detección y enrutamiento de idioma (next-intl)
i18n/
  routing.ts             # locales soportados (es/en) y configuración de rutas
  navigation.ts           # Link/usePathname/useRouter con soporte de idioma
  request.ts              # carga de mensajes por idioma en el servidor
messages/
  es.json                 # textos en español (idioma por defecto)
  en.json                 # textos en inglés
components/
  layout/                 # Header, Footer, LanguageSwitcher
  sections/                # Hero, Services, Coverage, Contact
  ui/                       # SpectrumVisual (visual animado del hero), ServicePanel
lib/
  utils.ts                  # helper cn() (clsx + tailwind-merge)
public/
  mark.png                   # ícono recortado del logo de Gestión Tech
```

## Selector de idioma

El selector de idioma (`components/layout/LanguageSwitcher.tsx`) muestra texto (`ES` / `EN`), sin banderas.

## Videos del hero

El hero (`components/sections/Hero.tsx` + `components/ui/VideoSequence.tsx`) muestra un video 16:9 al costado del texto, sin caja ni borde: los bordes se desvanecen con una máscara radial (`mask-image`) para que se vea integrado en el fondo de la sección, no como un recuadro aparte. Reproduce 4 videos **en secuencia** (uno termina y pasa automáticamente al siguiente, con crossfade), no simultáneos. Van en:

- `public/videos/video1.mp4`
- `public/videos/video2.mp4`
- `public/videos/video3.mp4`
- `public/videos/video4.mp4`

Cada video se reproduce una vez completo (sin loop individual) y al terminar (`onEnded`) avanza al siguiente; al llegar al cuarto, vuelve al primero. Si quieres cambiar el orden, la cantidad de videos o la carpeta, edita el array `VIDEOS` en `VideoSequence.tsx`. El desvanecido de bordes se controla con la constante `EDGE_FADE_MASK` en ese mismo archivo (ajusta los porcentajes del `radial-gradient` si quieres un fade más suave o más marcado). Recomendado: videos cortos (5-15 s) y livianos para que carguen rápido.

## Imágenes

Ya incluí 4 de tus fotos reales en `public/imgs/` y las conecté al código:

- **Servicios** (`components/sections/Services.tsx`): cada tarjeta de servicio tiene su foto arriba —
  - Recepciones de Obra → `04_dos_tecnicos_en_terreno.jpg`
  - Densidad de Potencia → `05_tecnico_junto_antena.jpg`
  - Auditoría en Terreno → `03_tecnico_inspeccionando_torre.jpg`
- **Cobertura** (`components/sections/Coverage.tsx`): banner panorámico de la camioneta junto a la torre → `02_camioneta_antena_lateral.jpg`

No incluí `01_camioneta_antena.png` (era muy similar a la 02, angulo frontal de la misma escena) — si prefieres usarla en vez de la 02, o agregar más fotos en otras secciones, solo cambia el `import` correspondiente por la ruta de la nueva imagen; el componente `next/image` se encarga del resto (tamaño, formatos, carga diferida).

## Contenido a editar

- **Textos ES/EN**: `messages/es.json` y `messages/en.json`.
- **Datos de contacto**: correo y teléfono están en `components/sections/Contact.tsx` (actualmente `contacto@gestiontech.cl` y un teléfono de ejemplo). El formulario abre el cliente de correo del visitante (`mailto:`) con los datos ingresados; si más adelante quieres que envíe a un backend o a un servicio como Resend/Formspree, solo hay que cambiar el `handleSubmit`.
- **Colores/tipografía**: `app/globals.css`, bloque `@theme inline`. La paleta azul/navy se tomó directamente del logo (`public/mark.png`).
- **Servicios**: `components/sections/Services.tsx` (íconos e índice) + los textos correspondientes en `messages/*.json`.

## Notas técnicas

- Las tipografías (Space Grotesk + IBM Plex Mono) están autoalojadas vía `@fontsource`, no dependen de Google Fonts en tiempo de ejecución.
- El visual del hero (analizador de espectro) respeta `prefers-reduced-motion`.
- `pnpm build` genera las páginas estáticas de `/es` y `/en` (`generateStaticParams` en el layout).
