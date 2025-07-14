# 🌐 Cyberpunk Portfolio Website

A cutting-edge, cyberpunk-themed developer portfolio built with React, TypeScript, and modern web technologies. This portfolio showcases a futuristic aesthetic while maintaining professional functionality and accessibility.

## ✨ Features

### 🎨 Visual Design
- **Cyberpunk Aesthetic**: Neon colors, glitch effects, and futuristic UI elements
- **Matrix Background**: Animated matrix rain effect using HTML5 Canvas
- **Holographic Elements**: CSS-based holographic card effects and glows
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 🛠️ Technical Features
- **React 18+**: Latest React with TypeScript for type safety
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework with custom cyberpunk theme
- **Framer Motion**: Production-ready motion library for animations
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 📱 Sections
- **Hero**: Dynamic typewriter effect with glitch animations
- **About**: Personal information with downloadable resume
- **Skills**: Interactive skill bars with category filtering
- **Projects**: Filterable project showcase with modal details
- **Experience**: Timeline-based career history
- **Contact**: Functional contact form with social links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-website.git

# Navigate to frontend directory
cd portfolio-website/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
frontend/
├── public/
│   ├── cyber-logo.svg          # Portfolio logo
│   └── neural-manifest.json    # PWA manifest
├── src/
│   ├── components/
│   │   ├── effects/            # Visual effects components
│   │   │   ├── MatrixBackground.tsx
│   │   │   ├── ParticleSystem.tsx
│   │   │   └── TypewriterEffect.tsx
│   │   ├── sections/           # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── Card.tsx
│   │       └── Button.tsx
│   ├── hooks/                  # Custom React hooks
│   ├── styles/                 # Global styles and theme
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main app component
│   └── main.tsx               # Application entry point
├── package.json               # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Customization

### Colors
The cyberpunk color palette is defined in `tailwind.config.js`:
```javascript
colors: {
  cyber: {
    primary: '#FF2A6D',    // Hot Pink
    secondary: '#05D9E8',  // Cyan
    accent: '#A663CC',     // Purple
    neon: '#00FFFF',       // Neon Cyan
    green: '#00FF00',      // Matrix Green
  }
}
```

### Content
Update the following files with your personal information:
- `src/components/sections/Hero.tsx` - Name, title, description
- `src/components/sections/About.tsx` - Personal info, skills, resume
- `src/components/sections/Projects.tsx` - Your projects and demos
- `src/components/sections/Experience.tsx` - Work history
- `src/components/sections/Contact.tsx` - Contact information

### Animations
Customize animations in `src/styles/global.css` and component-specific motion variants.

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Adding New Components
1. Create component in appropriate directory (`components/ui/`, `components/sections/`, etc.)
2. Export from directory index file if needed
3. Add proper TypeScript types
4. Include accessibility attributes
5. Test responsive behavior

### Performance Optimization
- Components use `React.memo()` where appropriate
- Images are optimized and use proper formats
- Code splitting is implemented for large dependencies
- Bundle analyzer available via `npm run analyze`

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on commits

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts for deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy`

## 🎯 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 PWA Features

The portfolio includes PWA capabilities:
- Offline functionality
- App-like experience on mobile
- Fast loading with service worker caching

## 🔧 Troubleshooting

### Common Issues

**Build fails with TypeScript errors**
```bash
npm run type-check  # Check for type errors
```

**Animations not working**
- Check if user has `prefers-reduced-motion` enabled
- Verify Framer Motion installation

**Styles not loading**
```bash
npm run dev  # Restart dev server
```

**Performance issues**
- Enable React DevTools Profiler
- Check for unnecessary re-renders
- Optimize images and assets

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

If you have any questions or need help customizing this portfolio:
- Open an issue on GitHub
- Contact: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

**Built with ❤️ and lots of ☕**
