/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2d9cdb',
        'secondary-blue':'#b8e5ff',
        'white':'#fff',
        'grey':'#6c6c6c'
      }
    },
  },
  plugins: [],
}
