const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  './safelist.txt'],
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
        'grey':'#6c6c6c',
        'theme-purple':'#7352ba',
        'theme-black':'#000101',
        'theme-blue': '#3182cc',
        'theme-orange': '#f2602c',
        'theme-light-green': '#08d0ac',
        'theme-red':'#e71d1f'

      },
      animation: {
        'cursorBlinkAnimation': 'cursorBlink 1s infinite',
      },
    },
  },
  plugins: [
    require('tailwind-safelist-generator')({
      patterns: [
          'bg-{colors}/40',
        'text-{colors}',
        'to-{colors}',
        'bg-{colors}/80',
        'from-{colors}/80',
        'bg-{colors}',
        'border-{colors}',
        'hover:bg-{colors}',
        'fill-{colors}'
      ],
    }),
  ],
}
