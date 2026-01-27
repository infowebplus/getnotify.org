# Performance (Lighthouse 95+ target)

## Astro (apps/web)

- **Output:** Static HTML; minimal JS (nav, FAQ, dark mode, pricing toggle).
- **CSS:** Tailwind purged; `inlineStylesheets: 'auto'` for critical CSS.
- **Fonts:** Preconnect to Google Fonts; `display=swap`.
- **Images:** Use Astro `<Image>`. Store in `public/` or content.
- **Hydration:** None by default; `client:load` / `client:visible` only where needed.

## Build

- Minify HTML, CSS, JS. Vite for bundling.

## Hosting & CDN

- Cloudflare: long TTL for static assets; shorter for HTML. Brotli.
- `Cache-Control`: assets `max-age=31536000, immutable`; HTML `max-age=3600` or similar.

## Metrics

- **LCP:** Fast first paint; prioritize hero and fonts.
- **INP:** Minimal main-thread work.
- **CLS:** Reserve space for images; stable layout.

## Checklist

- [ ] Preconnect to font origins.
- [ ] Astro Image for content images.
- [ ] No render-blocking JS above fold.
- [ ] Cache static at edge. Brotli.
- [ ] Run Lighthouse on `/`, `/pricing/`, `/blog/`.
