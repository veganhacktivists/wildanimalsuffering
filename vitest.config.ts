import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { type Plugin, transformWithEsbuild } from "vite";
import { defineConfig } from "vitest/config";

const root = fileURLToPath(new URL(".", import.meta.url));

// Components and screens keep JSX in plain `.js` files, which Vite only treats
// as JSX when told to.
const jsxInJs: Plugin = {
  name: "jsx-in-js",
  enforce: "pre",
  transform(code, id) {
    if (id.includes("node_modules") || !id.endsWith(".js")) {
      return null;
    }

    return transformWithEsbuild(code, id, {
      loader: "jsx",
      jsx: "automatic",
    });
  },
};

export default defineConfig({
  plugins: [jsxInJs, react()],
  resolve: {
    alias: {
      "~/components": `${root}components`,
      "~/lib": `${root}lib`,
      "~/pages": `${root}pages`,
      "~/screens": `${root}screens`,
      "~/styles": `${root}styles`,
      "~/utils": `${root}utils`,
      i18n: `${root}i18n.ts`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx,js,jsx}"],
    exclude: ["node_modules", ".next", "out"],
  },
});
