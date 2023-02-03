import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lang/en.json";
import fr from "./lang/fr.json";

export const defaultNS = "translation";
export const resources = {
  en: { [defaultNS]: en },
  fr: { [defaultNS]: fr },
} as const;

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
