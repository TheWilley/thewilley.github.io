/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'sm2': '576px'
        }
      },
    },
    plugins: [],
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
  }