# Research: Image Display and Styling Fixes

## Decision: Removing Grayscale Filters
- **Decision**: Remove the `grayscale` and `hover:grayscale-0` classes from all `img` tags.
- **Rationale**: User explicitly requested to restore original colors. Grayscale was previously applied as a design choice in Feature 003, but it's now being reverted.
- **Alternatives considered**: Reducing grayscale intensity (e.g., `grayscale-[50%]`), but user request was "why are images black and white," suggesting a full restoration of color.

## Decision: Correcting Intro Image Framing
- **Decision**: Add `object-top` (or `object-[center_top]`) to the intro image in `Hero.jsx`.
- **Rationale**: The image is currently using `object-cover`. If the subject's head is near the top of the photo, `object-cover` might center it vertically, cropping the top. `object-top` ensures the top of the image is prioritized when cropping occurs during resizing.
- **Alternatives considered**: Manually cropping the source image `photo.jpeg`, but CSS positioning is more flexible and preserves the original asset.

## Decision: Technology Stack Consistency
- **Decision**: Continue using Tailwind CSS v4 utility classes.
- **Rationale**: The project is already integrated with Tailwind v4, and utility classes are the most efficient way to handle these visual adjustments without adding new CSS files.
- **Alternatives considered**: Custom CSS rules, but less idiomatic for this project's structure.
