/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '200px',
      md: '768px',
      lg: '1024px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        md: '1rem',
        lg: 'rem',
        xl: '10rem',
      },
    },
  },
  plugins: [],
};
