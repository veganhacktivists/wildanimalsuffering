import { describe, expect, it } from "vitest";
import en from "../lang/en.json";
import hindi from "../lang/hi.json";
import italian from "../lang/it.json";
import { formatOrdinals } from "./number-format";

const translator = (dictionary) => (key) => dictionary[key];

describe("formatOrdinals", () => {
  it("applies English ordinal suffixes", () => {
    const t = translator(en);

    expect(formatOrdinals({ n: 1, t })).toBe("1st");
    expect(formatOrdinals({ n: 2, t })).toBe("2nd");
    expect(formatOrdinals({ n: 3, t })).toBe("3rd");
    expect(formatOrdinals({ n: 4, t })).toBe("4th");
  });

  it("groups thousands using the locale's number format", () => {
    expect(formatOrdinals({ n: 12345, t: translator(en) })).toBe("12,345th");
  });

  // Italian and Hindi ordinals use CLDR's `many` category, which the suffix
  // map does not list. Without a fallback these render as "8undefined".
  it("falls back to the default suffix for unlisted plural categories", () => {
    const t = translator(italian);

    expect(formatOrdinals({ n: 8, t, locale: "it" })).toBe("8°");
    expect(formatOrdinals({ n: 11, t, locale: "it" })).toBe("11°");
    expect(formatOrdinals({ n: 80, t, locale: "it" })).toBe("80°");

    expect(formatOrdinals({ n: 6, t: translator(hindi), locale: "hi" })).toBe(
      "6वीं",
    );
  });

  it("never renders undefined for any supported locale", () => {
    const locales = { en, it: italian, hi: hindi };

    for (const [locale, dictionary] of Object.entries(locales)) {
      for (let n = 0; n <= 120; n++) {
        expect(
          formatOrdinals({ n, t: translator(dictionary), locale }),
        ).not.toContain("undefined");
      }
    }
  });
});
