# AI Style Guidelines

## Purpose
This file is the canonical visual reference for AI coding agents working in the Dante Escame portfolio repository. When generating or editing UI, prefer these tokens and visual rules unless the user explicitly asks for an exception.

## Core Palette
- Core purple: `#800080`
- Punk text color: `#df024a`
- Cyan highlight color: `#0dcdcd`
- Primary title color: `#f6d8ff`
- Neuromancer gold: `#f9f338`

## Color Usage Rules
- Use `#800080` as the anchor color for the interface mood. Build darker and lighter purple variations from it for backgrounds, borders, glows, and layered surfaces.
- Use `#df024a` as the main accent for important text, labels, emphasis, active states, and high-attention UI details.
- Use `#0dcdcd` sparingly for word-level highlights, micro-emphasis, and contrast accents inside copy and UI labels.
- Use `#f9f338` for high-tier status indicators, standout badges, and premium portfolio accents.
- Use `#f6d8ff` as the default title and major heading color across the portfolio foundation.
- Prefer dark purple or near-black surfaces with moderate opacity so panels feel layered and atmospheric.
- Avoid assigning the same visual weight to every accent color. Purple carries structure, pink-red carries emphasis, and cyan stays selective.

## Typography
- Core text font size: `12.0`
- Core text font family: `JetBrains Mono Nerd Font`
- Bold font: `auto`
- Italic font: `auto`
- Bold italic font: `auto`

## Typography Usage Rules
- Treat `JetBrains Mono Nerd Font` as the main textual identity for the current portfolio foundation.
- Build variations from the core text size rather than introducing unrelated type systems without a clear reason.
- Preserve readability even when using monospaced typography in larger UI sections.
- If a fallback is needed in code, prefer a monospace stack that stays close in feel to JetBrains Mono.
- Keep major titles visually cleaner and brighter than body text; default titles should preserve the lighter heading tone rather than reuse the pink body-text color.

## UI Direction
- Keep the cyberpunk influence intentional and portfolio-appropriate rather than crowded.
- Use moderate-opacity backgrounds instead of fully opaque blocks whenever layered surfaces help the composition.
- Prefer sharp borders, restrained glow, and clear hierarchy over heavy decoration.
- Keep text legible and contrast-driven even when using saturated accents.
- The visual language should read as professional personal-branding work first and style experiment second.

## Agent Instruction
- Reference this file when choosing colors, text emphasis, and typography direction.
- If implementation constraints prevent an exact match, stay as close as practical and preserve the hierarchy of purple base, pink-red emphasis, and cyan highlight.
