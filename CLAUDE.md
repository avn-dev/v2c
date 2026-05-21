# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**vision2code** — freelance software development website (`vision2co.de`).

Two sub-projects in this monorepo:

| Directory | Purpose | Stack |
|-----------|---------|-------|
| `astro/`  | Production website (SSG, deployed) | Astro 4 + React 18 + Tailwind |
| `backend/`| REST API | Laravel 13 + PHP 8.3 + SQLite (dev) |

---

## Commands

### astro/ (production website)
```bash
cd astro
npm run dev      # dev server
npm run build    # static build → dist/
npm run preview  # preview built output
```

### backend/ (Laravel API)
```bash
cd backend
php artisan serve                    # dev server on port 8000
php artisan test                     # run all tests
php artisan test --filter TestName   # run single test
php artisan migrate                  # run migrations
php artisan queue:work               # process queued emails (needed for contact form)
./vendor/bin/pint                    # format PHP (auto-runs via Claude Code hook on edit)

# Docker (app + Mailpit on :8025)
docker compose up
```

---

## Architecture

### astro/ — Production site

- **Static output** (`output: 'static'`), deployed to `https://vision2co.de`
- **i18n**: Astro built-in routing, `defaultLocale: 'de'` (no prefix), English at `/en/*`. Translations live in `src/i18n/translations.ts` as a flat key/value object. Pages import `getT(lang)` server-side.
- **React islands**: Interactive sections (`SiteNav`, `HeroSlideshow`, `ContactSection`) are React components loaded via `client:load` or `client:idle`. Static sections (`ServicesSection`, `ProcessSection`, etc.) are pure `.astro`.
- **API integration**: `ContactSection.tsx` posts to `$PUBLIC_API_URL/api/contact`. Set `PUBLIC_API_URL` in `.env` (defaults to `https://api.vision2co.de`).
- **Sitemap**: Legal pages (impressum, datenschutz, agb, widerruf) are excluded via filter in `astro.config.mjs`.

### app/ — React SPA

- Bootstrapped from a shadcn/ui template with 40+ pre-installed components under `src/components/ui/`.
- Path alias `@` → `src/`.
- i18n via `src/context/LanguageContext.tsx` (React context, `de`/`en`, persists `document.documentElement.lang`). Translations in `src/translations/index.ts` — same flat-key structure as `astro/`.
- `src/sections/` holds page sections; `src/pages/` holds route-level components (`Home`, `Impressum`).

### backend/ — Laravel API

- **Single endpoint**: `POST /api/contact` (rate-limited 5/min per IP).
- **Contact flow**: `ContactRequest` (validates + honeypot) → `Lead::create()` → `ContactInquiry` mailable dispatched to queue → email sent to `MAIL_CONTACT_RECIPIENT` (default `hallo@vision2co.de`).
- **Queue**: `QUEUE_CONNECTION=database` in dev. Run `php artisan queue:work` alongside `artisan serve` to process emails locally. Docker Compose starts the worker automatically.
- **Mail dev**: Mailpit at `localhost:8025` catches all outbound mail in local/Docker environments.
- **OpenAPI spec**: `docs/api/openapi.yaml` — keep in sync when adding routes.

### Key env vars (backend)
| Variable | Purpose |
|----------|---------|
| `MAIL_CONTACT_RECIPIENT` | Where contact form submissions are sent |
| `MAIL_MAILER` | `log` (dev), `smtp` (Docker/prod) |
| `QUEUE_CONNECTION` | `database` (dev/Docker), `redis` (prod) |
