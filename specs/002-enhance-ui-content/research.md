# Research: Enhanced UI & Content

## Decision: Animated Gradient Blobs (FR-007)
- **Decision**: Use Pure CSS with `animate-pulse` and `blur-3xl` for high-performance blurred blobs.
- **Rationale**: Avoids heavy external libraries like Framer Motion for background effects, maintaining high performance and adhering to the "Lightweight Architecture" (Principle IV).
- **Alternatives Considered**: Framer Motion `animate` property (more complex), Canvas-based blobs (harder to maintain/responsive).

## Decision: Section-Level Entry Animations (FR-002)
- **Decision**: Use `Intersection Observer API` with custom CSS classes (e.g., `.fade-in`, `.slide-up`) or `framer-motion`'s `whileInView` if already present in the project. 
- **Rationale**: Minimalist and high performance.
- **Alternatives Considered**: Scroll-triggered JS libraries like AOS (too heavy for Principle IV).

## Decision: Typography Pairing (FR-008)
- **Decision**: Use **Inter** for Sans and **JetBrains Mono** or **Space Mono** for the monospace accents.
- **Rationale**: Inter is standard for high-end UI; monospace adds a technical/engineering vibe. Both available via Google Fonts.
- **Alternatives Considered**: System fonts (too generic/vanilla).

## Decision: Mobile Overlay Navigation (FR-006)
- **Decision**: Use a fixed-position full-screen overlay with `opacity` and `scale` transitions.
- **Rationale**: Provides the most "modern" experience requested while staying within CSS/React capabilities.
- **Alternatives Considered**: Slide-in sidebar (rejected as less "alive").

## Decision: Accessibility / Reduce Motion (FR-009)
- **Decision**: Utilize the `@media (prefers-reduced-motion: reduce)` media query in CSS to disable/simplify animations.
- **Rationale**: Standard browser-native approach for accessible web design.
- **Alternatives Considered**: Manual toggle state in React (redundant if system preference is available).
