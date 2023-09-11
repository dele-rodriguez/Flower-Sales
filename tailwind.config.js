/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: "#FBE4EC",
        deeppink: "#C13371",
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans'],
        frank: ['Frank Ruhl Libre', 'serif'],
      },
      fontSize: {
        'sm': '14px',
        'md': '16px',
        'lg': '18px',
        'xl': '25px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}

