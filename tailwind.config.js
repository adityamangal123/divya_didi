/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030D1B',
          900: '#071A35', // Primary Deep Navy
          850: '#0A254C',
          800: '#0E3063',
          700: '#14243B', // Text Dark Navy
        },
        brand: {
          blue: '#1769E8', // Secondary Royal Blue
          blueDark: '#0D52BE',
          electric: '#36B6FF', // Accent Electric Blue
          electricLight: '#EBF7FF',
        },
        surface: {
          light: '#FFFFFF',
          alt: '#F4F7FC', // Secondary Light Blue Grey
          subtle: '#EDF2F9',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 4px 20px -2px rgba(7, 26, 53, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(23, 105, 232, 0.12)',
        'elevated': '0 20px 40px -10px rgba(7, 26, 53, 0.1)',
        'glow': '0 0 25px rgba(54, 182, 255, 0.35)',
      }
    },
  },
  plugins: [],
}

