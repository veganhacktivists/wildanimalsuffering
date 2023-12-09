import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./lang/de.json";
import en from "./lang/en.json";
import fr from "./lang/fr.json";
import id from "./lang/id.json";
import ja from "./lang/ja.json";
import nl from "./lang/nl.json";

export const defaultNS = "translation";
export const resources = {
  de: { [defaultNS]: de },
  en: { [defaultNS]: en },
  fr: { [defaultNS]: fr },
  id: { [defaultNS]: id },
  ja: { [defaultNS]: ja },
  nl: { [defaultNS]: nl },
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
