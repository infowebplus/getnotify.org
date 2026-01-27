# Documentation (GetNotify)

## apps/docs — API + Client only (docs.getnotify.org)

**`apps/docs/`** = Docusaurus. **Only API + Client.** Deploy → **docs.getnotify.org** (public).

- **Content:** `apps/docs/docs/` — intro, `api/`, `client/`.
- **Sidebar:** `apps/docs/sidebars.js`.
- **Dev:** `yarn dev:docs` (port 4322) or `yarn dev` (web + docs).

## Internal docs (not deployed)

| Location | Content |
|----------|---------|
| **`docs/internal/`** | Repo-level: architecture, CI/CD, Cloudflare, deployment, hosting, security, roadmap |
| **`apps/dashboard/docs/`** | Dashboard: linking, contact form, Filament |
| **`apps/web/docs/`** | Web: performance, SEO |

See **`docs/internal/README.md`** for the full index.

## Summary

- **docs.getnotify.org** = API + Client from `apps/docs`. For clients.
- **Internal** = `docs/internal/`, `apps/dashboard/docs/`, `apps/web/docs/`. Team only; not deployed.
