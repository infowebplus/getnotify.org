# GetNotify Dashboard (Laravel + Filament 5)

Admin-only support dashboard for content management, config, and future integrations.  
**Domain:** `dashboard.getnotify.org`

## Stack

- **Laravel** 11
- **Filament** 5 (admin panel)
- **Livewire** 4
- **PHP** 8.2+

## Setup (from monorepo root or `apps/dashboard`)

```bash
cd apps/dashboard
composer install
cp .env.example .env
php artisan key:generate
php artisan filament:install --panels
```

Create an admin user:

```bash
php artisan make:filament-user
```

Configure `.env` (DB, APP_URL, etc.). For local:

- `APP_URL=https://dashboard.getnotify.org` (or `http://localhost:8000`)
- Database: SQLite or MySQL/PostgreSQL

## Panel

- **Path:** `/admin` (or as configured in Filament panel)
- **Auth:** Admin-only; no public user registration. Manage users via Filament or `php artisan make:filament-user`.

### Login / Register UI

See **`FILAMENT_LOGIN_REGISTER_DESIGN.md`** in this directory for HTML + Tailwind design reference (login, register, forgot-password) that matches the public site. Use it to customize Filament auth views or as a Cursor AI prompt to implement matching Filament 5 auth pages.

## Content flow (future)

- **Option A (current):** Astro reads content from `apps/web/src/content/**` (JSON/MD). Edit files manually or via IDE.
- **Option B (future):** Filament manages content → Laravel API → Astro build fetches content at build time (e.g. `astro build` runs a script that pulls from dashboard API and writes JSON/MD or uses Astro server loaders).

Dashboard is built to be API-ready (e.g. `api/dashboard/content/pages`) when you enable Option B.

## No frontend coupling

The public site (Astro) and dashboard are fully separate: different repos/apps, different domains, no shared frontend. Only optional integration is API for content pull during static build.

## Contact form (optional)

The public site contact form can POST to the dashboard so messages are stored and answered from Filament. See **`docs/CONTACT-FORM-INTEGRATION.md`** in this app for the expected API, `contact_messages` table, Filament resource, and reply flow.
