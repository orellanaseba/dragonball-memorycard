/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-dbz": "url('https://images2.alphacoders.com/100/thumb-1920-1003880.png')"
      }
    },
  },
  plugins: [],
}

