/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium Primary Colors
        primary: {
          DEFAULT: '#0A1628', // Deep Midnight Blue
          light: '#1B2B4A', // Rich Navy
          dark: '#050B14',
        },
        // Medical Accent Colors
        secondary: {
          DEFAULT: '#8B9D83', // Muted Sage (medical green)
          light: '#A4B59C',
          dark: '#6F7D69',
        },
        // Premium Accent Colors
        accent: {
          DEFAULT: '#C9A961', // Warm Gold
          light: '#D9BC7F',
          dark: '#B8956A', // Soft Bronze
        },
        // Warm Neutrals
        neutral: {
          50: '#FAF8F5', // Warm Cream
          100: '#F5F2ED', // Light Beige
          200: '#E8E4DD',
          300: '#D4CFC5',
          400: '#A8A39A',
          500: '#6B6B6B', // Warm Gray
          600: '#545454',
          700: '#3D3D3D',
          800: '#2C2C2C', // Charcoal
          900: '#1A1A1A',
        },
        // Additional semantic colors
        sage: '#8B9D83',
        gold: '#C9A961',
        bronze: '#B8956A',
        cream: '#FAF8F5',
        beige: '#F5F2ED',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(10, 22, 40, 0.05)',
        'DEFAULT': '0 2px 8px 0 rgba(10, 22, 40, 0.08)',
        'md': '0 4px 12px 0 rgba(10, 22, 40, 0.10)',
        'lg': '0 8px 24px 0 rgba(10, 22, 40, 0.12)',
        'xl': '0 12px 32px 0 rgba(10, 22, 40, 0.15)',
        '2xl': '0 16px 48px 0 rgba(10, 22, 40, 0.18)',
        'inner': 'inset 0 2px 4px 0 rgba(10, 22, 40, 0.06)',
      },
      borderWidth: {
        '1': '1px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
