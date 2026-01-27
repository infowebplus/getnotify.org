# Hosting — Hetzner + Cloudflare

## Roles

| Layer | Provider |
|-------|----------|
| DNS | Cloudflare |
| SSL | Cloudflare (Full/Strict); origin cert on server |
| CDN / cache | Cloudflare |
| Static (web, docs) | Hetzner or object storage + CDN |
| Dashboard | Hetzner VPS (Nginx, PHP-FPM) |

## Hetzner VPS

- Ubuntu 22.04 LTS. Nginx, PHP 8.2+, Composer.
- Firewall: 22, 80, 443 (or Cloudflare Tunnel).
- Static: serve `dist/` / `build/` from Nginx or S3-compatible storage.

## Cloudflare

- DNS, proxy, SSL, caching. See [CLOUDFLARE](./CLOUDFLARE.md).

## Deploy

- CI builds; rsync to hosts. See [DEPLOYMENT](./DEPLOYMENT.md) and [CI-CD](./CI-CD.md).
