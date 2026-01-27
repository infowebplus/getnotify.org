# GetNotify Docs (Docusaurus)

**API + Client only.** Deploy → **docs.getnotify.org**.

## Content

- **Intro** — `docs/intro.md` (slug `/`)
- **API** — `docs/api/` (auth, endpoints)
- **Client** — `docs/client/` (dashboard, sending messages)

No internal docs here. Internal lives in `docs/internal/`, `apps/dashboard/docs/`, `apps/web/docs/`.

## Commands

- **Dev:** `yarn dev:docs` (port 4322) or `yarn dev` (web + docs)
- **Build:** `yarn build` (or `yarn turbo run build --filter=@getnotify/docs`)

## Structure

- `docs/` — intro, api/, client/
- `sidebars.js` — sidebar config
- `docusaurus.config.js` — site config

## Deploy

CI builds and rsyncs `build/` to docs host. See `docs/internal/` (CI-CD, deployment).
