/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      height: {
        'variable': '70vh',
      },
      width: {
        '160': '160px',
        '320': '320px',
        '720': '920px',
        '340': '380px',
      }
    },
    fontFamily: {
      mono: ['"font-mono"', 'monospace'],
    },
  },
  plugins: [],
}
