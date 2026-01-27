# Dashboard linking (public site ↔ Filament)

The public site (getnotify.org) links Login, Register, and Contact to the Filament dashboard. URLs and labels come from content.

## Config: `content.dashboard`

In `apps/web/src/content/globals/content.json`:

```json
"dashboard": {
  "baseUrl": "https://dashboard.getnotify.org",
  "loginPath": "/admin/login",
  "registerPath": "/admin/register",
  "loginLabel": "Log in to dashboard",
  "registerLabel": "Create account",
  "apiLoginNote": "API keys and message sending are managed in the dashboard."
}
```

| Field | Purpose |
|-------|---------|
| baseUrl | Dashboard origin; no trailing slash |
| loginPath | Filament login path (e.g. `/admin/login`) |
| registerPath | Sign-up or onboarding path |
| loginLabel, registerLabel | Button text on login/register pages |
| apiLoginNote | Short line on login page |

If `baseUrl` is empty, login/register show “not configured” and header uses `/login/`, `/register/` fallbacks.

## Where it’s used

- **Header:** “Log In” → dashboard login; “Get Started” → dashboard register. Links open in new tab.
- **Login page (`/login/`):** CTA → `baseUrl + loginPath`; shows `apiLoginNote`.
- **Register page (`/register/`):** CTA → `baseUrl + registerPath`; trial benefits from content.
- **Contact page:** “Staff: Dashboard login” → `baseUrl + /admin/login`. Form submission → see [CONTACT-FORM-INTEGRATION](./CONTACT-FORM-INTEGRATION.md).

## Filament panel paths

- Default panel `/admin`; login `/admin/login`. Set `loginPath` / `registerPath` if different.
- No public registration → use same as login or invite URL.

## Auth design

See **`FILAMENT_LOGIN_REGISTER_DESIGN.md`** in this app for HTML + Tailwind matching the public site.

## Checklist

- [ ] Set `content.dashboard.baseUrl` and paths in production.
- [ ] Filament login (and register if used) reachable at that base URL.
- [ ] Redeploy Astro after content changes.
