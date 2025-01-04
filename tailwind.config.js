/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: { 10: "#ffed4a" },
        danger: "#e3342f",
        success: "#38c172",
        darkblue:"#141d5a"
      },
      height:{
        60:"60px",
        70:"70px",
        75:"75px",
        80:"80px",
        200:"200px",
        230:"230px",
        300:"300px"
      },
      fontFamily:{
        cursive:['"Comic Sans MS"', 'cursive'],
        mono: ['"Andale Mono"', 'monospace'],
        gill: ['"Gill Sans"', 'sans-serif']
  
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s infinite',
      },
      
    },
  },
  plugins: [],
}
