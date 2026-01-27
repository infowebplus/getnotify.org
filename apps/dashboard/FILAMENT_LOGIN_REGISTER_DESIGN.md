# Filament 5 Login & Register — Design Reference

This file contains **HTML + Tailwind** for GetNotify login, register, and forgot-password pages. Use it as a **design reference** when implementing or customizing Filament 5 auth pages. The markup mirrors the public site (getnotify.org) so dashboard auth matches the same look and feel.

**Purpose:** Copy the structure and class names below into Filament auth views (or use as a Cursor AI prompt) to implement matching login/register UI in the dashboard app.

---

## Design tokens (Tailwind)

Match these in your Filament theme / `tailwind.config.js`:

```js
// colors
primary: {
  50: '#eefbf3', 100: '#d6f5e3', 200: '#b0eacb', 300: '#7cd9ac',
  400: '#45c288', 500: '#22a76b', 600: '#158756', 700: '#126c47',
  800: '#11563a', 900: '#0f4731', 950: '#07281b',
},
neutral: {
  50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8',
  400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46',
  800: '#27272a', 900: '#18181b', 950: '#09090b',
},
// fonts
fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Outfit', 'Inter', 'sans-serif'] },
```

**Component classes** (define in `@layer components` or use Filament's theme):

- **Section:** `py-16 md:py-24`
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`; for auth use `max-w-md mx-auto`
- **Card:** `bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 dark:bg-neutral-800 dark:border-neutral-700` + light shadow
- **Badge:** `inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300`
- **Heading (page):** `text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white`
- **Heading (card):** `text-lg font-semibold text-neutral-900 dark:text-white`
- **Form label:** `block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2`
- **Form input:** `w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500`
- **Primary button:** `inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`; use `w-full` for full-width.
- **Link:** `text-primary-600 hover:text-primary-700 underline-offset-2 hover:underline dark:text-primary-400 dark:hover:text-primary-300`
- **Body text:** `text-sm text-neutral-600 dark:text-neutral-400` or `text-base text-neutral-600 dark:text-neutral-400`

---

## 1. Login page

Structure: centered single column, badge + title + short description, then a card with form.

```html
<section class="py-16 md:py-24 bg-white dark:bg-neutral-900 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
  <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">Account</span>
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-4 mb-4">Log in</h1>
      <p class="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
        Access your GetNotify dashboard to manage API keys, contacts, and WhatsApp messages.
      </p>
    </div>
    <div class="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 dark:bg-neutral-800 dark:border-neutral-700 shadow-sm">
      <h2 class="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Sign in to your account</h2>
      <form action="/admin/login" method="POST" class="space-y-5">
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
          <input type="email" id="email" name="email" required autofocus
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="you@example.com" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Password</label>
          <input type="password" id="password" name="password" required
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="••••••••" />
        </div>
        <div class="flex items-center justify-between">
          <label class="inline-flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="remember"
                   class="rounded border-neutral-300 text-primary-600 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-800" />
            <span class="text-sm text-neutral-600 dark:text-neutral-400">Remember me</span>
          </label>
          <a href="/admin/forgot-password" class="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline-offset-2 hover:underline">Forgot password?</a>
        </div>
        <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-2xl bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Log in
        </button>
      </form>
    </div>
    <p class="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-6">
      New to GetNotify? <a href="/admin/register" class="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline dark:text-primary-400 dark:hover:text-primary-300">Create an account</a>
    </p>
  </div>
</section>
```

---

## 2. Register page

Same layout as login; form includes name, email, password, password confirmation. Optional trial-benefits badges above the card.

```html
<section class="py-16 md:py-24 bg-white dark:bg-neutral-900 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
  <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">Get started</span>
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-4 mb-4">Create your account</h1>
      <p class="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-4">
        Start your free trial. No credit card required.
      </p>
      <ul class="flex flex-wrap justify-center gap-2">
        <li class="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 px-3 py-1 rounded-full">14 days free</li>
        <li class="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 px-3 py-1 rounded-full">No credit card</li>
        <li class="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 px-3 py-1 rounded-full">Full access</li>
      </ul>
    </div>
    <div class="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 dark:bg-neutral-800 dark:border-neutral-700 shadow-sm">
      <h2 class="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Sign up for GetNotify</h2>
      <form action="/admin/register" method="POST" class="space-y-5">
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <div>
          <label for="name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Name</label>
          <input type="text" id="name" name="name" required autofocus
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="Your name" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
          <input type="email" id="email" name="email" required
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="you@example.com" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Password</label>
          <input type="password" id="password" name="password" required
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="••••••••" />
        </div>
        <div>
          <label for="password_confirmation" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Confirm password</label>
          <input type="password" id="password_confirmation" name="password_confirmation" required
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="••••••••" />
        </div>
        <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-2xl bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Create account
        </button>
      </form>
    </div>
    <p class="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-6">
      Already have an account? <a href="/admin/login" class="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline dark:text-primary-400 dark:hover:text-primary-300">Log in</a>
    </p>
  </div>
</section>
```

---

## 3. Forgot-password page

Single card with email field and submit; link back to login.

```html
<section class="py-16 md:py-24 bg-white dark:bg-neutral-900 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
  <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">Account</span>
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mt-4 mb-4">Reset password</h1>
      <p class="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
        Enter your email and we’ll send you a link to reset your password.
      </p>
    </div>
    <div class="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 dark:bg-neutral-800 dark:border-neutral-700 shadow-sm">
      <h2 class="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Forgot your password?</h2>
      <form action="/admin/forgot-password" method="POST" class="space-y-5">
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        <div>
          <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
          <input type="email" id="email" name="email" required autofocus
                 class="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500"
                 placeholder="you@example.com" />
        </div>
        <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-2xl bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Send reset link
        </button>
      </form>
    </div>
    <p class="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-6">
      <a href="/admin/login" class="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline dark:text-primary-400 dark:hover:text-primary-300">Back to log in</a>
    </p>
  </div>
</section>
```

---

## Cursor AI prompt (Filament 5)

Use the following as a **Cursor AI prompt** to implement these designs in Filament 5:

```
Implement Filament 5 login, register, and forgot-password pages to match the design in FILAMENT_LOGIN_REGISTER_DESIGN.md in this project.

1. Read FILAMENT_LOGIN_REGISTER_DESIGN.md for the exact HTML structure, Tailwind classes, and design tokens.

2. Customize the Filament panel auth pages:
   - Override or replace the default login, registration, and forgot-password views with Blade views that use the HTML structure and Tailwind classes from the design doc.
   - Use Filament's form components (e.g. Forms\Components\TextInput, Forms\Components\Checkbox) where possible, but style them to match the design (form-label, form-input, primary button, card layout).
   - Ensure routes match: /admin/login, /admin/register, /admin/forgot-password (or your panel path).

3. Apply the design tokens (primary palette, neutral palette, fonts) in tailwind.config.js so the dashboard auth pages match the GetNotify brand.

4. Keep the same layout: centered single column, badge + heading + description, then a card with the form, then a footer link (e.g. "Create account" / "Log in" / "Back to log in").
```

---

## Notes

- **Routes:** Adjust `action` and `href` values (`/admin/login`, `/admin/register`, `/admin/forgot-password`) to match your Filament panel path.
- **CSRF:** Filament handles CSRF; the `_token` input is shown for plain-HTML reference. Use `@csrf` in Blade.
- **Validation errors:** In Filament/Laravel, display `$errors` above or below the form in the same card, styled consistently (e.g. `text-sm text-red-600`).
- **Dark mode:** All snippets use `dark:` variants. Enable `darkMode: 'class'` in Tailwind and toggle `dark` on `<html>` as on the public site.
