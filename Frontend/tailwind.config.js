/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif' :['lora', ...defaultTheme.fontFamily.serif]
      }
    },
    animation: {
      fade: 'fadeIn 1.5s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
    
  },
  plugins: [],
}
  }};