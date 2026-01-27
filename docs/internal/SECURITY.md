# Security Model

## Public site (getnotify.org)

- Static only. No secrets in client. Cookiebot optional. HTTPS via Cloudflare.

## Docs (docs.getnotify.org)

- API + Client only. Public.

## Dashboard (dashboard.getnotify.org)

- Admin-only (Filament). Strong passwords, 2FA recommended. HTTPS only. `.env` not in repo. Optional IP restrict for `/admin`.

## API (future)

- Build-time only; server-to-server secret. Never expose to browser.
