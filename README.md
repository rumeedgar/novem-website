# Novem Website

A modern, minimalist fintech payments infrastructure website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Clean, professional design with monospace typography
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🔄 React Router for navigation
- 💅 Tailwind CSS for styling

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:

```bash
cd fintech-website
```

2. Install dependencies:

```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
fintech-website/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Customization

### Colors

The color scheme is defined in the `customStyles` object in `App.jsx`. Key colors:

- Background: `#FFFFFF`
- Primary Text: `#0F0F0F`
- Accent Highlight: `#F0F6C9`
- Border: `#E6E6E6`

### Typography

The site uses two font families:

- Sans-serif: System fonts (SF Pro, Segoe UI, etc.)
- Monospace: Courier New

## Deployment

This site can be deployed to any static hosting service:

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel

```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your gh-pages branch

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue in the repository.
