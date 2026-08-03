/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050912',
          900: '#070c17',
          850: '#0a101f',
          800: '#0d1424',
          750: '#101a30',
          700: '#15203b',
          600: '#1c2945',
        },
        neon: {
          50: '#eaf3ff',
          100: '#d4e7ff',
          200: '#a9d0ff',
          300: '#7ab5ff',
          400: '#4f97ff',
          500: '#2b78f5',
          600: '#1c5fd4',
          700: '#174ba8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(43, 120, 245, 0.45)',
        'glow-sm': '0 0 24px -8px rgba(43, 120, 245, 0.5)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        'radial-neon':
          'radial-gradient(circle at 50% 0%, rgba(43,120,245,0.18), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
