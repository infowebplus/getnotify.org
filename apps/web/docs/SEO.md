# SEO (Astro)

## Implemented

- **Canonical:** BaseLayout from `Astro.url` or page-specific.
- **Meta:** `title`, `description` from content (pages, frontmatter).
- **Robots:** `public/robots.txt` → sitemap.
- **Sitemap:** `@astrojs/sitemap`; `site` = `PUBLIC_SITE_ORIGIN`.
- **Open Graph:** `og:title`, `og:description`, `og:url`, `og:site_name`, optional `og:image`.
- **Twitter:** `twitter:card`, `twitter:title`, `twitter:description`.
- **Structured data:** Optional JSON-LD (Organization, WebSite, FAQPage, Article).

## Content

- Clean URLs (`/about/`, `/pricing/`, `/blog/...`). i18n later if needed.

## Checklist

- [x] Unique title/description per page
- [x] Canonical, robots, sitemap, OG, Twitter
- [ ] JSON-LD (Organization, WebSite, FAQ, Article)
- [ ] i18n if multilingual
