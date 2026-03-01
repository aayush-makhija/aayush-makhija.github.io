# Tasks: Update Portfolio Assets

**Input**: Design documents from `/specs/003-update-portfolio-assets/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

**Note**: Automated tests are NOT required per the Project Constitution. Focus on visual fidelity and asset quality.

**Organization**: Tasks are grouped by user story to enable independent implementation and visual verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root: `src/assets/images/`, `src/sections/Hero.jsx`, etc.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Sourcing and optimizing assets

- [x] T001 [P] Source a high-quality 16:9 tech illustration for the flight booking chatbot and save to `src/assets/images/chatbot-preview.jpg` (FR-002)
- [x] T002 [P] Verify `src/assets/images/photo.jpeg` exists and is a valid 1:1 aspect ratio profile photo (FR-001)
- [x] T003 [P] Optimize `chatbot-preview.jpg` and `photo.jpeg` for web (WebP/High-compression JPEG) to ensure performance (FR-003)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core asset readiness

- [x] T004 [P] Ensure `src/assets/images/` directory exists and contains updated assets (T001, T002)

**Checkpoint**: Assets ready for integration

---

## Phase 3: User Story 1 - Personalized Introduction (Priority: P1) 🎯 MVP

**Goal**: Replace the Hero section placeholder with the developer's photo.

**Visual Validation**: Inspect the Hero section to confirm `photo.jpeg` is rendered with the correct 1:1 aspect ratio and hover effects.

### Implementation for User Story 1

- [x] T005 [P] [US1] Update `src/sections/Hero.jsx` to import and use `src/assets/images/photo.jpeg` instead of placeholder (FR-001)
- [x] T006 [US1] Verify "grayscale to color" hover transition still works on the new Hero photo (FR-004)

**Checkpoint**: Hero section personalized

---

## Phase 4: User Story 2 - Visual Project Context (Priority: P1)

**Goal**: Replace the Flight Booking Chatbot placeholder with a relevant tech illustration.

**Visual Validation**: Confirm the Flight Booking Chatbot card in the Projects section displays `chatbot-preview.jpg`.

### Implementation for User Story 2

- [x] T007 [P] [US2] Update `src/sections/Projects.jsx` data array to reference `src/assets/images/chatbot-preview.jpg` for the Chatbot project (FR-002)
- [x] T008 [US2] Ensure Project card hover effects and grayscale transitions are applied to the new asset (FR-004)
- [x] T008.1 [P] [US2] Implement grayscale filter logic in `src/components/ProjectCard.jsx` to enable transition (FR-004)

**Checkpoint**: Project section visual context improved

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final quality audit

- [x] T009 [P] Perform a final visual audit to ensure 100% of updated images render without broken links (SC-002)
- [x] T010 [P] Conduct a manual load time check to ensure page sections load in <1s (SC-001)
- [x] T011 Verify visual consistency with the "Modern/Tech" Dark Mode aesthetic (SC-003)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must source/optimize assets before they can be integrated
- **Foundational (Phase 2)**: Confirms assets are in place
- **User Story 1 & 2 (Phases 3 & 4)**: Can be implemented in parallel once Phase 2 is complete
- **Polish (Final Phase)**: Requires all integrations to be complete

### Parallel Opportunities

- T001, T002, T003 can run in parallel
- US1 implementation (T005, T006) and US2 implementation (T007, T008) can run in parallel

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 & 2 (Source/Verify Assets)
2. Complete Phase 3: User Story 1 (Hero photo update)
3. **STOP and VALIDATE**: Visual check of the personalized intro.

### Incremental Delivery

1. Assets ready
2. Add US1 → Personal brand established
3. Add US2 → Project context improved
4. Final Polish → Performance and aesthetic audit
