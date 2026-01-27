# Deployment Flow

**GitLab CI.** See [CI-CD](./CI-CD.md) for pipeline and variables.

## Web (getnotify.org)

1. Build: `yarn turbo run build --filter=@getnotify/web` → `apps/web/dist/`.
2. Rsync to host (see CI variables). Optional: S3 sync, then purge Cloudflare.

## Docs (docs.getnotify.org)

1. Build: `yarn turbo run build --filter=@getnotify/docs` → `apps/docs/build/`.
2. Rsync to docs host. **API + Client only**; no internal.

## Dashboard (dashboard.getnotify.org)

1. CI: `composer install --no-dev`, rsync `apps/dashboard/` to server.
2. Server: PHP 8.2+, Nginx, `document_root` = `public/`.
3. `.env`: `APP_KEY`, `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL`, DB, session, cache.
4. `php artisan migrate --force`, `config:cache`, `route:cache`, `view:cache`.
5. Restart PHP-FPM.

## Env checklist

- **Web (build):** `PUBLIC_SITE_ORIGIN`, optional `PUBLIC_COOKIEBOT_ID`.
- **Docs (build):** `PUBLIC_DOCS_ORIGIN`.
- **Dashboard (runtime):** `APP_URL`, `APP_KEY`, DB_*, SESSION_*, CACHE_*.

## Order

1. Dashboard first if API used at build time (future).
2. Web + docs; purge CDN if configured.
3. Smoke-check all domains and HTTPS.
