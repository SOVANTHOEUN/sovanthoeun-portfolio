# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, and TypeScript. Features a clean design, dark mode support, and interactive 3D elements.

## Features

- 🎨 Modern and responsive design
- 🌓 Dark/Light mode toggle
- 🎮 Interactive 3D elements using Three.js
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js
- 🎯 SEO optimized
- 📝 Blog section for sharing experiences
- 🛠️ Built with TypeScript for type safety

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Three.js
- Framer Motion
- next-themes

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── shared/             # Shared components and utilities
│   ├── ui/            # Reusable UI components
│   ├── lib/           # Utility functions and hooks
│   └── config/        # Configuration files
├── entities/          # Business entities
│   ├── project/       # Project-related components
│   ├── skill/         # Skill-related components
│   └── blog/          # Blog-related components
├── features/          # Feature-specific components
│   ├── theme-toggle/  # Theme switching functionality
│   └── 3d-scene/      # Three.js scene components
└── widgets/           # Page sections
    ├── header/        # Header component
    ├── footer/        # Footer component
    ├── hero/          # Hero section
    ├── projects/      # Projects section
    ├── skills/        # Skills section
    └── blog/          # Blog section
```

## Customization

1. Update the content in the respective component files
2. Modify the theme colors in `tailwind.config.js`
3. Add your own projects in the `Projects` component
4. Customize the 3D scene in the `Hero` component

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
```

## Contributing

Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this template for your own portfolio!
