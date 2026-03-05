# NeuroAssist

A Next.js 14 application for transcription session management with notes and contact features.

## Architecture

- **Framework**: Next.js 14 (App Router)
- **Database**: SQLite via Prisma ORM (`prisma/dev.db`)
- **Styling**: Tailwind CSS + Radix UI components
- **State**: TanStack React Query

## Project Structure

- `app/` — Next.js App Router pages and API routes
  - `app/(app)/` — Authenticated app pages
  - `app/(marketing)/` — Public marketing pages
  - `app/api/contact/` — Contact form API route
  - `app/api/transcripts/` — Transcript session API routes
- `components/` — Shared UI components
- `lib/` — Shared utilities (Prisma client, helpers)
- `prisma/` — Database schema and migrations

## Running the App

```bash
npm run dev   # Starts on port 5000
```

## Environment

- Runs on port 5000 (Replit requirement)
- SQLite database at `prisma/dev.db`
- No external environment variables required for basic operation
