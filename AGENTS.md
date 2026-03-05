# AGENTS.md

## Cursor Cloud specific instructions

### Overview

NeuroAssist is a monolithic Next.js 14 application (App Router) providing real-time speech-to-text captions for hearing-impaired users. It uses SQLite via Prisma ORM (file-based at `prisma/dev.db`), Tailwind CSS, Radix UI, and TanStack React Query. No external services or environment variables are required.

### Running the app

- `npm run dev` starts the dev server on **port 5000** (bound to 0.0.0.0).
- Before first run, initialize the database: `npx prisma generate && npx prisma db push`

### Lint / Test / Build

- **Lint:** `npm run lint` — uses `next lint` with ESLint 8 + `eslint-config-next@14.2.5` + `@typescript-eslint/eslint-plugin@7`. Config is in `.eslintrc.json`.
- **Test:** `npx vitest run` — vitest is configured but no test files currently exist in the repo.
- **Build:** `npm run build` — currently fails due to a pre-existing TypeScript type error (`speakerLabel` missing from `UiSegment` type in `app/(app)/app/captions/page.tsx`). The dev server is unaffected.

### Known gotchas

- The original `package.json` had invalid JSON prepended (a stale `ts-node-dev` scripts snippet above the actual JSON object). This was fixed during setup. If a future agent encounters `EJSONPARSE` errors from npm, check for extraneous content at the top of `package.json`.
- ESLint and `eslint-config-next` were not listed as devDependencies originally. They were added during setup (`eslint@8`, `eslint-config-next@14.2.5`, `@typescript-eslint/eslint-plugin@7`, `@typescript-eslint/parser@7`). The `.eslintrc.json` file was also created.
- The contact form API expects field `fromName` (not `name`).
