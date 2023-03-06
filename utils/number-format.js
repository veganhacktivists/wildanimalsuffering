export function formatOrdinals({ n, t, locale = "en" }) {
  const pluralRules = new Intl.PluralRules(locale, { type: "ordinal" });
  const numberFormat = new Intl.NumberFormat(locale);
  const suffixes = new Map([
    ["one", t("common.plural_rules.one")],
    ["two", t("common.plural_rules.two")],
    ["few", t("common.plural_rules.few")],
    ["other", t("common.plural_rules.other")],
  ]);

  const rule = pluralRules.select(n);
  const suffix = suffixes.get(rule);

  return `${numberFormat.format(n)}${suffix}`;
}
