# Server-side Components Guidelines

Use Server Components as the default pattern for route UI and reusable presentational sections.

- Fetch data on the server close to the route or server boundary that owns it.
- Keep secrets, database access, and privileged service calls on the server.
- Pass plain serializable props to child Client Components when interactivity is needed.
- Keep client boundaries narrow: render interactive islands inside a server-rendered shell.
- Prefer async Server Components for data-backed UI instead of shifting fetches to the browser.
- Compose small server-first sections rather than large mixed-responsibility components.
- Use semantic HTML and ship fully useful markup before any client hydration happens.
- Avoid importing client-only hooks, browser APIs, or `'use client'` dependencies into server files.
