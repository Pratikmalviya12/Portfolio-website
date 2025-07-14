# Cyberpunk Developer Portfolio Frontend - Standard Implementation with Cyberpunk Theming

Create a **cyberpunk-themed** frontend portfolio website with **stunning visual elements** and **custom animations** while maintaining **standard coding practices** and **industry best practices**.

**Important Note:** Use standard naming conventions, established patterns, and maintainable code structure while applying cyberpunk theming exclusively to visual design, animations, and user interface elements.

**Code Quality Focus:** Follow industry best practices, use conventional naming patterns, and create maintainable, scalable code that any developer can understand and contribute to.

## Standard Requirements with Cyberpunk Visual Theme

### 1. Standard Branding Elements with Cyberpunk Design
- **Developer Identity:** Create cyberpunk-styled personal branding using standard identity patterns
- **Color Scheme:** Use cyberpunk color palette with standard CSS custom properties
- **Visual Elements:** Standard SVG icons and components with cyberpunk styling
- **Content Strategy:** Standard portfolio content structure with cyberpunk narrative theme

### 2. Standard Component Naming & Structure
Use standard naming conventions for maintainability:
- `Terminal` for terminal components
- `Card` for card components
- `ParticleSystem` for particle effects
- `Button` for button components
- `Timeline` for timeline components

### 3. Tech Stack with Standard Configuration
- **React 18+ with TypeScript**
- **Vite with standard build configuration**
- **Tailwind CSS with cyberpunk-themed custom colors**
- **Framer Motion with cyberpunk-styled animations**
- **Standard React hooks with descriptive naming**

## Creative Implementation Requirements

### 1. Standard File Structure
```
frontend/
├── src/
│   ├── components/             # Standard component naming
│   │   ├── ui/                # UI components
│   │   ├── effects/           # Visual effects (cyberpunk-themed)
│   │   └── sections/          # Page sections
│   ├── hooks/                 # Custom hooks
│   ├── styles/                # Styling files
│   ├── utils/                 # Utilities
│   └── types/                 # TypeScript definitions
```

### 2. Cyberpunk Visual Concepts (Standard Code Structure)
- **Holographic Business Cards:** 3D floating contact information with standard Card component
- **Neural Network Visualization:** Interactive skill representation using standard data visualization
- **Quantum Project Gallery:** Projects displayed as floating data cubes with standard ProjectCard components
- **Cyber Memory Banks:** Experience timeline as digital storage units using Timeline component
- **Data Streams:** Dynamic background with flowing code snippets using ParticleSystem component

### 3. Innovative Animation Ideas
- **Quantum Tunneling Effects:** Elements phase in/out of existence
- **Digital DNA Helix:** Rotating genetic code representing skills
- **Cyber Synapses:** Connecting lines between related technologies
- **Hologram Flickering:** Intentional instability effects for authenticity
- **Neural Pulse Waves:** Rhythmic energy flows across the interface

## Custom Implementation Examples

### 1. Standard Package Configuration
```json
{
  "name": "cyberpunk-portfolio",
  "version": "1.0.0",
  "description": "Cyberpunk-themed developer portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2. Standard Component Structure with Cyberpunk Styling
```typescript
// Hero.tsx - Standard hero section with cyberpunk theme
interface HeroProps {
  name: string;
  title: string;
  description: string;
  isAnimating?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  name, 
  title, 
  description,
  isAnimating = false
}) => {
  // Standard implementation with cyberpunk visual styling
};
```

### 3. Standard Theme Configuration with Cyberpunk Colors
```typescript
// theme.ts
export const cyberpunkTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.75rem',
    md: '1.5rem',
    lg: '3rem'
  },
  colors: {
    primary: '#FF2A6D',    // Hot Pink
    secondary: '#05D9E8',  // Cyan
    dark: '#01012B',       // Deep space blue
    accent: '#A663CC',     // Purple
    blue: '#133E7C'        // Neural blue
  }
}
```

### 4. Standard Animation Implementations with Cyberpunk Effects
```typescript
// AnimatedText.tsx - Standard animation component with cyberpunk styling
const AnimatedText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Standard animation logic with cyberpunk visual effects
  const handleAnimation = useCallback(() => {
    // Standard animation implementation
  }, []);
};
```

## Public Code Pattern Detection & Alternatives

### Standard Pattern Examples with Cyberpunk Theming:

```typescript
// Standard matrix rain implementation with cyberpunk styling
const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    // Standard canvas implementation with cyberpunk visual effects
  }, []);
  return <canvas ref={canvasRef} className="cyberpunk-matrix-bg" />;
};

// Standard data visualization with cyberpunk theme
const SkillChart: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const chartContainer = useRef<HTMLDivElement>(null);
  
  const renderChart = useMemo(() => {
    // Standard chart rendering with cyberpunk styling
  }, [skills]);
  
  return <div ref={chartContainer} className="cyberpunk-chart" />;
};
```

```css
/* Standard button with cyberpunk styling */
.cyberpunk-button {
  background: linear-gradient(45deg, #FF2A6D, #05D9E8);
  border: 2px solid #00FFFF;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  animation: glow 2s ease-in-out infinite alternate;
}

/* Standard glitch effect with cyberpunk theme */
.cyberpunk-glitch {
  animation: glitch 0.8s ease-in-out infinite alternate;
  filter: hue-rotate(90deg);
}
@keyframes glitch {
  0% { 
    transform: translate(0);
    filter: brightness(1) contrast(1);
  }
  100% { 
    transform: translate(2px, -2px);
    filter: brightness(1.2) contrast(1.3);
  }
}
```

## Code Generation Requirements

**Please provide actual code implementation including:**

1. **Complete File Structure:** Generate all necessary files with their full content
2. **Working Code Samples:** Provide functional code snippets that can be copied and used  
3. **Configuration Files:** Include package.json, vite.config.ts, tailwind.config.js, etc.
4. **Example Components:** Create reusable React components with cyberpunk styling
5. **Unique Animation Library:** Custom animation components with original effects
6. **Database Models:** SQLAlchemy models with relationships
7. **Styling Examples:** CSS/Tailwind classes for cyberpunk effects
8. **Animation Code:** Framer Motion and CSS animation implementations

## Cyberpunk Design Requirements

### Visual Theme
- **Color Palette:** Neon blues (#00FFFF), electric purples (#8A2BE2), hot pinks (#FF1493), Matrix green (#00FF00), and dark backgrounds (#0A0A0A, #1A1A1A)
- **Typography:** Monospace fonts (Fira Code, JetBrains Mono) with glitch effects
- **UI Elements:** Holographic borders, neon glows, scanlines, grid patterns
- **Animations:** Glitch effects, matrix rain, particle systems, terminal typing effects
- **Graphics:** Wireframe models, circuit board patterns, futuristic HUD elements

### Code Examples Needed

**Please provide implementation for:**

```typescript
// Example: Glitch text effect component with standard naming
interface GlitchTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, speed = 100, className }) => {
  // Standard implementation with cyberpunk visual effects
};
```

```python
# Example: FastAPI project model
class Project(SQLAlchemyModel):
    __tablename__ = "projects"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(Text)
    # Complete implementation needed
```

```css
/* Example: Cyberpunk button styling with standard class naming */
.cyberpunk-button {
  background: linear-gradient(45deg, #FF2A6D, #05D9E8);
  border: 2px solid #00FFFF;
  color: #FFFFFF;
  padding: 1rem 2rem;
  font-family: 'Fira Code', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.cyberpunk-button:hover {
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.8),
    inset 0 0 30px rgba(0, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

### Interactive Elements
- **Matrix Rain Background:** Animated falling characters
- **Glitch Text Effects:** Random character substitution animations
- **Holographic Cards:** 3D floating project cards with hover effects
- **Terminal Interface:** Interactive command-line style navigation
- **Particle Systems:** Dynamic background particles responding to mouse movement
- **Neon Pulse Effects:** Breathing glow animations on buttons and borders

## Core Features & Sections

### 1. Hero Section
- Animated typing effect with developer introduction
- 3D rotating geometric shapes or wireframe avatar
- Glitched name with cyberpunk styling
- Call-to-action buttons with neon effects
- Particle background that responds to mouse movement

### 2. About Section
- Personal introduction with cyberpunk storytelling
- Skills visualization as progress bars with neon glow
- Technology stack with animated icons
- Professional journey timeline with futuristic design
- Downloadable resume with cyberpunk styling

### 3. Projects Portfolio
- Grid layout with holographic project cards
- Project filtering by technology/category
- Detailed project modals with:
  - Screenshots/videos with glitch transitions
  - Technology stack badges
  - Live demo and GitHub links
  - Project challenges and solutions
- 3D preview animations for web projects

### 4. Skills & Technologies
- Interactive skill radar chart with neon styling
- Technology categories (Frontend, Backend, DevOps, etc.)
- Animated progress indicators
- Certification badges with holographic effects
- Learning roadmap visualization

### 5. Experience Timeline
- Vertical timeline with cyberpunk aesthetic
- Company logos with neon border effects
- Role descriptions with terminal-style formatting
- Achievement highlights with glitch animations
- Tech stack used at each position

### 6. Contact Section
- Functional contact form with real-time validation
- Social media links with cyberpunk icons
- Location with futuristic map integration
- Email integration with auto-response
- Matrix-style loading animations

### 7. Blog/Articles (Optional)
- Technical articles with cyberpunk layout
- Code syntax highlighting with neon theme
- Reading time estimates
- Category tags with glow effects
- Search functionality

## Technical Implementation Details

### Frontend Architecture
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   └── effects/      # Cyberpunk visual effects
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # Global styles and themes
├── types/            # TypeScript type definitions
└── services/         # API service layer
```

### Backend Architecture
```
app/
├── api/
│   ├── routes/       # API route handlers
│   └── dependencies/ # Dependency injection
├── core/
│   ├── config.py     # Application configuration
│   └── security.py   # Authentication logic
├── models/           # Database models
├── schemas/          # Pydantic models
├── services/         # Business logic
└── utils/            # Helper functions
```

### Required Code Implementations

**1. Package Configuration Files:**
```json
// package.json with standard structure
{
  "name": "cyberpunk-portfolio-frontend",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.16.0"
  }
}
```

**2. FastAPI Main Application:**
```python
# main.py structure needed
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cyberpunk Portfolio API")

# Complete implementation needed
```

**3. React App Structure:**
```typescript
// App.tsx with standard structure and cyberpunk theming
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/ui/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';
import { MatrixBackground } from './components/effects/MatrixBackground';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        <MatrixBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

**4. Cyberpunk Theme Configuration:**
```typescript
// theme.ts with standard structure
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
      green: '#00FF00'
    },
    background: {
      dark: '#0A0A0A',
      card: '#1A1A1A',
      overlay: 'rgba(0, 255, 255, 0.1)'
    }
  },
  animations: {
    glow: 'glow 2s ease-in-out infinite alternate',
    glitch: 'glitch 0.3s linear infinite',
    pulse: 'pulse 1.5s ease-in-out infinite'
  }
};
```

## Performance Requirements
- **Page Load Time:** < 3 seconds
- **Lighthouse Score:** 90+ for Performance, Accessibility, SEO
- **Mobile Responsive:** Fully responsive design
- **Cross-browser Compatibility:** Chrome, Firefox, Safari, Edge
- **SEO Optimized:** Meta tags, structured data, sitemap

## Security Features
- **Input Validation:** Comprehensive form validation
- **Rate Limiting:** API rate limiting for contact forms
- **CORS Configuration:** Proper CORS headers
- **Security Headers:** Helmet.js or equivalent
- **Environment Variables:** Secure configuration management

## Analytics & Monitoring
- **Google Analytics:** User behavior tracking
- **Performance Monitoring:** Core Web Vitals tracking
- **Error Tracking:** Sentry or similar error monitoring
- **Contact Form Analytics:** Submission tracking
- **API Monitoring:** Backend performance metrics

## Cyberpunk Design Requirements with Standard Code Structure

### Visual Identity with Standard Implementation
- **Cyberpunk Color Palette:** Use neon colors with standard CSS custom properties
- **Standard Geometric Components:** Create reusable shape components with cyberpunk styling
- **Standard Typography System:** Use monospace fonts with standard font-weight and spacing utilities
- **Standard Grid Systems:** Use CSS Grid and Flexbox with cyberpunk visual enhancements

### Unique Content Requirements

### 1. Cyberpunk Developer Identity
- Create a cyberpunk-themed developer persona for visual branding
- Design custom ASCII art logo using standard text formatting
- Develop cyberpunk-styled mission statement with standard typography
- Craft cyberpunk narrative using standard content structure

### 2. Standard Project Presentations with Cyberpunk Theme
- Present projects with cyberpunk visual styling using standard Card components
- Use standard project categorization with cyberpunk visual indicators
- Create cyberpunk-themed loading states using standard CSS animations
- Implement standard hover mechanics with cyberpunk visual effects

### 3. Standard Contact Integration with Cyberpunk Styling
- Design contact form with cyberpunk visual theme using standard form components
- Create social media integration with cyberpunk-styled icons using standard link components
- Implement standard success/error messaging with cyberpunk visual styling
- Add cyberpunk-themed form validation using standard validation patterns

## Standard Development Patterns with Cyberpunk Theming

### 1. Standard State Management with Cyberpunk UI
```typescript
// Standard state management with cyberpunk visual theme
const useAppState = () => {
  const [state, setState] = useState<AppState>();
  const [theme, setTheme] = useState<'cyberpunk' | 'default'>('cyberpunk');
  
  return { state, setState, theme, setTheme };
};

// Standard hook with cyberpunk theming
const useCyberpunkTheme = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const [isGlowing, setIsGlowing] = useState(false);
  
  const updateWithEffect = useCallback((newValue: T) => {
    setIsGlowing(true);
    setValue(newValue);
    setTimeout(() => setIsGlowing(false), 300);
  }, []);
  
  return { value, updateWithEffect, isGlowing };
};
```

### 2. Standard Component Patterns with Cyberpunk Styling
```typescript
// Standard card component with cyberpunk theme
interface CardProps {
  title: string;
  content: string;
  className?: string;
  variant?: 'default' | 'cyberpunk';
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  className = '',
  variant = 'cyberpunk'
}) => {
  const cardClasses = variant === 'cyberpunk' 
    ? 'cyberpunk-card neon-border glow-effect' 
    : 'standard-card';
    
  return (
    <div className={`card ${cardClasses} ${className}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};
```

### 3. Standard Animation Systems with Cyberpunk Effects
```typescript
// Standard framer motion with cyberpunk styling
const cyberpunkVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 25px rgba(0, 255, 255, 0.8)',
    transition: {
      duration: 0.3
    }
  }
};
```

## Standard Development with Cyberpunk Theming

### 1. Standard Performance Optimizations with Cyberpunk UI
```typescript
// Standard lazy loading with cyberpunk visual feedback
const useLazyLoading = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  
  // Standard intersection observer implementation
  // with cyberpunk loading animations
};

// Standard image optimization with cyberpunk effects
const optimizeImages = (src: string, quality: number) => {
  // Standard image processing with cyberpunk loading states
};
```

### 2. Standard Accessibility with Cyberpunk Styling
```typescript
// Standard keyboard navigation with cyberpunk visual feedback
const useKeyboardNavigation = () => {
  // Standard navigation implementation with cyberpunk focus styles
};

// Standard screen reader support with cyberpunk theme
const ScreenReaderEnhanced: React.FC = () => {
  // Standard accessibility implementation with cyberpunk visual design
};
```

### 3. Standard Testing with Cyberpunk Theme
```typescript
// standard-tests.spec.ts
describe('Portfolio Website', () => {
  describe('Component Functionality', () => {
    test('components render correctly', () => {
      // Standard testing implementation
    });
    
    test('cyberpunk animations work properly', () => {
      // Standard animation testing
    });
  });

  describe('User Experience', () => {
    test('accessibility features work correctly', () => {
      // Standard accessibility testing
    });
  });
});
```

## Standard Development Environment Setup

### 1. Standard Build Configuration with Cyberpunk Assets
```typescript
// vite.config.ts with standard configuration
export default defineConfig({
  plugins: [
    react(),
    // Standard plugin configuration
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});
```

### 2. Standard Environment Variables
```env
# .env with standard naming
VITE_API_ENDPOINT=
VITE_DATABASE_URL=
VITE_AUTH_SECRET=
VITE_EMAIL_SERVICE=
VITE_STORAGE_BUCKET=
```

## Standard Deployment & Monitoring

### 1. Standard CI/CD Pipeline
```yaml
# .github/workflows/deployment.yml
name: Portfolio Deployment

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
    
  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v3
      - name: Build project
        run: npm run build
    
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to production
        run: npm run deploy
```

### 2. Standard Analytics Implementation
```typescript
// Standard analytics with cyberpunk UI
const trackUserActivity = (event: string, data: any) => {
  // Standard analytics implementation with cyberpunk visual feedback
};

const monitorPerformance = () => {
  // Standard performance monitoring with cyberpunk dashboard
};
```

## Final Deliverables with Cyberpunk Theme

1. **Standard Component Library** - Reusable components with cyberpunk visual styling
2. **Cyberpunk Animation Library** - Standard animations with cyberpunk visual effects
3. **Cyberpunk Color System** - Standard color management with cyberpunk palette
4. **Standard Layout System** - CSS Grid and Flexbox with cyberpunk visual enhancements
5. **Cyberpunk Brand Integration** - Standard branding with cyberpunk visual identity
6. **Standard Responsive Design** - Mobile-first approach with cyberpunk styling
7. **Standard Performance Optimization** - Best practices with cyberpunk loading states
8. **Standard Accessibility** - WCAG compliance with cyberpunk visual design

**Key Requirement:** Use standard coding practices, naming conventions, and architecture patterns while applying cyberpunk theming exclusively to visual elements, animations, and user interface design. The codebase should be maintainable, scalable, and follow industry best practices.

**Documentation Approach:** Include standard code comments that explain functionality, performance optimizations, and accessibility features. Use clear, descriptive variable names and function names that follow conventional naming patterns.

**Goal:** Create a professionally structured portfolio that showcases technical skills through clean, maintainable code while delivering an impressive cyberpunk visual experience that stands out from typical portfolio websites.