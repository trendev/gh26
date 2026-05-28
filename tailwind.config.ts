import type { Config } from 'tailwindcss';

// Tokens design indicatifs (CLAUDE.md § 4). À recaler en Phase 2
// avec les valeurs exactes extraites du Figma via le MCP.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: '#0B2138',
        'navy-deep': '#061320',
        'navy-900': '#0A1E33',
        azure: '#1E73E0',
        'azure-dark': '#1862C4',
        copper: '#D98A3D',
        slate: '#46566B',
        mist: '#F4F7FA',
        pill: '#E4EEFB',
        border: '#E7ECF2',
        'input-bg': '#F7F9FB',
        placeholder: '#8C99A8',
        'footer-muted': '#6F93C4',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],
        'h1-mobile': ['30px', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-desktop': ['50px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile': ['26px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['34px', { lineHeight: '1.2', fontWeight: '700' }],
      },
      borderRadius: {
        card: '15px',
        btn: '10px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 10px 24px rgba(0,0,0,0.05)',
        float: '0 18px 40px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'btn-primary': 'linear-gradient(180deg, #1E73E0 0%, #1862C4 100%)',
        'hero-navy':
          'linear-gradient(135deg, #0A1E33 0%, #0B2138 60%, #102B49 100%)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
