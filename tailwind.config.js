/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          surface      : "#181818",   
          surface2     : "#1f1f1f",  
          border       : "#323232",
  
          primary      : "#64b263",
          primaryHover : "#54a453",
        },
      },
    },
    plugins: [],
  };
  