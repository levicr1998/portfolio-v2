const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      screens: {
        xs: '100%',
        sm: '540px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
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
