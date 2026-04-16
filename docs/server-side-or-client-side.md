# Server-side or Client-side

Use Server Components by default. Move to Client Components only when the component needs browser-only capabilities or live client interaction.

Choose a Server Component when the component:
- renders static or request-time UI from props, route params, or server-fetched data
- can keep secrets, tokens, and server-only logic off the client
- benefits from smaller client bundles and faster initial load

Choose a Client Component only when the component needs:
- React client hooks such as `useState`, `useEffect`, or event-driven local state
- browser APIs like `window`, `document`, `localStorage`, `ResizeObserver`, or media queries handled in JavaScript
- direct user interactivity that cannot be expressed with server actions, links, or forms alone

Market rule:
- start server-side, then add `'use client'` only for the smallest interactive boundary that truly requires it
- do not mark wrapper, layout, or data-fetching components as client-side just to support one interactive child
