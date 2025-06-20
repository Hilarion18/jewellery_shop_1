// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Important for toggling dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#9333ea',
        'ovolo-green': '#85cf9b',
        'ovolo-gray1': '#2d3748',
      },
      fontSize: {
        menu: 'text-sm'
      },
      fontWeight: {
        menu: 'font-semibold'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        ovolo: ['Cadiz', 'Sans-Serif']
      },
      height: {
        '80vh': '80vh',
        '60vh': '60vh',
      },
    },
  },
  plugins: [],
};