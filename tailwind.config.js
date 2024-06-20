/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cr-dark-blue": "#19191a",
        "cr-dark-black":"#0c0d12",
        "cr-dark-black-main":"#040405",
        "cr-dark-light":"#1b1d28",
        "cr-orange":"#8c7f0b",
        "cr-orange-main":"#ffe814",
        "cr-blue": "#0158b8",
        "cr-light-blue": "#b3cdea",
        "cr-violet": "#c702e4",
        "cr-white": "#ffffff",
        "cr-gray": "#636365",
        "cr-light-violet": "#faf2fd",
        "cr-white-smoke": "#edf3f8",
        "cr-red": "#FF3D00",
        "cr-green": "#00A300",
        "cr-light-green": "#2EFF2E",
        "cr-light-gray": "#00427D1A",
      },
      screens: {
        mobile: "375px",
        "mobile-m": "425px",
        "mobile-l": "768px",
        tablet: "1024px",
        laptop: "1440px",
        "laptop-l": "1680px",
        "laptop-xl": "1920px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aushan: ["Kaushan Script", "cursive"],
    },
    },
  
  plugins: [],
};
