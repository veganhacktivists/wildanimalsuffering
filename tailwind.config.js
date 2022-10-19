module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      height: () => ({
        "h-screen/2": "50vh",
        "h-screen/3": "calc(100vh / 3)",
        "2h-screen/3": "calc(100vh * 2 / 3)",
        "h-screen/4": "calc(100vh / 4)",
        "3h-screen/4": "calc(100vh * 3 / 4)",
        "h-screen/5": "calc(100vh / 5)",
      }),
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
        },
        gray: {
          700: "#3F3E3E",
        },
      },
      backgroundImage: {
        abyss: "url('/public/images/scale-of-suffering/abyss.jpg')",
        savanna: "url('/public/images/introduction/savanna.jpg')",
        "savanna-md": "url('/public/images/introduction/savanna-md.jpg')",
      },
      fontFamily: {
        sans: ["Noto Serif", "sans-serif"],
        brand: ["The Bold Font"],
      },
    },
  },
  plugins: [],
};
