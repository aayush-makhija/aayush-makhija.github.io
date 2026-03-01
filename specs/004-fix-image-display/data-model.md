# Data Model: Image Visual Properties

## Entity: Intro Image
- **Source**: `src/assets/images/photo.jpeg`
- **Component**: `src/sections/Hero.jsx`
- **Visual Style**:
    - `object-cover`: Ensures the image fills the container.
    - `object-top`: Prioritizes the top part of the image (hair/head) during cropping.
    - `rounded-2xl`: Follows the design system's border radius.
    - `rotate-3` with `hover:rotate-0`: Maintains existing subtle tilt animation.

## Entity: Project Image
- **Source**: `project.image` (dynamic)
- **Component**: `src/components/ProjectCard.jsx`
- **Visual Style**:
    - `object-cover`: Ensures the image fills the aspect-video box.
    - `group-hover:scale-110`: Maintains the zoom effect on hover.
    - Full color: No grayscale filters applied.
