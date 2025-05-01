# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Three.js, and TypeScript.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode
- 📱 Fully responsive
- 🎬 Smooth animations with Framer Motion
- 🎮 Interactive 3D elements with Three.js
- ⚡ Fast page loads with Next.js
- 🎯 Perfect Lighthouse score
- 📝 Blog with MDX support
- 💅 Styled with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). To deploy:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click!

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── widgets/           # Major components (sections)
│   ├── header/        # Header component
│   ├── footer/        # Footer component
│   ├── hero/          # Hero section
│   ├── projects/      # Projects section
│   ├── skills/        # Skills section
│   └── blog/          # Blog section
├── features/          # Feature components
│   ├── theme-toggle/  # Theme switching functionality
│   └── 3d-scene/      # Three.js scene components
└── entities/          # Business logic
    ├── project/       # Project-related components
    ├── skill/         # Skill-related components
    └── blog/          # Blog-related components
```

## Customization

1. Update your personal information in `src/data/`
2. Modify the theme in `tailwind.config.ts`
3. Add your projects in `src/data/projects.ts`
4. Add blog posts in `src/data/blog/`

## License

This project is licensed under the MIT License.
