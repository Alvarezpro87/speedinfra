/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6', 
          // alternative: '#7c3aed', 
        },
      },
      fontFamily: {
        
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
