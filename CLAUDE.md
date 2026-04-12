# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project snapshot
- Stack: Next.js 14 App Router + React 18 + TypeScript + Tailwind CSS.
- Backend/data integrations: Supabase (DB + Auth adapter), NextAuth v5 beta, Midtrans (payments), Resend (transactional email).
- Package manager in use: npm (`package-lock.json` is present).

## Common commands
- Install deps: `npm ci`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Run production server: `npm run start`
- Lint: `npm run lint`

### Docker workflow
- Build and run: `docker compose up --build`
- Run in background: `docker compose up --build -d`
- Stop: `docker compose down`
- Health endpoint: `http://localhost:3099/api/health` (compose maps `${PORT:-3099}:3000`)

### Tests
- There is currently no test runner config and no test files in this repo (`*.test.*`, `*.spec.*`, `tests/` not found).
- Single-test command is not available until a test framework is added.

## High-level architecture

### App routing surfaces
- `app/(public)/...`: public marketing/content pages and event/donation pages.
- `app/(dashboard)/...`: authenticated member dashboard area.
- `app/admin/...`: admin-only CMS/operations pages.
- `app/api/auth/[...nextauth]/route.ts`: NextAuth handlers.
- `app/api/health/route.ts`: health check for runtime/container probes.

### Auth and authorization
- NextAuth config lives in `lib/auth/nextauth.ts` using Google provider + Supabase adapter.
- Session callback enriches session with user role from Supabase `users` table.
- Route protection is layered:
  - `middleware.ts` enforces login for `/dashboard/*` and admin role for `/admin/*`.
  - `app/admin/layout.tsx` also checks role server-side and redirects non-admin users.

### Data access and business logic
- `lib/db/supabase.ts` provides lazy-initialized `supabase` and `supabaseAdmin` clients.
- Most data mutations/queries are in server actions under `lib/actions/*` (`'use server'`).
- UI pages/components call these actions directly (App Router pattern), rather than going through custom REST API routes.

### Integrations
- `lib/payment/midtrans.ts`: transaction creation/status mapping/order-id generation.
- `lib/email/resend.ts`: email send helpers + registration/reminder/donation/welcome templates.
- `lib/actions/donations.ts` coordinates DB records + Midtrans + confirmation emails.
- `lib/actions/registrations.ts` coordinates event registration RPC + confirmation email.

## Request/data flow examples
- Event registration flow:
  1. `components/shared/EventDetail.tsx` calls `registerForEvent`.
  2. `lib/actions/registrations.ts` reads event/user, calls Supabase RPC `register_for_event`, sends confirmation email, revalidates event paths.
- Donation flow:
  1. Donation action creates pending donation record.
  2. Creates Midtrans transaction token/redirect URL.
  3. Status check maps Midtrans status -> internal status, updates donation, calls RPC `increment_campaign_raised`, sends confirmation email, revalidates pages.

## Key implementation conventions in this repo
- Path alias `@/*` is enabled in `tsconfig.json` and used consistently.
- Mixed server/client components are used explicitly (`'use client'` and `'use server'` boundaries).
- UI text/content is primarily Indonesian; date formatting uses `date-fns` with `id` locale in user-facing event flows.
- Deployment targets containerized standalone Next.js output (`next.config.mjs` sets `output: 'standalone'`).

## Environment variables commonly needed
- Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- Auth: `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- Payments: `MIDTRANS_SERVER_KEY`, `MIDTRANS_CLIENT_KEY`
- Email: `RESEND_API_KEY`
- App URL: `NEXT_PUBLIC_APP_URL`
