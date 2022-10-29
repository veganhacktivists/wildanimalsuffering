const radixPlugin = require("./lib/tailwindcss-radix-plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 150ms ease-in-out",
        "slide-up": "slide-up 150ms ease-in-out",
      },
      height: () => ({
        "h-screen/2": "50vh",
        "h-screen/3": "calc(100vh / 3)",
        "2h-screen/3": "calc(100vh * 2 / 3)",
        "h-screen/4": "calc(100vh / 4)",
        "3h-screen/4": "calc(100vh * 3 / 4)",
        "h-screen/5": "calc(100vh / 5)",
      }),
      keyframes: {
        "slide-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      spacing: {
        18: "4.5rem",
      },
      colors: {
        "menu-front": { dark: "#A29D8B", light: "#ADA999" },
        "menu-back": {
          dark: "#9F9F9F",
          light: "#F4F4F4",
        },
        khaki: "#c7d3d0",
        blue: {
          200: "#85c5c8",
        },
        primary: {
          DEFAULT: "#d8b36d",
          light: "#E8D1A7",
          lighter: "#F3E8D3",
        },
        gray: {
          700: "#3F3E3E",
        },
      },
      backgroundImage: {
        abyss: "url('/public/images/scale-of-suffering/abyss.jpg')",
        "dirt-road": "url('/public/images/population-dynamics/dirt-road.jpg')",
        sand: "url('/public/images/types-of-suffering/sand-bg-color.jpg')",
        savanna: "url('/public/images/introduction/savanna.jpg')",
        "savanna-md": "url('/public/images/introduction/savanna-md.jpg')",
      },
      fontFamily: {
        sans: ["Noto Serif", "sans-serif"],
        brand: ["The Bold Font"],
      },
    },
  },
  plugins: [radixPlugin()],
};
