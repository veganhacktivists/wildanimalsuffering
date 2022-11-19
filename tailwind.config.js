module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,css,html}"],
  theme: {
    extend: {
      animation: {
        "arrows-down": "arrows-down 2s infinite",
        "slide-down": "slide-down 150ms ease-in-out",
        "slide-up": "slide-up 150ms ease-in-out",
        "pop-down": "pop-down 150ms ease-out forwards",
        "pop-up": "pop-up 150ms ease-out forwards",
        "dialog-hide": "dialog-hide 150ms ease-out",
        "dialog-show": "dialog-show 150ms ease-out",
      },
      animationDelay: {
        "-400": "-400ms",
        400: "400ms",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backgroundImage: {
        abyss: "url('/public/images/scale-of-suffering/abyss.jpg')",
        "dirt-road": "url('/public/images/population-dynamics/dirt-road.jpg')",
        "ant-hill": "url('/public/images/how-to-help/ant-hill.png')",
        forest: "url('/public/images/how-to-help/forest.jpg')",
        frog: "url('/public/images/organizations/frog.png')",
        hedgehog:
          "url('/public/images/common-objections/grass-and-hedgehog.png')",
        leaves: "url('/public/images/how-to-help/leaves.png')",
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
        "tree-and-birds":
          "url('/public/images/organizations/tree-and-birds.png')",
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
          lighter: "#c79d5e",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        brand: ["The Bold Font", "sans-serif"],
      },
      keyframes: {
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
        "9/10": "90%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("./lib/tailwindcss-animation-delay-plugin"),
    require("./lib/tailwindcss-radix-plugin"),
  ],
};
