# Desayuno Financiero — Landing (V1)

Landing del **Desayuno Financiero** (Irving, TX · sábados 10:00 AM).
Una sola función: **convertir interés en una conversación de WhatsApp.**

Producción: https://desayuno-financiero-landing.vercel.app
Deploy: Vercel, automático en cada push a `main`.

Repositorio independiente: no contiene ni referencia datos del vault/cerebro.

## Estructura

```
index.html      # todo el contenido (HTML semántico, sin framework)
css/styles.css  # estilos mobile-first, sin fuentes externas
js/main.js      # tracking preparado + año del footer
assets/         # fotos reales del desayuno (JPG + WebP, 2 tamaños c/u)
```

Ver en local: `python -m http.server 8080` → http://localhost:8080

## WhatsApp

Los dos botones (hero y final) apuntan al mismo enlace:

```
https://wa.me/14694357527?text=<mensaje codificado>
```

Mensaje prellenado: *"Hola, vi la página del Desayuno Financiero y me gustaría reservar un lugar para el próximo sábado."*

Es distinto al mensaje del anuncio click-to-WhatsApp (*"vi la publicación…"*): así, dentro de WhatsApp se distingue si el lead llegó por la landing o directo del anuncio.

Para cambiar número o mensaje: editar el `href` de los dos `.cta` en `index.html`.

## Tracking

No hay Pixel ni Analytics conectado (no existe uno autorizado para este proyecto). `js/main.js` ya dispara los eventos a `window.dataLayer`, y los manda a `fbq` / `gtag` solo si alguien los carga:

| Evento | Cuándo |
|---|---|
| `landing_view` | carga de la página |
| `whatsapp_click_hero` | clic en botón del hero |
| `whatsapp_click_final` | clic en botón final |
| `whatsapp_click` | total de clics a WhatsApp (se dispara junto con cualquiera de los dos; con Pixel también manda el estándar `Contact`) |

Cada evento incluye los `utm_*` de la URL si existen. No se envía información personal.

Para conectar Meta Pixel: pegar el snippet oficial (con el Pixel ID real) en el `<head>` de `index.html`, antes de `css/styles.css`. Nada más cambia.

Recomendado: que los anuncios que apunten aquí usen UTMs, p. ej.
`?utm_source=meta&utm_medium=paid&utm_campaign=gg_desayuno&utm_content=landing_v1`

## Pendientes

- [x] Fotos reales en `assets/` (experiencia tras el hero; la mesa en "Y hay algo más").
- [ ] Imagen Open Graph 1200×630 (`assets/og.jpg`) y descomentar las etiquetas `og:image` en `index.html`.
- [ ] Meta Pixel / Analytics, cuando exista uno autorizado.
- [ ] Dominio propio (opcional).
