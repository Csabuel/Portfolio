/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0d111d",
        "accent-color": "#2f3336",
        "light-color": "#e7e9ea",
        "bt-color": "#20242f",
      },
    },
  },
  plugins: [],
};
