/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cursorBlink: {
          '49%': { backgroundColor: '#fff' },
          '50%': { backgroundColor: 'transparent' },
          '99%': { backgroundColor: 'transparent' }
        },
      },
      colors: {
        'primary-blue': '#2d9cdb',
        'secondary-blue':'#b8e5ff',
        'white':'#fff',
        'grey':'#6c6c6c'
      },
      animation: {
        'cursorBlinkAnimation': 'cursorBlink 1s infinite',
      },
    },
  },
  plugins: [],
}
