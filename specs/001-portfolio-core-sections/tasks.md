# Tasks: Portfolio Core Sections

**Input**: Design documents from `/specs/001-portfolio-core-sections/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md

**Note**: Automated tests are NOT required per the Project Constitution. Focus on visual fidelity and responsive design using React and Tailwind CSS v4.

**Organization**: Tasks are grouped by user story to enable independent implementation and visual verification of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths are relative to the repository root.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic React/Tailwind structure

- [x] T001 Initialize React project with Vite in root directory
- [x] T002 [P] Install dependencies: tailwindcss, @tailwindcss/vite, lucide-react
- [x] T003 Configure Vite for Tailwind CSS v4 in vite.config.js
- [x] T004 [P] Setup global CSS with Tailwind directives in src/index.css
- [x] T005 [P] Setup base project structure (src/components, src/sections, src/assets)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core design infrastructure and layout that MUST be complete before ANY user story can be implemented

- [x] T006 [P] Define Tailwind theme/constants (colors, typography) in src/index.css
- [x] T007 Implement Main Layout container with responsive padding in src/App.jsx
- [x] T008 [P] Create Sticky Header navigation component in src/components/Header.jsx
- [x] T009 [P] Implement smooth scroll logic for anchor links in src/index.js (or App.jsx)

**Checkpoint**: Design foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Portfolio Overview & Intro (Priority: P1) 🎯 MVP

**Goal**: Professional introduction and role description

**Visual Validation**: Hero section visible on load, responsive layout, clear typography

- [x] T010 [P] [US1] Create Hero section component in src/sections/Hero.jsx
- [x] T011 [P] [US1] Add intro paragraph and "Full-stack Developer" role to Hero.jsx
- [x] T012 [US1] Integrate Hero section into src/App.jsx
- [x] T013 [US1] Add developer photos (placeholders) in src/assets/images/ and link in Hero.jsx

**Checkpoint**: User Story 1 (MVP) should be fully functional and visually polished

---

## Phase 4: User Story 2 - Showcasing Work & Skills (Priority: P1)

**Goal**: View project descriptions and technical skills

**Visual Validation**: Grid layout for projects, categorized tags for skills

- [x] T014 [P] [US2] Create Projects section component in src/sections/Projects.jsx
- [x] T015 [P] [US2] Create Project Card component in src/components/ProjectCard.jsx
- [x] T016 [P] [US2] Create Skills section component in src/sections/Skills.jsx
- [x] T017 [US2] Implement skill categories (Frontend, Backend, Tools) in Skills.jsx
- [x] T018 [US2] Populate Projects.jsx with sample projects including GitHub links
- [x] T019 [US2] Integrate Projects and Skills sections into src/App.jsx

**Checkpoint**: User Story 2 should be functional and responsive

---

## Phase 5: User Story 3 - Resume Access & Contact (Priority: P2)

**Goal**: Download resume and find contact information

**Visual Validation**: Prominent resume button, recognizable social icons

- [x] T020 [P] [US3] Create Contact section component in src/sections/Contact.jsx
- [x] T021 [P] [US3] Add social icons (LinkedIn, GitHub, Instagram, Email) to Contact.jsx
- [x] T022 [US3] Implement "Download Resume" button with path to assets/resume.pdf in Contact.jsx
- [x] T023 [US3] Ensure all external links open in new tabs in Contact.jsx
- [x] T024 [US3] Integrate Contact section into src/App.jsx

**Checkpoint**: User Story 3 should enable recruiter interaction

---

## Phase 6: User Story 4 - Experience & Education (Priority: P2)

**Goal**: See internship experience and current educational status

**Visual Validation**: Chronological experience list, unified "Current Commit" card

- [x] T025 [P] [US4] Create Experience section component in src/sections/Experience.jsx
- [x] T026 [P] [US4] Implement experience items with role, company, dates, and bullets in Experience.jsx
- [x] T027 [P] [US4] Create CurrentCommit component for education and current internship in src/components/CurrentCommit.jsx
- [x] T028 [US4] Integrate Experience and CurrentCommit into src/App.jsx

**Checkpoint**: User Story 4 should complete the developer profile

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and optimization

- [x] T029 [P] Optimize all image assets in src/assets/images/
- [x] T030 Perform accessibility audit (WCAG compliance) across all sections
- [x] T031 Final cross-browser responsive testing (Mobile/Tablet/Desktop)
- [x] T032 Build production assets using `npm run build`

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)**: BLOCKS everything
2. **Foundational (Phase 2)**: Depends on Setup - BLOCKS all user stories
3. **User Story 1 & 2 (P1)**: Parallel after Foundational
4. **User Story 3 & 4 (P2)**: Parallel after P1 stories
5. **Polish (Final Phase)**: Depends on all user stories

### Parallel Execution Examples

```bash
# Within Phase 1
Task: T002, T004, T005

# Within Phase 4
Task: T014, T015, T016
```

---

## Implementation Strategy

### MVP First (User Story 1)
Focus on completing Setup, Foundational, and User Story 1 to get a live intro page as soon as possible.

### Incremental Delivery
Each user story phase adds a new section to the single-page layout. Validation is visual at the end of each phase.
