const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "arrows-down": "arrows-down 2s infinite",
        "dialog-hide": "dialog-hide 150ms ease-out",
        "dialog-show": "dialog-show 150ms ease-out",
        "pop-down": "pop-down 150ms ease-out forwards",
        "pop-up": "pop-up 150ms ease-out forwards",
        "slide-bg-right-slow": "slide-bg-right 30s linear infinite",
        "slide-bg-right-fast": "slide-bg-right 15s linear infinite",
        "slide-down": "slide-down 150ms ease-in-out",
        "slide-up": "slide-up 150ms ease-in-out",
      },
      animationDelay: {
        "-400": "-400ms",
        400: "400ms",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backgroundImage: {
        abyss: "url('/images/abyss.jpg')",
        "ant-hill": "url('/images/ant-hill.png')",
        deer: "url('/images/grass-and-deer.png')",
        "dirt-road": "url('/images/dirt-road.jpg')",
        forest: "url('/images/forest.jpg')",
        "fog-2": "url('/images/fog-2.png')",
        "fog-1": "url('/images/fog-1.png')",
        frog: "url('/images/frog.png')",
        hedgehog: "url('/images/grass-and-hedgehog.png')",
        leaf: "url('/images/leaf.png')",
        leaves: "url('/images/leaves.png')",
        mud: "url('/images/mud-bg-color.jpg')",
        resource: "url('/images/resource-bg.png')",
        sand: "url('/images/sand-bg-color.jpg')",
        savanna: "url('/images/savanna.jpg')",
        "savanna-md": "url('/images/savanna-md.jpg')",
        woods: "url('/images/woods.jpg')",
        "woods-md": "url('/images/woods-md.jpg')",
        sky: "url('/images/sky.jpg')",
        "tree-and-birds": "url('/images/tree-and-birds.png')",
      },
      boxShadow: {
        glow: "0 0 3px 1px #fff",
        "glow-lg": "0 0 10px 1px #fff",
      },
      colors: {
        "menu-front": { dark: "#a29d8b", light: "#ada999" },
        "menu-back": {
          dark: "#9f9f9f",
          light: "#f4f4f4",
        },
        khaki: "#c7d3d0",
        blue: {
          DEFAULT: "#85c5c8",
        },
        primary: {
          DEFAULT: "#d8b36d",
          light: "#e8d1a7",
          lighter: "#f3e8d3",
        },
        gray: {
          DEFAULT: "#3f3e3e",
        },
        black: {
          DEFAULT: "#1a3439",
        },
        brown: {
          DEFAULT: "#5d5445",
          lighter: "#89806e",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        brand: ["var(--font-asap-condensed)", ...fontFamily.sans],
      },
      keyframes: {
        "slide-bg-right": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "1000px 0",
          },
        },
        "slide-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pop-down": {
          from: { opacity: 1, transform: "translateY(-110%)" },
          to: { opacity: 0, transform: "translateY(0)" },
        },
        "pop-up": {
          from: { opacity: 0, transform: "translateY(0)" },
          to: { opacity: 1, transform: "translateY(-110%)" },
        },
        "dialog-show": {
          from: { opacity: 0, transform: "translateY(50vh)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "arrows-down": {
          "0%": {
            opacity: 0,
            transform: "rotate(45deg) translate(-16px, -16px)",
          },
          "50%": { opacity: 1 },
          "100%": {
            opacity: 0,
            transform: "rotate(45deg) translate(16px, 16px)",
          },
        },
      },
      spacing: {
        18: "4.5rem",
        34: "8.5rem",
        "1/10": "10%",
        "9/10": "90%",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("./lib/tailwindcss-animation-delay-plugin"),
    require("./lib/tailwindcss-radix-plugin"),
  ],
};
