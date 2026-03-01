# Research: Portfolio Core Sections

## Technology Choice: Tailwind CSS v4
- **Decision**: Use Tailwind CSS v4 via CDN or simple CLI.
- **Rationale**: User explicitly requested Tailwind CSS. v4 is the latest version, offering improved performance and a simplified configuration (CSS-first). It aligns with the "Lightweight Architecture" principle by avoiding heavy build tools if kept simple.
- **Alternatives considered**: Vanilla CSS (rejected per user request), Bootstrap (rejected as too heavy/opinionated).

## Technology Choice: React (Vite)
- **Decision**: Use React with Vite for building interactive components.
- **Rationale**: User expressed openness to using React. Vite provides a modern, fast development environment that produces optimized production builds, aligning with "Look and Feel" and "Professional Aesthetic" principles without significantly compromising the "Lightweight" goal if managed carefully.
- **Alternatives considered**: Vanilla JavaScript (deferred for simpler elements), Preact (considered but React is preferred for ecosystem).

## Implementation Pattern: Single Page Architecture (SPA)
- **Decision**: Use anchor-link based single-page navigation with a sticky header.
- **Rationale**: Established in spec assumptions (A-001) and clarifications. Best for a personal portfolio to provide a seamless experience.
- **Alternatives considered**: Multi-page site (rejected as less "modern" for a portfolio).

## Best Practices: HCI & Accessibility
- **Decision**: Adhere to WCAG 2.1 Level AA standards.
- **Rationale**: Explicitly required by Principle II of the Constitution.
- **Findings**: Ensure high contrast (especially for "Full-stacker" profile details), logical tab order for navigation, and descriptive alt text for photos.
