/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f8',
          100: '#e3e8ee',
          200: '#c8d4df',
          300: '#a1b8c8',
          400: '#7395aa',
          500: '#537891',
          600: '#406078',
          700: '#344e63',
          800: '#2d4253',
          900: '#273847',
          950: '#192530',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      }
    },
  },
  plugins: [],
}
