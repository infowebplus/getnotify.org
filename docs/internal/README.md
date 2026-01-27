# Internal documentation (GetNotify)

**Team only.** Not deployed. Not for clients.

## Layout

| Location | Content |
|----------|---------|
| **`docs/internal/`** (here) | Repo-level: architecture, CI/CD, Cloudflare, deployment, hosting, security, roadmap |
| **`apps/dashboard/docs/`** | Dashboard-specific: linking, contact form, Filament |
| **`apps/web/docs/`** | Web-specific: performance, SEO, Astro |
| **`apps/docs/`** | **API + Client** only → docs.getnotify.org (public) |

## Contents (repo-level)

- [ARCHITECTURE](./ARCHITECTURE.md) — Monorepo, domains, content system
- [CI-CD](./CI-CD.md) — GitLab CI, jobs, deploy variables
- [CLOUDFLARE](./CLOUDFLARE.md) — DNS, cache, SSL
- [DEPLOYMENT](./DEPLOYMENT.md) — Deploy flow per app
- [HOSTING](./HOSTING.md) — Hetzner, infra
- [SECURITY](./SECURITY.md) — Auth, headers, secrets
- [MIGRATION-SPEC](./MIGRATION-SPEC.md) — Migration reference
- [ROADMAP](./ROADMAP.md) — Roadmap

## Product docs

- **Dashboard:** `apps/dashboard/docs/` — dashboard linking, contact form integration
- **Web:** `apps/web/docs/` — performance, SEO
