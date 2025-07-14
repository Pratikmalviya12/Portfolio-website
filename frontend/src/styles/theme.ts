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
