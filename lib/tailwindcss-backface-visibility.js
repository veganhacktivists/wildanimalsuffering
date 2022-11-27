const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});
