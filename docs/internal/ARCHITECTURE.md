# GetNotify — Architecture Overview

## Monorepo (TurboRepo)

```
/
├── apps/
│   ├── web/           # Astro — getnotify.org
│   ├── docs/          # Docusaurus — docs.getnotify.org (API + Client only)
│   └── dashboard/     # Laravel Filament — dashboard.getnotify.org
├── docs/              # Repo overview + internal (not deployed)
├── turbo.json
└── package.json
```

- **Build:** `yarn build` (Turbo). Web → `apps/web/dist/`, docs → `apps/docs/build/`.
- **Docs:** `apps/docs` = API + Client only. Internal lives in `docs/internal/`, `apps/dashboard/docs/`, `apps/web/docs/`.

## Domains

| Domain | App | Purpose |
|--------|-----|---------|
| getnotify.org | Astro (web) | Marketing, tools, blog, legal |
| docs.getnotify.org | Docusaurus (docs) | API + Client docs (public) |
| dashboard.getnotify.org | Laravel (dashboard) | Admin-only |

## Content (Astro)

- **Option A (current):** `apps/web/src/content/` — pages, globals, blog. Edit JSON/MD.
- **Option B (future):** Filament → API → Astro build fetches at build time.

## Tech

- **Astro:** SSG only. Tailwind, Content Collections.
- **Laravel + Filament:** Admin panel. API-ready.
- **Cloudflare:** DNS, SSL, CDN. See [CLOUDFLARE](./CLOUDFLARE.md).
- **Hetzner:** VPS for dashboard / static.
