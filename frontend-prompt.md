# Cyberpunk Portfolio Frontend Development Guide

## Overview
Create a cyberpunk-themed frontend portfolio website using **standard coding practices** with cyberpunk theming applied exclusively to visual elements, animations, and UI design.

## Tech Stack
- **React 18+ with TypeScript**
- **Vite with standard build configuration**
- **Tailwind CSS with cyberpunk-themed custom colors**
- **Framer Motion with cyberpunk-styled animations**
- **Standard React hooks with descriptive naming**

## Project Structure
```
frontend/
├── src/
│   ├── components/             # Standard component naming
│   │   ├── ui/                # UI components (Button, Card, etc.)
│   │   ├── effects/           # Visual effects (cyberpunk-themed)
│   │   └── sections/          # Page sections (Hero, About, etc.)
│   ├── hooks/                 # Custom hooks
│   ├── styles/                # Styling files
│   ├── utils/                 # Utilities
│   └── types/                 # TypeScript definitions
├── public/
│   ├── index.html
│   └── assets/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Package Configuration

### package.json
```json
{
  "name": "cyberpunk-portfolio-frontend",
  "version": "1.0.0",
  "description": "Cyberpunk-themed developer portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.45.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0"
  }
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk color palette
        cyber: {
          primary: '#FF2A6D',    // Hot Pink
          secondary: '#05D9E8',  // Cyan
          accent: '#A663CC',     // Purple
          neon: '#00FFFF',       // Neon Cyan
          green: '#00FF00',      // Matrix Green
          purple: '#8A2BE2',     // Electric Purple
          pink: '#FF1493',       // Deep Pink
        },
        background: {
          dark: '#0A0A0A',
          card: '#1A1A1A',
          overlay: 'rgba(0, 255, 255, 0.1)'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s linear infinite',
        'pulse-neon': 'pulse-neon 1.5s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        }
      }
    },
  },
  plugins: [],
}
```

## Core Components

### 1. App.tsx - Main Application
```typescript
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';
import { MatrixBackground } from './components/effects/MatrixBackground';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white relative overflow-hidden">
        <MatrixBackground />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

### 2. Theme Configuration
```typescript
// src/styles/theme.ts
export const cyberpunkTheme = {
  colors: {
    primary: {
      50: '#FF69B4',
      100: '#FF1493',
      500: '#FF2A6D',
      900: '#8B0A3E'
    },
    secondary: {
      50: '#7FFFD4',
      100: '#40E0D0',
      500: '#05D9E8',
      900: '#008B8B'
    },
    accent: {
      neon: '#00FFFF',
      purple: '#8A2BE2',
      green: '#00FF00',
      pink: '#FF1493'
    },
    background: {
      dark: '#0A0A0A',
      card: '#1A1A1A',
      overlay: 'rgba(0, 255, 255, 0.1)'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.75rem',
    md: '1.5rem',
    lg: '3rem',
    xl: '6rem'
  },
  animations: {
    glow: 'glow 2s ease-in-out infinite alternate',
    glitch: 'glitch 0.3s linear infinite',
    pulse: 'pulse-neon 1.5s ease-in-out infinite'
  }
};
```

### 3. Global Styles
```css
/* src/styles/global.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Fira Code', monospace;
  background-color: #0A0A0A;
  color: #FFFFFF;
  overflow-x: hidden;
}

/* Cyberpunk utility classes */
.cyberpunk-button {
  @apply bg-gradient-to-r from-cyber-primary to-cyber-secondary;
  @apply border-2 border-cyber-neon;
  @apply text-white font-mono font-semibold;
  @apply px-6 py-3 uppercase tracking-wider;
  @apply transition-all duration-300 ease-in-out;
  @apply hover:shadow-lg hover:shadow-cyber-neon/50;
  @apply hover:-translate-y-1;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.cyberpunk-button:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.cyberpunk-card {
  @apply bg-background-card border border-cyber-neon/30;
  @apply rounded-lg p-6 backdrop-blur-sm;
  @apply transition-all duration-300;
  @apply hover:border-cyber-neon/60 hover:shadow-lg hover:shadow-cyber-neon/20;
}

.cyberpunk-text-glow {
  text-shadow: 0 0 10px currentColor;
}

.cyberpunk-border-glow {
  border-color: theme('colors.cyber.neon');
  box-shadow: 0 0 10px theme('colors.cyber.neon');
}

/* Glitch effect */
.glitch-text {
  position: relative;
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  animation: glitch-1 0.5s infinite;
  color: #ff0000;
  z-index: -1;
}

.glitch-text::after {
  animation: glitch-2 0.5s infinite;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 14%, 15%, 49%, 50%, 99%, 100% {
    transform: translate(0);
  }
  15%, 49% {
    transform: translate(-2px, -1px);
  }
}

@keyframes glitch-2 {
  0%, 20%, 21%, 62%, 63%, 99%, 100% {
    transform: translate(0);
  }
  21%, 62% {
    transform: translate(2px, 1px);
  }
}

/* Neon glow animation */
@keyframes neon-glow {
  0%, 100% {
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor;
  }
  50% {
    text-shadow: 
      0 0 2px currentColor,
      0 0 5px currentColor,
      0 0 8px currentColor;
  }
}

.neon-glow {
  animation: neon-glow 2s ease-in-out infinite alternate;
}
```

## Component Examples

### Hero Section Component
```typescript
// src/components/sections/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypewriterEffect } from '../effects/TypewriterEffect';
import { ParticleSystem } from '../effects/ParticleSystem';

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  name = "Your Name", 
  title = "Full Stack Developer", 
  description = "Building the future with code" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Name with glitch effect */}
          <h1 
            className="text-6xl md:text-8xl font-bold text-cyber-primary glitch-text neon-glow"
            data-text={name}
          >
            {name}
          </h1>

          {/* Title with typewriter effect */}
          <div className="text-2xl md:text-4xl text-cyber-secondary font-mono">
            <TypewriterEffect 
              text={title}
              speed={100}
              className="cyberpunk-text-glow"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <button className="cyberpunk-button">
              View Projects
            </button>
            <button className="cyberpunk-button bg-transparent hover:bg-cyber-neon/10">
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
```

### Reusable Card Component
```typescript
// src/components/ui/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'cyberpunk' | 'minimal';
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  icon,
  className = '',
  variant = 'cyberpunk',
  onClick
}) => {
  const baseClasses = 'card transition-all duration-300 cursor-pointer';
  const variantClasses = {
    cyberpunk: 'cyberpunk-card hover:scale-105',
    default: 'bg-white text-black border rounded-lg p-6',
    minimal: 'bg-gray-800 border border-gray-600 rounded-lg p-6 hover:border-gray-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="mb-4 text-cyber-neon">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-3 text-cyber-primary">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};
```

### Typewriter Effect Component
```typescript
// src/components/effects/TypewriterEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
```

### Matrix Background Effect
```typescript
// src/components/effects/MatrixBackground.tsx
import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0"
    />
  );
};
```

## Key Features to Implement

### 1. Sections Required
- **Hero Section**: Name, title, CTA buttons
- **About Section**: Personal intro, skills overview
- **Skills Section**: Tech stack visualization
- **Projects Section**: Portfolio showcase
- **Experience Section**: Work timeline
- **Contact Section**: Contact form and social links

### 2. Interactive Elements
- Matrix rain background animation
- Glitch text effects on hover
- Particle system that responds to mouse movement
- Smooth scrolling navigation
- Project filtering and search
- Form validation with cyberpunk styling

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface for mobile devices
- Optimized animations for mobile performance

### 4. Performance Optimizations
- Lazy loading for images and components
- Code splitting with React.lazy()
- Optimized animations using Framer Motion
- Image optimization and WebP support
- Bundle size optimization

## Environment Setup

### Environment Variables (.env)
```
VITE_API_ENDPOINT=http://localhost:8000
VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_ANALYTICS_ID=your-analytics-id
```

### TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Deployment Checklist

1. **Performance**
   - [ ] Lighthouse score > 90
   - [ ] Images optimized
   - [ ] Bundle size < 500KB
   - [ ] First paint < 2s

2. **SEO**
   - [ ] Meta tags configured
   - [ ] Open Graph tags
   - [ ] Structured data
   - [ ] Sitemap generated

3. **Accessibility**
   - [ ] WCAG AA compliance
   - [ ] Keyboard navigation
   - [ ] Screen reader support
   - [ ] Color contrast ratio > 4.5:1

4. **Security**
   - [ ] Environment variables secured
   - [ ] HTTPS enabled
   - [ ] Content Security Policy
   - [ ] Input validation

This frontend guide provides a complete foundation for building a cyberpunk-themed portfolio website with professional code standards and stunning visual effects.
