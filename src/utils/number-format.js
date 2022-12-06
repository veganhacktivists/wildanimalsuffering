const pluralRules = new Intl.PluralRules("en-US", { type: "ordinal" });
const numberFormat = new Intl.NumberFormat("en-US");
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);

export function formatOrdinals(n) {
  const rule = pluralRules.select(n);
  const suffix = suffixes.get(rule);
  return `${numberFormat.format(n)}${suffix}`;
}
