# Contact form — dashboard integration

The public contact form (getnotify.org/contact) can POST to the Laravel dashboard. The dashboard stores submissions; admins manage and reply from Filament.

## Config (Astro)

- **Page:** `apps/web/src/pages/contact.astro`
- **Config:** `apps/web/src/content/globals/content.json` → `contactForm`:
  - `submitUrl` — API URL (e.g. `https://dashboard.getnotify.org/api/contact`). If empty, form shows a note and no POST.
  - `successRedirectUrl` — Redirect after success (e.g. `https://getnotify.org/contact/?sent=1`).
  - `headline`, `description`, `successMessage` — Copy.

**Form fields:** `name`, `email`, `subject`, `message`, optional `success_redirect`.

## Dashboard (Laravel)

### 1. API endpoint

- **Route:** `POST /api/contact` (public, no auth).
- **Protection:** Throttle (e.g. 5/min per IP). CSRF bypass or shared token if needed.
- **Actions:** Validate; create `ContactMessage`; optionally notify admins; redirect to `success_redirect` or default thank-you URL.

### 2. Database

Table `contact_messages`: `id`, `name`, `email`, `subject`, `message`, `status` (new/replied/closed), `ip`, `user_agent`, `replied_at`, `admin_notes`, `timestamps`.

### 3. Filament resource

- **ContactMessageResource.** List: name, email, subject, status, created_at. View/Edit: message, status, admin_notes, “Mark as replied”. Optional “Send reply” (email/WhatsApp).

### 4. Replies

- Email via Laravel Mail, or WhatsApp if integrated, or manual “Mark as replied”.

## Enabling

1. Add migration, model, route, Filament resource.
2. Set `contactForm.submitUrl` in content.
3. Redeploy site.
