Timer is a minimalist stopwatch-style web experience that focuses on clarity, typography, and motion. Built with React and Vite, it delivers a polished glassmorphism-inspired UI that highlights the current time, date, and animated status indicators.

## Features

- Live time display formatted with locale-aware formatting
- Start, pause, resume, and reset controls with smooth transitions
- Prominent full-date readout for quick contextual reference
- Lightweight glassmorphism-inspired styling with Tailwind CSS utilities
- Responsive layout optimized for mobile and desktop widths

## Tech Stack

- React 19 with functional components and hooks
- Vite for lightning-fast development and optimized builds
- Tailwind CSS (via `@tailwindcss/vite`) for utility-first styling
- Material UI components for consistent layout primitives

## Getting Started

### Prerequisites

- Node.js 18+ (recommend the latest LTS release)
- pnpm 9+ (or substitute with npm/yarn if preferred)

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

The app will be available at the address printed in your terminal, typically `http://localhost:5173`.

### Production Build

```bash
pnpm build
```

To preview the production bundle locally:

```bash
pnpm preview
```

## Scripts

| Command        | Description                   |
| -------------- | ----------------------------- |
| `pnpm dev`     | Start the Vite dev server     |
| `pnpm build`   | Create a production build     |
| `pnpm preview` | Preview the production build  |
| `pnpm lint`    | Run ESLint across the project |

## Project Structure

```
src/
	App.jsx              # Assembles the UI and timer logic
	components/
		Button.jsx         # Styled action button component
		Fulldate.jsx       # Localized date string renderer
		ThreeDots.jsx      # Animated status indicator
		TimerDIsplay.jsx   # Main timer layout and controls
```

Static assets live under `public/`, while configuration files (Vite, ESLint, Tailwind) are located at the project root.

## Roadmap Ideas

- Add lap tracking with exportable history
- Support custom time zones and locales
- Offer theming and accessibility preferences
- Integrate keyboard shortcuts for power users

## License

This project is currently unlicensed. Please reach out to the author if you would like to use or extend it beyond personal exploration.
