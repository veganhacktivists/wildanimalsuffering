const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, config, matchUtilities, theme }) => {
    // Register static utilities.
    const utilities = {};
    for (const [key, value] of Object.entries(config().animationDelay)) {
      if (key.startsWith("-")) {
        utilities[`.-animation-delay-${key.replace("-", "")}`] = {
          "animation-delay": value,
        };
      } else {
        utilities[`.animation-delay-${key}`] = {
          "animation-delay": value,
        };
      }
    }
    addUtilities({ ...utilities });

    // Register dynamic utilities.
    matchUtilities(
      {
        "animation-delay": (value) => ({
          "animation-delay": value,
        }),
      },
      { values: theme("animationDelay") },
    );
  },
  {
    animationDelay: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
      "-75": "-75ms",
      "-100": "-100ms",
      "-150": "-150ms",
      "-200": "-200ms",
      "-300": "-300ms",
      "-500": "-500ms",
      "-700": "-700ms",
      "-1000": "-1000ms",
    },
  },
);
