# Cloudflare Setup

## DNS

- **getnotify.org**, **www**, **docs.getnotify.org**, **dashboard.getnotify.org** — A/AAAA to Hetzner (or CNAME/tunnel). Proxy (orange cloud) on.

## SSL/TLS

- **Mode:** Full or Full (Strict).
- **Origin certificate:** Create in Cloudflare; install on Hetzner (Nginx).

## Caching

- **getnotify.org (static):** HTML shorter TTL; `/assets/*`, static extensions long TTL. Purge on deploy.
- **docs.getnotify.org:** Same.
- **dashboard.getnotify.org:** Bypass cache for `/admin`, auth; cache only static assets if needed.

## Compression

- Brotli (and gzip) in Cloudflare.

## Security (optional)

- WAF, rate limiting on login/admin paths, Bot Fight Mode.

## Cache purge

- After deploy: purge by URL or “Purge Everything” via Cloudflare API or dashboard.
