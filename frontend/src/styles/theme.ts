// src/styles/theme.ts
export const cyberpunkTheme = {
  colors: {
    primary: {
      50: '#F0F8FF',  // Alice Blue
      100: '#E6E6FA', // Lavender
      500: '#D3D3D3', // Light Gray
      900: '#C0C0C0'  // Silver
    },
    secondary: {
      50: '#E6E6FA',  // Lavender
      100: '#D3D3D3', // Light Gray
      500: '#C0C0C0', // Silver
      900: '#A9A9A9'  // Dark Gray
    },
    accent: {
      professional: '#696969', // Dim Gray
      blue: '#191970',         // Midnight Blue
      green: '#2F4F4F',        // Dark Slate Gray
      gray: '#808080'          // Gray
    },
    background: {
      dark: '#000000',         // Pure Black
      card: '#0A0A0A',         // Very Dark
      overlay: 'rgba(10, 10, 10, 0.9)',
      accent: '#1A1A1A'        // Dark Gray
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
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

export type CyberpunkTheme = typeof cyberpunkTheme;
