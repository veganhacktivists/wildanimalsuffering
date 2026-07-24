import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from "~/screens/home";

const supportedLanguages = [
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
];

function detectBrowserLanguage(): string {
  if (typeof navigator === "undefined") return "en";

  // Get browser languages in order of preference
  const browserLanguages = navigator.languages || [navigator.language];

  for (const lang of browserLanguages) {
    // Extract language code (e.g., 'en-US' -> 'en')
    const langCode = lang.split("-")[0].toLowerCase();

    // Check if we support this language
    if (supportedLanguages.includes(langCode)) {
      return langCode;
    }
  }

  return "en"; // Default fallback
}

export default function En() {
  const router = useRouter();

  useEffect(() => {
    // Storage access throws when the browser blocks it, which would otherwise
    // take the whole effect down with it.
    let hasVisited: string | null = null;

    try {
      hasVisited = localStorage.getItem("language-detected");
    } catch {
      return;
    }

    if (!hasVisited) {
      const detectedLang = detectBrowserLanguage();

      // Store that we've detected the language
      try {
        localStorage.setItem("language-detected", "true");
      } catch {
        return;
      }

      // If detected language is not English, redirect
      if (detectedLang !== "en") {
        router.replace(`/${detectedLang}/`);
        return;
      }
    }
  }, [router]);

  return <Home locale="en" />;
}

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
