// Copyright (c) 2021 ecklf (taken from https://github.com/ecklf/tailwindcss-radix).
const plugin = require("tailwindcss/plugin");

const dataAttributes = ["disabled", "highlighted", "placeholder"];

const namedDataAttributes = {
  state: [
    "active",
    "checked",
    "closed",
    "delayed-open",
    "hidden",
    "inactive",
    "indeterminate",
    "instant-open",
    "off",
    "on",
    "open",
    "unchecked",
    "visible",
  ],
  side: ["bottom", "left", "right", "top"],
  orientation: ["horizontal", "vertical"],
  motion: ["from-end", "from-start", "to-end", "to-start"],
  swipe: ["cancel", "end", "move", "start"],
};

module.exports = plugin.withOptions(
  (options) =>
    ({ addUtilities, addVariant, e }) => {
      options = options
        ? options
        : {
            variantPrefix: "radix",
          };

      const variantPrefix =
        options.variantPrefix === "" ||
        (typeof options.variantPrefix === "boolean" &&
          options.variantPrefix === false)
          ? ""
          : `${options.variantPrefix}-`;

      // Adds the following transform origin utilities
      // `--radix-context-menu-content-transform-origin`,
      // `--radix-dropdown-menu-content-transform-origin`,
      // `--radix-hover-card-content-transform-origin `,
      // `--radix-popover-content-transform-origin`,
      // `--radix-tooltip-content-transform-origin`,
      const transformOrigins = [
        "context-menu",
        "dropdown-menu",
        "hover-card",
        "popover",
        "tooltip",
      ];

      transformOrigins.forEach((transformOrigin) => {
        addUtilities({
          [`.origin-${variantPrefix}${transformOrigin}`]: {
            "transform-origin": `var(--radix-${transformOrigin}-content-transform-origin)`,
          },
        });
      });

      dataAttributes.forEach((attributeValue) => {
        let variantName = `${variantPrefix}${attributeValue}`;
        let selector = `data-${attributeValue}`;

        addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(
              `${variantName}${separator}${className}`,
            )}[${selector}]`;
          });
        });

        addVariant(`group-${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.group[${selector}] .${e(
              `group-${variantName}${separator}${className}`,
            )}`;
          });
        });

        addVariant(`peer-${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.peer[${selector}] ~ .${e(
              `peer-${variantName}${separator}${className}`,
            )}`;
          });
        });
      });

      Object.keys(namedDataAttributes).forEach((attributeName) => {
        namedDataAttributes[attributeName].forEach((attributeValue) => {
          let variantName = `${variantPrefix}${attributeName}-${attributeValue}`;
          let selector = `data-${attributeName}="${attributeValue}"`;

          addVariant(`${variantName}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${e(
                `${variantName}${separator}${className}`,
              )}[${selector}]`;
            });
          });

          addVariant(
            `group-${variantName}`,
            ({ modifySelectors, separator }) => {
              modifySelectors(({ className }) => {
                return `.group[${selector}] .${e(
                  `group-${variantName}${separator}${className}`,
                )}`;
              });
            },
          );

          addVariant(
            `peer-${variantName}`,
            ({ modifySelectors, separator }) => {
              modifySelectors(({ className }) => {
                return `.peer[${selector}] ~ .${e(
                  `peer-${variantName}${separator}${className}`,
                )}`;
              });
            },
          );
        });
      });

      // Adds the following [width|height] utilities
      // `--radix-accordion-content-[width|height]`,
      // `--radix-collapsible-content-[width|height]`,
      // `--radix-navigation-menu-viewport-[width|height]`,
      const dimensionAttributes = [
        "accordion-content",
        "collapsible-content",
        "navigation-menu-viewport",
      ];

      dimensionAttributes.forEach((component) => {
        addUtilities({
          [`.w-${variantPrefix}${component}`]: {
            width: `var(--radix-${component}-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}${component}`]: {
            height: `var(--radix-${component}-height)`,
          },
        });
      });

      // Adds the following [x|y] utilities
      // `--radix-toast-swipe-end-[x|y]`,
      // `--radix-toast-swipe-move-[x|y]`,
      const tooltipAttributes = ["toast-swipe-end", "toast-swipe-move"];

      tooltipAttributes.forEach((component) => {
        addUtilities({
          [`.translate-x-${variantPrefix}${component}-x`]: {
            transform: `translateX(var(--radix-${component}-x))`,
          },
        });
        addUtilities({
          [`.translate-y-${variantPrefix}${component}-y`]: {
            transform: `translateY(var(--radix-${component}-y))`,
          },
        });
      });
    },
);
