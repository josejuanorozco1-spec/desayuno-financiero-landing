# Desayuno Financiero — Landing (V1)

Landing page del **Desayuno Financiero** (Golden Group — José Orozco y Yancy Vargas, Irving TX, sábados 10 AM).

## Qué es esto

Repositorio **independiente**, separado por diseño del vault/cerebro de Orozco Legacy (`cerebro`). No contiene, referencia ni importa ningún archivo, dato, credencial o información de ese otro repositorio — es un proyecto limpio, propio de este sitio.

## Estado actual (V1 — scaffold)

Este commit inicial es **solo estructura**, no contenido final:

- HTML/CSS/JS plano, sin framework ni build step.
- Los textos de `index.html` son **placeholders** (marcados con `[...]` y comentarios `<!-- TODO -->`). El copy definitivo, la arquitectura de conversión (qué secciones, qué oferta, qué llamado a la acción) y la dirección visual (colores, tipografía, imágenes) todavía se están definiendo — ver `Brand Book` pendiente en el cerebro.
- Sin integración con Cloudflare, DNS ni dominio todavía — eso es un paso posterior, deliberadamente no hecho en este commit.

## Estructura

```
desayuno-financiero-landing/
├── index.html        # estructura de la página (contenido placeholder)
├── css/
│   └── styles.css    # estilos base (sin dirección visual definitiva)
├── js/
│   └── main.js        # JS mínimo (sin lógica de conversión definitiva)
├── assets/            # imágenes/recursos (vacío por ahora)
├── .gitignore
└── README.md
```

## Ver el sitio en local

No hace falta ningún build. Dos opciones:

1. Abrir `index.html` directamente en el navegador.
2. O, si prefieres un server local simple (recomendado para que las rutas relativas se comporten igual que en producción):
   ```
   python -m http.server 8080
   ```
   y abrir `http://localhost:8080`.

## Despliegue (pendiente, no configurado todavía)

La idea es Git → Cloudflare Pages (auto-deploy en cada push a la rama principal). Pasos para cuando se decida avanzar:

1. Repo en GitHub (hecho).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → autorizar GitHub → elegir este repo.
3. Build command: (ninguno — sitio estático). Build output directory: `/` (raíz del repo).
4. Deploy.

Dominio/DNS personalizados: pendiente, se define después de validar el sitio en el subdominio gratuito de Cloudflare Pages.

## Pendiente antes de la V1 real

- [ ] Arquitectura de conversión y contenido (José + Partner) — qué secciones, qué oferta, qué CTA.
- [ ] Dirección visual / Brand Book de Orozco Legacy — colores, tipografía, tono visual.
- [ ] Definir a dónde apunta el CTA principal (WhatsApp directo, formulario, calendario).
- [ ] Conectar el repo a Cloudflare Pages (sin configurar DNS/dominio todavía).
