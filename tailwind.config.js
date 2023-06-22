/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'darkBlue': '#293042',
          'primaryLight': '#f7f9fc'
        }
    },
  },
  plugins: [],
}

