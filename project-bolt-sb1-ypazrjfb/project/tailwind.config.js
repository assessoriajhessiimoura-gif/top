/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        salmon: {
          light: '#FFB8A3',
          DEFAULT: '#FF9E85',
        },
        nude: {
          light: '#F5E6E0',
          DEFAULT: '#E8D5CD',
        },
        champagne: {
          light: '#F7F3E9',
          DEFAULT: '#E8DCC7',
        },
        cappuccino: {
          light: '#D4B8A0',
          DEFAULT: '#B89878',
        },
        porcelain: {
          light: '#F5F5F0',
          DEFAULT: '#E5E5DC',
        },
        gold: {
          soft: '#D4AF37',
          light: '#F4E4C1',
        },
      },
    },
  },
  plugins: [],
};
