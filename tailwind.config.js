/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'chatbot-walle': "url('./assets/chatbot-walle.png')"
      }
    },
  },
  plugins: [],
}

