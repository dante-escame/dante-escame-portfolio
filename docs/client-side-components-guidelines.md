# Client-side Components Guidelines

Use Client Components only for interactive islands that need browser execution.

- Add `'use client'` only at the leaf or smallest boundary that needs it.
- Keep Client Components focused on interaction, local UI state, and browser integrations.
- Receive data from Server Components when possible instead of refetching on the client.
- Avoid putting page shells, static sections, or server-owned data loading behind a client boundary.
- Keep bundles lean by limiting dependencies and avoiding large utility imports in client code.
- Prefer forms, links, and server actions before adding custom client state machinery.
- Handle loading, disabled, focus, and error states explicitly so interaction stays accessible.
- Treat Client Components as tactical enhancements, not the default rendering model.
