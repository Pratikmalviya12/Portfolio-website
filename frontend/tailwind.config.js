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
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
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
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #FF2A6D, #05D9E8)',
        'neon-gradient': 'linear-gradient(90deg, #00FFFF, #8A2BE2)',
      }
    },
  },
  plugins: [],
}
