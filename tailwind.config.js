/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F2C',
        secondary: '#007BFF',
        accent: '#00FF9C',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}