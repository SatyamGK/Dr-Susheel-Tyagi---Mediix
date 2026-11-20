# Dr. Susheel Tyagi website

Next.js 14 + React + TypeScript website.

## Run locally

```bash
npm ci
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

## Supabase appointment storage and rate limiting

The booking form posts to `app/api/appointments/route.ts`. The server validates the request, applies database-backed rate limits, and stores accepted requests in Supabase. The service-role key is used only by the server; it is never sent to the browser.

### 1. Create the Supabase database objects

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Open `supabase/schema.sql` from this project, copy its complete contents, and run it.
4. Confirm that `appointment_requests` and `appointment_rate_limit_events` tables exist under **Table Editor**.

The SQL enables Row Level Security and deliberately creates no public/anonymous access policies. The API writes through the server-side service role.

### 2. Configure environment variables

In Supabase, open **Project Settings -> API** and copy:
- Project URL
- `service_role` secret key (not the anon/publishable key)

Add these variables to `.env.local` for local development and to **Vercel -> Project -> Settings -> Environment Variables** for production:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase `service_role` secret |
| `RATE_LIMIT_SALT` | Optional long random secret used to hash rate-limit identifiers |
| `NEXT_PUBLIC_SITE_URL` | Your live website URL |

Do not add `SUPABASE_SERVICE_ROLE_KEY` or `RATE_LIMIT_SALT` with a `NEXT_PUBLIC_` prefix. Never commit `.env.local` or paste the service-role key into frontend code. Redeploy Vercel after changing environment variables.

### 3. Rate-limit rules

- Maximum **5 booking attempts per IP address in 10 minutes**.
- Maximum **3 booking attempts per phone number in 1 hour**.
- Rate-limit events are stored in Supabase and checked atomically by a PostgreSQL function, so the limits are shared across Vercel serverless instances.
- If the database-backed rate limiter is unavailable, the API fails closed and does not accept a booking.
- A hidden honeypot field quietly filters basic bot submissions.

### 4. Verify a booking

1. Start the site with `npm run dev`.
2. Submit the booking form with a valid name, phone, future date and consent.
3. Open Supabase **Table Editor -> appointment_requests**.
4. Confirm that the new request appears.
5. Submit repeatedly to test the rate limits. The API returns HTTP `429` when a limit is reached.

Optional email notifications can be enabled with `RESEND_API_KEY`, `APPOINTMENT_TO_EMAIL`, and optionally `APPOINTMENT_FROM_EMAIL`. An optional webhook can be configured with `APPOINTMENT_WEBHOOK_URL`. Notification failures do not undo a booking already saved in Supabase.

## Production build

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical website origin.

## Project cleanup

Generated `.next` build output and the unused `public/images_before` backup directory are excluded from this clean project package. Run `npm ci` to install dependencies and regenerate build output locally.

## Content accuracy

Only use genuine, consented patient testimonials and verified awards/publications. Confirm clinic phone numbers, timings, credentials and external consultation arrangements with the practice before production launch.
