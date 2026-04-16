# Tests Guidelines

## Purpose
This document defines the default testing approach for this Next.js repository. Use it as the baseline when discussing, adding, or reviewing automated tests.

## Are Unit Tests Common In Next.js?
Yes. Unit tests are common in Next.js projects, but they are usually only one part of the testing strategy. Most teams combine unit tests, integration tests, and end-to-end tests instead of relying on only one layer.

In practice, many Next.js teams place more confidence in integration and end-to-end coverage for route behavior, rendering boundaries, and user flows, while using unit tests for isolated logic.

## What Do Unit Tests Usually Cover?
Unit tests should focus on small isolated behavior such as:

- utility functions in `src/lib/`
- validation, parsing, formatting, and mapping logic
- custom hooks
- component logic with branching or state
- small interaction behavior with controlled inputs and outputs

Unit tests are less effective for full route behavior, navigation, server rendering pipelines, or realistic browser flows.

## Do Unit Tests Cover Components?
Yes, but not every component needs unit tests.

Component tests are most valuable when a component has:

- conditional rendering
- user interaction
- accessibility-critical behavior
- state transitions
- meaningful variants driven by props

Avoid spending much effort on trivial presentational tests that only repeat the implementation without protecting meaningful behavior.

## Recommended Test Strategy
The default testing strategy for this repository should be layered:

- unit tests for isolated logic and logic-heavy reusable components
- integration tests for feature sections, route-level UI behavior, and composed interactions
- end-to-end tests for a small number of critical browser flows

For this repository's current UI sandbox purpose, the highest-value early coverage is:

- utility and helper tests
- reusable component behavior tests when those components contain logic
- integration tests for important page sections and rendered states
- a few smoke-level end-to-end tests for the main page

## Common `tests/` Folder Structure
The most common structure is:

- `tests/unit/`
- `tests/integration/`
- `tests/e2e/`

Another common pattern is to colocate unit tests next to the code they cover, while reserving `tests/` for broader integration and end-to-end coverage. Either approach is acceptable if it stays consistent.

## Default Guidance For This Repository
- Prefer testing user-visible behavior over implementation details.
- Test reusable components when they contain real logic, interaction, or accessibility requirements.
- Do not over-test decorative components that are purely visual and static.
- Favor integration tests when behavior depends on composition, route context, or server/client boundaries.
- Keep end-to-end coverage small and focused on critical smoke paths.
