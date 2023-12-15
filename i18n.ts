import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./lang/ar.json";
import de from "./lang/de.json";
import en from "./lang/en.json";
import es from "./lang/es.json";
import fr from "./lang/fr.json";
import hi from "./lang/hi.json";
import hy from "./lang/hy.json";
import id from "./lang/id.json";
import ja from "./lang/ja.json";
import lt from "./lang/lt.json";
import nl from "./lang/nl.json";
import ru from "./lang/ru.json";
import tr from "./lang/tr.json";
import zh from "./lang/zh.json";

export const defaultNS = "translation";
export const resources = {
  ar: { [defaultNS]: ar },
  de: { [defaultNS]: de },
  en: { [defaultNS]: en },
  es: { [defaultNS]: es },
  fr: { [defaultNS]: fr },
  hi: { [defaultNS]: hi },
  hy: { [defaultNS]: hy },
  id: { [defaultNS]: id },
  ja: { [defaultNS]: ja },
  lt: { [defaultNS]: lt },
  nl: { [defaultNS]: nl },
  ru: { [defaultNS]: ru },
  tr: { [defaultNS]: tr },
  zh: { [defaultNS]: zh },
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
