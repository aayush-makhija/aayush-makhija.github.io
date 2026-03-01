# Research: Update Portfolio Assets

## Decision: Sourcing Chatbot Image (FR-002)
- **Decision**: Source a high-quality 16:9 tech illustration from Unsplash or a similar free stock platform, focusing on stylized 3D graphics of robots or flight-related themes.
- **Rationale**: Stylized 3D illustrations align with the "Modern/Tech" aesthetic and provide a professional, "alive" feel requested in the spec.
- **Alternatives Considered**: Realistic screenshots (rejected as less visually engaging for this specific brand style), minimalist flat icons (rejected as too "vanilla").

## Decision: Image Optimization & Format (FR-003)
- **Decision**: Use WebP or high-compression JPEG formats. Crop assets to 1:1 for Hero and 16:9 for Project card before implementation.
- **Rationale**: Ensures the SC-001 (load time < 1s) is met by reducing payload size.
- **Alternatives Considered**: Direct use of raw high-res images (rejected due to performance impact).

## Decision: Hover Transitions (FR-004)
- **Decision**: Maintain the existing CSS filter classes (`grayscale hover:grayscale-0`) applied via Tailwind.
- **Rationale**: Consistency with the existing codebase and design language established in previous features.
- **Alternatives Considered**: JS-based hover effects (rejected as unnecessarily complex).
