import { describe, expect, it } from "vitest";
import i18n from "./i18n";
import en from "./lang/en.json";

describe("i18n", () => {
  it("falls back to English for a key a locale lacks", () => {
    expect(i18n.getFixedT("hy")("videos.cosmic_skeptic.description")).toBe(
      en["videos.cosmic_skeptic.description"],
    );
  });
});
