/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md2: "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1024px",
      // => @media (min-width: 992px) { ... }

      lg2: "1152px",
      // => @media (min-width: 1152px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl2: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
