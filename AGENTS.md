# Repository Guidelines

## Project Purpose
This repository contains the Dante Escame portfolio project built upon Cyberpunk styling in a NextJS project.

## Core Stack
- Next.js 16 with App Router only
- React 19
- TypeScript in strict mode
- Tailwind CSS v4 as the primary styling system
- Global design tokens in CSS custom properties
- Ladle for isolated component development and documentation
- Docker multi-stage builds with Next.js `standalone` output
- Vercel as the primary deployment target
- MongoDB Atlas reserved for future persistence needs

## Architecture Rules
- Use App Router conventions exclusively. New routes belong under `app/`.
- Prefer Server Components by default. Only add `'use client'` when interactivity, browser APIs, or client-side state genuinely require it.
- Keep route segments small and composable. Extract reusable UI into feature-oriented component folders.
- Put cross-cutting helpers in `src/lib/` and shared presentational components in `src/components/`.
- Keep styling co-located with components when it improves clarity, but define theme primitives centrally in `app/globals.css`.
- Do not introduce additional CSS frameworks unless the repository documentation is updated with a clear rationale.
- Preserve `output: 'standalone'` in Next.js config so the Docker image remains compatible with the deployment plan.
- Treat MongoDB Atlas integration as an infrastructure boundary. Database clients and access code should be isolated under `src/lib/` or `src/server/` once introduced.
- Optimize for accessibility alongside aesthetics: visible focus states, keyboard reachability, semantic HTML, and sufficient contrast must remain intact.

## Recommended Structure
- `app/` for routes, layouts, and route-level UI
- `src/components/` for reusable UI components and portfolio section primitives
- `src/lib/` for utilities, configuration, and future service integrations
- `public/` for static assets
- `docs/` for design notes, references, and stage documentation
- `docs/ai-style-guidelines.md` as the canonical AI-facing visual style reference
- `tests/` for automated test coverage when introduced

## Visual Direction
- Colors: deep violet and black surfaces, electric purple structure, strong magenta emphasis, softer lavender support tones
- Typography: mono-forward for the current foundation, with clean hierarchy and high readability
- Glow usage: reserved for emphasis, active states, and framing accents rather than every element
- Spacing: generous section spacing with denser component internals to keep layouts breathable and panels intentional
- Borders: thin high-contrast strokes, clipped corners, panel outlines, and selective inner highlights
- Backgrounds: moderately opaque panels and overlays so layers feel atmospheric without becoming muddy
- Interaction mood: precise, technical, confident, and portfolio-appropriate

## AI Style Reference
- When generating or editing UI, use [docs/ai-style-guidelines.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/ai-style-guidelines.md) as the canonical source for palette and typography details.
- When discussing, adding, or reviewing automated tests, use [docs/tests-guidelines.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/tests-guidelines.md) as the default testing baseline for this repository.
- Before creating any components, decide between server-side and client-side based on [docs/server-side-or-client-side.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/server-side-or-client-side.md).
- When creating server-side components, follow the guidelines at [docs/server-side-components-guidelines.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/server-side-components-guidelines.md).
- When creating client-side components, follow the guidelines at [docs/client-side-components-guidelines.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/client-side-components-guidelines.md).
- When documenting reusable components, follow [docs/ladle-components-guidelines.md](/home/fulmination/Documents/my_reps/dante-escame-portfolio/docs/ladle-components-guidelines.md).
- If this file and inline guidance diverge, ask for human guidance in the prompt.

## AI Commands
- Custom AI command phrase: `check component docs`
- Expected behavior: review newly created or changed reusable components, verify whether matching Ladle stories exist, and if they do not, create or update concise component documentation before finishing the task.

## Commands
- `npm install` to install dependencies
- `npm run dev` to start the Next.js development server
- `npm run build` to create the production build
- `npm run start` to run the production server
- `npm run ladle` to review reusable components

## Delivery Notes
- Keep top-level clutter low. Add new root files only when they support tooling, deployment, or project governance.
- Update `README.md` and `AGENTS.md` together when general architecture or workflow decisions materially change.
- Do not commit secrets. Store runtime configuration in ignored environment files such as `.env.local`.
