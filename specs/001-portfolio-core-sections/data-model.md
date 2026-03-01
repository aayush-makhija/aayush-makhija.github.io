# Data Model: Portfolio Core Sections

This feature uses static data embedded in the HTML or a JSON object in `index.js`.

## Entities

### Project (Entity)
- `title`: String (Name of the project)
- `description`: String (Short summary of the project)
- `githubUrl`: String (URL to the GitHub repository)
- `previewImage`: String (Path to local preview image - Optional)

### Skill (Entity)
- `name`: String (e.g., "JavaScript", "React")
- `category`: String (e.g., "Frontend", "Backend", "Tools")

### Internship (Entity)
- `company`: String
- `role`: String
- `startDate`: String (e.g., "Jan 2025")
- `endDate`: String (e.g., "Present")
- `achievements`: Array of Strings (Bullet points)

### Current Status (Entity)
- `education`: String (e.g., "B.Tech in CS, Year 4")
- `currentInternship`: String (Reference to an Internship or plain text)

### Contact (Entity)
- `email`: String
- `linkedin`: String
- `github`: String
- `instagram`: String
- `resumePath`: String (e.g., "/resume.pdf")
