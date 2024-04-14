/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('./src/assets/dishwallpaper.jpg')",
      },
      colors: {
        // Add your custom colors here
        darkred: '#b66055',
        footergray: '#f5f5f5',
        customGreen: '#38c172',
        // Add as many custom colors as needed
      },
    },
  },
  plugins: [],
}