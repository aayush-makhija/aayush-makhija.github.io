# Tasks: Enhanced UI & Content

**Input**: Design documents from `/specs/002-enhance-ui-content/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

**Note**: Automated tests are NOT required per the Project Constitution. Focus on visual fidelity and responsive design.

**Organization**: Tasks are grouped by user story to enable independent implementation and visual verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root: `src/App.jsx`, `src/index.css`, `src/sections/Hero.jsx`, etc.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 [P] Configure custom Dark Mode theme and color palette in `src/index.css` (FR-001)
- [x] T002 [P] Setup typography pairing (Inter + JetBrains Mono) in `src/index.css` (FR-008)
- [x] T003 [P] Import and configure required fonts in `index.html` (FR-008)
- [x] T004 Define global CSS classes for section-level animations (fade-in, slide-up) in `src/index.css` (FR-002)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core design infrastructure that MUST be complete before ANY user story can be implemented

- [x] T005 [P] Implement Animated Gradient Blobs background component in `src/components/BackgroundBlobs.jsx` (FR-007)
- [x] T006 Integrate `BackgroundBlobs` into the main layout in `src/App.jsx`
- [x] T007 Implement the `Intersection Observer` logic for section animations in a new hook `src/hooks/useSectionAnimation.js` (FR-002)
- [x] T008 [P] Add accessibility support for `prefers-reduced-motion` in `src/index.css` (FR-009)

**Checkpoint**: Design foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Vibrant Visual Experience (Priority: P1) 🎯 MVP

**Goal**: Deliver a modern, "alive" feel with vibrant colors, subtle animations, and engaging UI.

**Visual Validation**: Inspect the site for coherent Dark Mode theme, animated background blobs, and section-level entry animations on scroll.

### Implementation for User Story 1

- [x] T009 [P] [US1] Apply section-level animations to all major sections in `src/App.jsx` using `useSectionAnimation` hook (FR-002)
- [x] T010 [P] [US1] Update `src/components/ProjectCard.jsx` with enhanced hover effects and shadow intensity (FR-002)
- [x] T011 [US1] Implement full-screen overlay navigation for mobile in `src/components/Header.jsx` (FR-006)
- [x] T012 [US1] Ensure all animations respect the `prefers-reduced-motion` setting (FR-009)

**Checkpoint**: User Story 1 should be fully functional and visually polished
---

## Phase 4: User Story 2 - Authentic Professional Content (Priority: P1)

**Goal**: Replace all placeholder images and generic text with the developer's real professional data.

**Visual Validation**: Verify that the Hero, Projects, Experience, and Skills sections contain personalized content and high-quality photos.

### Implementation for User Story 2

- [x] T013 [P] [US2] Source or capture professional project screenshots for inclusion in the "My Work" section (FR-003)
- [x] T014 [P] [US2] Replace placeholder text and images in `src/sections/Hero.jsx` with real bio and photo (FR-003, FR-004)
- [x] T015 [P] [US2] Update `src/sections/Projects.jsx` with real project titles, descriptions, and screenshots (FR-003, FR-004)
- [x] T016 [P] [US2] Update `src/sections/Experience.jsx` with real internship roles, dates, and achievements (FR-004)
- [x] T017 [P] [US2] Update `src/sections/Skills.jsx` with grouped technical competencies (FR-004)
- [x] T018 [P] [US2] Replace sample education and current status in `src/components/CurrentCommit.jsx` (FR-004)

---

**Checkpoint**: User Story 2 should show authentic professional information across the site

---

## Phase 5: User Story 3 - Functional Contact & Links (Priority: P2)

**Goal**: Ensure all social and contact links are fully functional and point to real profiles.

**Visual Validation**: Click all social icons and the email link to confirm they open the correct URLs and mail client.

### Implementation for User Story 3

- [x] T019 [P] [US3] Update all social link URLs (GitHub, LinkedIn, Instagram) in `src/sections/Contact.jsx` (FR-005)
- [x] T020 [P] [US3] Update the email address and `mailto:` link in `src/sections/Contact.jsx` (FR-005)
- [x] T021 [US3] Ensure all external links correctly use `target="_blank"` and `rel="noopener noreferrer"` (FR-005)

**Checkpoint**: All contact methods should be verified and functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the overall look and feel

- [x] T022 [P] Optimize all image assets in `src/assets/images/` for web performance
- [x] T023 [P] Perform a final visual audit for consistency in spacing and typography across all viewports
- [x] T024 Conduct cross-browser testing (Chrome, Safari, Firefox) for animation compatibility
- [x] T025 Final performance audit using Lighthouse to ensure SC-004 target (>90) is met

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion (T001-T004)
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion (T005-T008)
- **User Story 2 & 3 (Phases 4 & 5)**: Can start independently once Foundation is ready, but best performed after US1 layout changes
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Opportunities

- Phase 1 tasks (T001-T003) can run in parallel
- Phase 2 tasks (T005, T008) can run in parallel
- User Story 2 tasks (T013-T017) can be implemented in parallel across different section files
- User Story 3 tasks (T018-T020) can run in parallel with US2 content updates

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (Custom theme, typography, animation classes)
2. Complete Phase 2: Foundational (Background blobs, animation hook, accessibility)
3. Complete Phase 3: User Story 1 (Apply animations, mobile nav, visual audit)
4. **STOP and VALIDATE**: Visual check of the new modern Dark Mode look and feel.

### Incremental Delivery

1. Foundation ready
2. Add User Story 1 → Modern aesthetic MVP!
3. Add User Story 2 → Authentic professional content update
4. Add User Story 3 → Fully functional contact system
5. Final Polish → Optimized assets and cross-browser verification
