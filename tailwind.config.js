/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D3557", // deep blue (trust)
          accent: "#40E3DE",  // teal dot (innovation)
          sand: "#F9D53E",    // optional yellow accent
        },
      },
    },
  },
  plugins: [],
};
