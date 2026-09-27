import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lang/en.json";

export const locales = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "hi",
  "hy",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "nl",
  "pl",
  "pt",
  "ru",
  "th",
  "tr",
  "vi",
  "zh",
] as const;

export type Locale = (typeof locales)[number];

export const defaultNS = "translation";

// Other locales arrive with their page's props, so a page only ships its own.
export const resources = {
  en: { [defaultNS]: en },
} as const;

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
