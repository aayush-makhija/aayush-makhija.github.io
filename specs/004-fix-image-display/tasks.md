# Tasks: Fix Image Display and Styling

**Input**: Design documents from `/specs/004-fix-image-display/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

**Note**: Automated tests are NOT required per the Project Constitution. Focus on visual fidelity and responsive design.

**Organization**: Tasks are grouped by user story to enable independent implementation and visual verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root: `src/components/`, `src/sections/`, `src/assets/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Verify project runs locally with `npm run dev`
- [x] T002 [P] Review `src/sections/Hero.jsx` and `src/components/ProjectCard.jsx` for existing grayscale classes

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core design infrastructure that MUST be complete before ANY user story can be implemented

- [x] T003 Identify all instances of `grayscale` and `hover:grayscale-0` in the codebase using `grep`

**Checkpoint**: Design foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Restore Original Image Colors (Priority: P1) 🎯 MVP

**Goal**: Restore full color to all images by removing grayscale filters and hover transitions.

**Visual Validation**: All images (Hero profile and Project cards) appear in full color by default and do not change on hover.

### Implementation for User Story 1

- [x] T004 [P] [US1] Remove `grayscale` and `hover:grayscale-0` classes from `img` tag in `src/sections/Hero.jsx`
- [x] T005 [P] [US1] Remove `grayscale` and `hover:grayscale-0` classes from `img` tag in `src/components/ProjectCard.jsx`
- [x] T006 [US1] Verify that `transition-all` and `duration-700` are still present if other transitions (like scale) rely on them, or remove if no longer needed.

**Checkpoint**: User Story 1 should be fully functional and visually polished

---

## Phase 4: User Story 2 - Correct Intro Image Framing (Priority: P1)

**Goal**: Ensure the intro image framing prioritizes the subject's hair/head to prevent cropping issues on different screen sizes.

**Visual Validation**: The top of the subject's head is visible in the Hero section across all responsive breakpoints (320px to 2560px).

### Implementation for User Story 2

- [x] T007 [US2] Add `object-top` class to the `img` tag in `src/sections/Hero.jsx` (accompanying `object-cover`)
- [x] T008 [US2] Test responsive behavior by resizing the browser to ensure the head/hair remains visible in the rounded container.
- [x] T009 [US2] Verify that the `rotate-3` and `hover:rotate-0` animations on the container still function correctly with the framing change.

**Checkpoint**: User Stories 1 AND 2 should both work and look great

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the overall look and feel

- [x] T010 [P] Final visual QA on mobile, tablet, and desktop viewports
- [x] T011 [P] Ensure no regression in image loading performance
- [x] T012 Verify all success criteria (SC-001, SC-002, SC-003) from `spec.md` are met.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: All depend on Foundational phase completion (US1 and US2 can be done in parallel)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### Parallel Opportunities

- T004 and T005 [P] can run in parallel as they touch different files.
- US1 and US2 can technically be implemented in parallel if needed, though they both touch `Hero.jsx`.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Visual check of images appearing in full color.
5. Ready for review

### Incremental Delivery

1. Foundation ready
2. Add User Story 1 → Visual check → MVP!
3. Add User Story 2 → Visual check
4. Each story adds value without breaking previous ones
