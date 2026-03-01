# Feature Specification: Update Portfolio Assets

**Feature Branch**: `003-update-portfolio-assets`  
**Created**: 2026-03-01  
**Status**: Draft  
**Input**: User description: "I need an image for flight booking chatbot and i want to put my image in the introduction photo"

## Clarifications

### Session 2026-03-01
- Q: Where should I retrieve these new images from, or should I use specific temporary placeholders? → A: Local assets in `src/assets/images/`; user provided `photo.jpeg`, agent will source `chatbot-preview.jpg`.
- Q: To ensure the new image matches your "Modern/Tech" Dark Mode aesthetic, which style of imagery do you prefer for the chatbot preview? → A: Tech Illustration: A vibrant, stylized 3D illustration of a robot/chatbot or airplane.
- Q: Should I crop/source the new images to specific aspect ratios to ensure they fit the existing layout perfectly? → A: Match Existing: 1:1 for Hero, 16:9 for Project card.

## User Scenarios & Visual Validation *(mandatory)*

### User Story 1 - Personalized Introduction (Priority: P1)

As a visitor to the portfolio, I want to see a real photo of the developer in the Hero section so that I can establish a personal connection and verify the professional identity of the site owner.

**Why this priority**: Essential for establishing trust and professional branding.

**Visual Validation**: Verified by inspecting the Hero section on desktop and mobile viewports to ensure the placeholder image is replaced with the developer's provided photo (`photo.jpeg`).

**Acceptance Scenarios**:

1. **Given** the website is loaded, **When** viewing the Hero section, **Then** the image `src/assets/images/photo.jpeg` is displayed.

---

### User Story 2 - Visual Project Context (Priority: P1)

As a recruiter, I want to see a relevant screenshot or representative image for the "Flight Booking Chatbot" project so that I can immediately understand the context of the work before reading the description.

**Why this priority**: Visual cues significantly improve the "at-a-glance" understanding of the projects.

**Visual Validation**: Verified by checking the Projects section and confirming the Flight Booking Chatbot card displays the sourced `chatbot-preview.jpg`.

**Acceptance Scenarios**:

1. **Given** the Projects section, **When** viewing the "Flight Booking Chatbot" card, **Then** the image `src/assets/images/chatbot-preview.jpg` is displayed.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST replace the current placeholder image in `src/sections/Hero.jsx` with `src/assets/images/photo.jpeg`, cropped to a 1:1 aspect ratio.
- **FR-002**: System MUST replace the placeholder image for the "Flight Booking Chatbot" in `src/sections/Projects.jsx` with a vibrant, stylized 16:9 3D tech illustration (`chatbot-preview.jpg`) sourced by the agent.
- **FR-003**: System MUST ensure all images are optimized for web performance (correct format and size) to maintain fast page load times.
- **FR-004**: System MUST maintain the existing "grayscale to color" hover transition and responsive styles for the updated images.

### Key Entities *(include if feature involves data)*

- **Hero Asset**: `src/assets/images/photo.jpeg` (1:1 aspect ratio)
- **Project Asset**: `src/assets/images/chatbot-preview.jpg` (16:9 aspect ratio)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Page load time for the Hero and Projects sections remains under 1 second on a standard 4G connection after asset updates.
- **SC-002**: 100% of the updated images render correctly without broken links across all supported browsers (Chrome, Safari, Firefox).
- **SC-003**: The visual audit confirms that the new images adhere to the Dark Mode (Modern/Tech) aesthetic defined in previous updates.
