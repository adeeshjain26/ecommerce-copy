/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yell': '#FF9800',
        'gunmetal': '#212A31',
        'gunmetal-100':'#2E2944',
        'midnightgreen':'#124E66',
        'timberwolf':'#D3D9D4'
      },
    },
  },
  plugins: [],
}

