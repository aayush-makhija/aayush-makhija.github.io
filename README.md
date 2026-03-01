# Portfolio Website (v1.0.0)

A modern, high-performance professional portfolio website built with React, Vite, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

This project is a sophisticated personal portfolio designed to showcase software engineering skills and projects. It features a clean, minimalist UI with smooth animations and a fully responsive design, optimized for both recruiters and fellow developers.

## Features

- **Hero Section**: Engaging introduction with smooth text animations.
- **Skills Showcase**: Categorized list of technical proficiencies.
- **Experience Timeline**: Professional history and key achievements.
- **Project Gallery**: Interactive cards displaying key projects with descriptions and links.
- **Responsive Design**: Seamless experience across mobile, tablet, and desktop viewports.
- **Animated Interactions**: Subtle transitions using Framer Motion or custom CSS animations.

## Tech Stack

- **Framework**: React 19 (Hooks, Functional Components)
- **Build Tool**: Vite 6 (Fast Refresh, Optimized Bundling)
- **Styling**: Tailwind CSS 4 (Utility-first, Responsive design)
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Custom Hooks

## Getting Started

### Prerequisites

- **Node.js**: version 18.0.0 or higher
- **npm**: version 9.0.0 or higher

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Project

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Usage

### Building for Production

To create an optimized production build in the `dist/` folder:

```bash
npm run build
```

### Previewing the Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## Project Structure

```text
website/
├── src/
│   ├── assets/         # Project images and static assets
│   ├── components/     # Reusable UI components (Header, ProjectCard, etc.)
│   ├── hooks/          # Custom React hooks for animations and logic
│   ├── sections/       # Main portfolio sections (Hero, Skills, Projects, etc.)
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static public assets
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## License

MIT
