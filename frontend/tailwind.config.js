/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern light/dark theme inspired by humanizeai.pro
        primary: {
          50: '#f8fafc',   // Very light slate
          100: '#f1f5f9',  // Light slate
          200: '#e2e8f0',  // Slate 200
          300: '#cbd5e1',  // Slate 300
          400: '#94a3b8',  // Slate 400
          500: '#64748b',  // Slate 500
          600: '#475569',  // Slate 600
          700: '#334155',  // Slate 700
          800: '#1e293b',  // Slate 800
          900: '#0f172a',  // Slate 900
        },
        accent: {
          blue: {
            50: '#eff6ff',   // Blue 50
            100: '#dbeafe',  // Blue 100
            200: '#bfdbfe',  // Blue 200
            300: '#93c5fd',  // Blue 300
            400: '#60a5fa',  // Blue 400
            500: '#3b82f6',  // Blue 500
            600: '#2563eb',  // Blue 600
            700: '#1d4ed8',  // Blue 700
            800: '#1e40af',  // Blue 800
            900: '#1e3a8a',  // Blue 900
          },
          purple: {
            50: '#faf5ff',   // Purple 50
            100: '#f3e8ff',  // Purple 100
            200: '#e9d5ff',  // Purple 200
            300: '#d8b4fe',  // Purple 300
            400: '#c084fc',  // Purple 400
            500: '#a855f7',  // Purple 500
            600: '#9333ea',  // Purple 600
            700: '#7c3aed',  // Purple 700
            800: '#6b21a8',  // Purple 800
            900: '#581c87',  // Purple 900
          }
        },
        // Legacy cyber colors for backward compatibility
        cyber: {
          primary: '#F0F8FF',    // Alice Blue (main text)
          secondary: '#E6E6FA',  // Lavender (secondary text)  
          accent: '#D3D3D3',     // Light Gray (accents)
          neon: '#C0C0C0',       // Silver (borders)
          green: '#2F4F4F',      // Dark Slate Gray (minimal accents)
          blue: '#191970',       // Midnight Blue (links)
          gray: '#696969',       // Dim Gray (subtle elements)
          dark: '#1C1C1C',       // Very Dark Gray (almost black)
        },
        background: {
          dark: '#000000',       // Pure Black (main background)
          card: '#0A0A0A',       // Very Dark (cards)
          overlay: 'rgba(10, 10, 10, 0.9)', // Dark overlay
          accent: '#1A1A1A'      // Dark Gray (accents)
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 2px rgba(240, 248, 255, 0.3)' },
          '100%': { boxShadow: '0 0 8px rgba(240, 248, 255, 0.5)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      }
    },
  },
  plugins: [],
}
