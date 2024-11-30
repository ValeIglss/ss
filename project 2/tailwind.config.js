/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#C7AD88',
          dark: '#3A3A3A',
        },
        hunter: {
          green: '#3A3A3A',
          brown: '#594031',
          tan: '#C7AD88',
          sage: '#737C73',
        },
        gold: {
          light: '#D8C4A7',
          DEFAULT: '#C7AD88',
          dark: '#B09A75',
        }
      },
      boxShadow: {
        'gold': '0 0 25px -5px rgba(199, 173, 136, 0.3)',
        'gold-lg': '0 0 50px -8px rgba(199, 173, 136, 0.4)',
        'gold-xl': '0 0 70px -15px rgba(199, 173, 136, 0.5)',
        'inner-gold': 'inset 0 0 30px rgba(199, 173, 136, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, rgba(58, 58, 58, 0.98) 0%, rgba(45, 45, 45, 0.98) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C7AD88 0%, #B09A75 50%, #C7AD88 100%)',
      },
      animation: {
        'shimmer': 'shimmer 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'luxury': '0.25em',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'monkeys': ['Monkeys', 'sans-serif'],
      },
      scale: {
        '98': '0.98',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};