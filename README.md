# GetNotify

Monorepo: **Astro** static site (getnotify.org) + **Laravel Filament** dashboard (dashboard.getnotify.org).

## Structure

```
apps/
  web/           → Astro (SSG), Content Collections, Tailwind — getnotify.org
  docs/          → Docusaurus (API + Client only) — docs.getnotify.org
  dashboard/     → Laravel 11 + Filament (admin-only) — dashboard.getnotify.org
docs/           → README + internal/ (repo-level); dashboard/docs, web/docs per product
```

## Quick start

**Prerequisites:** Node 20+, Yarn 1.x (classic).

```bash
yarn install
yarn dev          # Starts web + docs dev servers (web :4321, docs :4322)
yarn dev:web      # Only web (getnotify.org)
yarn dev:docs     # Only docs (port 4322)
yarn build        # Builds all (web, docs)
yarn lint         # Lint
yarn typecheck    # Typecheck
```

## Content (Astro)

- **Pages:** `apps/web/src/content/pages/*.json` (title, description, template).
- **Globals:** `apps/web/src/content/globals/*.json` (nav, footer, company, plans, features, faq, content).
- **Blog:** `apps/web/src/content/blog/*.md`.

Edit JSON/MD and refresh; no CMS required. Future: optional content API from Filament (see `docs/internal/`, `apps/dashboard/docs/`, `apps/web/docs/`).

## Documentation

- **`apps/docs/`** — [Docusaurus](https://docusaurus.io/) for **docs.getnotify.org**. **API + Client only.** Edit `apps/docs/docs/*.md`; sidebar in `sidebars.js`. Run `yarn dev:docs` (port 4322).
- **Internal** (team only, not deployed): **`docs/internal/`** (repo-level), **`apps/dashboard/docs/`**, **`apps/web/docs/`**. See `docs/README.md`.

## Dashboard (Laravel)

See **apps/dashboard/README.md**. From `apps/dashboard`: `composer install`, copy `.env.example` to `.env`, `php artisan key:generate`, `php artisan filament:install --panels`, create user with `php artisan make:filament-user`.

## CI/CD & deployment

**Deployment runs on GitLab CI.** Config: `.gitlab-ci.yml`. On push to `main`, path-based build and deploy for web, docs, and dashboard. Set CI/CD variables (SSH keys, deploy hosts) in GitLab. See **`docs/README.md`** and **`docs/internal/`** (CI-CD, deployment).

## Hosting

- **Static site:** Deploy `apps/web/dist/` (and `apps/docs/build/` for docs) to Hetzner or object storage; Cloudflare in front (DNS, SSL, CDN).
- **Dashboard:** Laravel on Hetzner VPS; HTTPS via Cloudflare.

See **`docs/internal/`**, **`apps/dashboard/docs/`**, **`apps/web/docs/`** for architecture, Cloudflare, deployment, performance, SEO, security, and roadmap.

## Design

- Existing logo and favicon kept in `apps/web/public/assets/img/`.
- Visual identity (green primary, Tailwind theme) preserved; refactored for performance and maintainability only.
