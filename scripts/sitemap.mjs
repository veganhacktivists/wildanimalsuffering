import { readdirSync, writeFileSync } from "node:fs";

const site = "https://wildanimalsuffering.org";
const root = new URL("..", import.meta.url);

const locales = readdirSync(new URL("lang", root))
  .map((file) => file.replace(/\.json$/, ""))
  .sort();

const pageUrl = (locale) =>
  locale === "en" ? `${site}/` : `${site}/${locale}/`;

const alternates = [
  ...locales.map((locale) => [locale, pageUrl(locale)]),
  ["x-default", `${site}/`],
]
  .map(
    ([hreflang, href]) =>
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`,
  )
  .join("\n");

const urls = locales
  .map(
    (locale) =>
      `  <url>\n    <loc>${pageUrl(locale)}</loc>\n${alternates}\n  </url>`,
  )
  .join("\n");

writeFileSync(
  new URL("out/sitemap.xml", root),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);
