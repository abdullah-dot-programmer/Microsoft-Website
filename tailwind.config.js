/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      screens: {
        'md': '860px',
        'lg': '1120px',
        'xl': '1370px',
      },
    },
  },
  plugins: [],
}

