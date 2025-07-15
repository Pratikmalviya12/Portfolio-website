/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black-based professional palette with aliceblue text
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
        'cyber-gradient': 'linear-gradient(45deg, #1A1A1A, #2F2F2F)',
        'neon-gradient': 'linear-gradient(90deg, #0A0A0A, #1C1C1C)',
        'professional-gradient': 'linear-gradient(135deg, #000000, #0A0A0A, #1A1A1A)',
      }
    },
  },
  plugins: [],
}
