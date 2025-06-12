/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
      },
      backgroundImage: {
        heroImg: "url(/assets/jakarta-mendung-dikit.jpg)",
        blackOverlay: "Linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
      }
    },
  },
  plugins: [],
}

