const radixPlugin = require("./lib/tailwindcss-radix-plugin");

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,css,html}"],
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
        "9/10": "90%",
      },
      colors: {
        "menu-front": { dark: "#A29D8B", light: "#ADA999" },
        "menu-back": {
          dark: "#9F9F9F",
          light: "#F4F4F4",
        },
        khaki: "#c7d3d0",
        blue: {
          DEFAULT: "#85c5c8",
        },
        primary: {
          DEFAULT: "#d8b36d",
          light: "#E8D1A7",
          lighter: "#F3E8D3",
        },
        gray: {
          DEFAULT: "#3F3E3E",
        },
        black: {
          DEFAULT: "#1A3439",
        },
        brown: {
          DEFAULT: "#5D5445",
          lighter: "#C79D5E",
        },
      },
      backgroundImage: {
        abyss: "url('/public/images/scale-of-suffering/abyss.jpg')",
        "dirt-road": "url('/public/images/population-dynamics/dirt-road.jpg')",
        frog: "url('/public/images/organizations/frog.png')",
        mud: "url('/public/images/organizations/mud-bg-color.jpg')",
        sand: "url('/public/images/types-of-suffering/sand-bg-color.jpg')",
        savanna: "url('/public/images/introduction/savanna.jpg')",
        "savanna-md": "url('/public/images/introduction/savanna-md.jpg')",
        woods: "url('/public/images/conclusion/woods.jpg')",
        "woods-md": "url('/public/images/conclusion/woods-md.jpg')",
        sky: "url('/public/images/videos/sky.jpg')",
        "resource-section": "url('/public/images/other-resources/section.png')",
        "resource-section-active":
          "url('/public/images/other-resources/section-active.png')",
        "resource-section-flipped":
          "url('/public/images/other-resources/section-flipped.png')",
        "resource-section-active-flipped":
          "url('/public/images/other-resources/section-active-flipped.png')",
        "tree-and-owl": "url('/public/images/organizations/tree-and-owl.png')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        brand: ["The Bold Font", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 3px 1px #fff",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [radixPlugin()],
};
