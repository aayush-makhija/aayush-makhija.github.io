# Tasks: Project Documentation (README)

**Input**: Design documents from `/specs/001-add-readme/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

**Note**: Automated tests are NOT required per the Project Constitution. Focus on clarity, professional aesthetic, and accurate information.

**Organization**: Tasks are grouped by user story to enable independent implementation and verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root: `README.md`, `package.json`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project documentation initialization

- [x] T001 Create initial README.md file in the repository root
- [x] T002 [P] Extract project version and name from package.json for README header

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core documentation structure that MUST be complete before user stories

- [x] T003 Define standard README sections (Title, Description, Table of Contents) in README.md
- [x] T004 [P] Research and list all primary technical dependencies (React, Vite, Tailwind) for the Tech Stack section

**Checkpoint**: Documentation structure ready - user story implementation can now begin

---

## Phase 3: User Story 2 - Project Discovery (Priority: P1) 🎯 MVP

**Goal**: Provide a professional overview of the project and its features.

**Visual Validation**: Verified by reviewing the "Overview", "Features", and "Tech Stack" sections in README.md.

### Implementation for User Story 2

- [x] T005 [P] [US2] Write professional project title and one-sentence description in README.md
- [x] T006 [P] [US2] Create "Features" section listing portfolio sections and animations in README.md
- [x] T007 [P] [US2] Implement "Tech Stack" section with high-level dependency list in README.md

**Checkpoint**: User Story 2 should provide a clear project identity

---

## Phase 4: User Story 1 - Developer Onboarding (Priority: P1)

**Goal**: Enable new developers to set up and run the project locally.

**Visual Validation**: Verified by successfully executing the listed setup commands in a clean environment.

### Implementation for User Story 1

- [x] T008 [P] [US1] Create "Getting Started" section with "Prerequisites" (Node.js version) in README.md
- [x] T009 [P] [US1] Document "Installation" steps (npm install) in README.md
- [x] T010 [US1] Add "Running the Project" instructions for development in README.md

**Checkpoint**: User Story 1 should allow a developer to reach a running local state

---

## Phase 5: User Story 3 - Usage and Reference (Priority: P2)

**Goal**: Provide clear instructions for standard tasks like building and linting.

**Visual Validation**: Verified by following the "Usage" section to perform build and lint tasks.

### Implementation for User Story 3

- [x] T011 [P] [US3] Document "Building for Production" steps (npm run build) in README.md
- [x] T012 [P] [US3] Add "Linting" and "Preview" command references in README.md
- [x] T013 [US3] Ensure all terminal commands in README.md are accurate and copy-pasteable

**Checkpoint**: User Story 3 should provide clear usage references


## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and quality assurance

- [x] T014 Review README.md for professional tone and consistent formatting
- [x] T015 Check all links and command syntax for correctness
- [x] T016 Final validation against Success Criteria in spec.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Opportunities

- T002 (Setup) can run in parallel with T001
- T004 (Foundational) can run in parallel with T003
- User Story tasks marked [P] can be implemented in any order within their phase

---

## Implementation Strategy

### MVP First (User Story 2 & 1)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 2 (Project Discovery)
4. Complete Phase 4: User Story 1 (Developer Onboarding)
5. **STOP and VALIDATE**: Verify that a new user can understand and run the project.

### Incremental Delivery

1. Documentation structure ready
2. Add Project Overview (US2) → Identity established!
3. Add Setup Instructions (US1) → Onboarding ready!
4. Add Usage Reference (US3) → Full documentation!
