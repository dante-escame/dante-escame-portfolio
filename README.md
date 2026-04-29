# Dante Escame Portfolio

Welcome to my professional (and a little bit personal) portfolio showcase.

## Chosen Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Ladle for isolated component development and documentation
- Docker multi-stage build
- Vercel deployment target
- MongoDB Atlas reserved for future persistence needs

## Architecture Direction
This project uses the App Router architecture:
- Route files live under `app/`.
- Server Components are the default.
- Client Components should be introduced only for interactivity, browser APIs, or local UI state.

Planned structure:
- `app/` for routes and layouts
- `src/components/` for reusable UI components and portfolio sections
- `src/lib/` for utilities and future integrations
- `public/` for static assets
- `docs/` for project guidance and scope notes
- `docs/ai-style-guidelines.md` for the canonical AI-facing visual reference
- `tests/` for automated tests when introduced

## Design Direction
- Mood: professional, technical, cyberpunk-influenced without losing clarity
- Palette: purple-led structure, punk-red emphasis, selective cyan highlights
- Typography: mono-forward and readable for the current foundation
- UI language: clipped panels, thin luminous borders, tactical spacing, restrained glow

## Documentation
- AI collaboration and architecture rules live in `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md`.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run ladle`
- `npm run build-ladle`

### Data Ingestion
To update your background timeline with LinkedIn data:
1. Update `data/profile-data.json` with your experience and education.
2. Ensure `MONGODB_URI` is set in `.env.local`.
3. Run the ingestion script:
   ```bash
   npx tsx scripts/ingest-profile.ts
   ```
