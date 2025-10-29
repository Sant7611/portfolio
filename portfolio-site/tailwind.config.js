/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        page: '#0B1220',
        surface: '#0F1724',
        primary: '#5661F2',
        accent: '#F6AE2D',
        muted: '#94A3B8',
        text: '#E6EEF8'
      }
    }
  },
  plugins: [],
}
