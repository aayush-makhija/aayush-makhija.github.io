# Implementation Plan: Update Portfolio Assets

**Branch**: `003-update-portfolio-assets` | **Date**: 2026-03-01 | **Spec**: /specs/003-update-portfolio-assets/spec.md
**Input**: Feature specification from `/specs/003-update-portfolio-assets/spec.md`

## Summary

This feature involves updating key visual assets of the portfolio to enhance professional branding and project context. We will replace the default Hero section image with a real photo of the developer (`photo.jpeg`) and source a relevant 16:9 tech illustration for the "Flight Booking Chatbot" project (`chatbot-preview.jpg`). The technical approach focuses on optimizing these assets for web performance while maintaining the existing "grayscale to color" hover transitions.

## Technical Context

**Language/Version**: React (JavaScript), HTML5, CSS3  
**Primary Dependencies**: Tailwind CSS v4, Lucide React  
**Storage**: N/A  
**Testing**: N/A - Visual Validation only per Constitution  
**Target Platform**: Modern Web Browsers (Responsive)
**Project Type**: Static Web Portfolio  
**Performance Goals**: Fast loading (<1s for Hero/Projects), high-quality asset rendering  
**Constraints**: No Backend, maintain existing "Modern/Tech" Dark Mode aesthetic.
**Scale/Scope**: Asset replacement for Hero and one Project card.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Clean & Minimalist UI (Principle I)
- [x] Responsive & Accessible (Principle II)
- [x] Professional Aesthetic (Principle III)
- [x] No Backend (Principle IV)
- [x] Design Validation Focus (Principle V)

## Project Structure

### Documentation (this feature)

```text
specs/003-update-portfolio-assets/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.quickstart command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── assets/
│   └── images/          # photo.jpeg and sourced chatbot-preview.jpg
├── sections/
│   ├── Hero.jsx         # Update image reference
│   └── Projects.jsx     # Update image reference
└── components/
    └── ProjectCard.jsx  # Verify image rendering
```

**Structure Decision**: Standard React component structure with local assets.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | No violations found. | N/A |
