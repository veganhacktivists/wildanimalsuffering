import Head from "next/head";
import { useTranslation } from "react-i18next";
import { resources } from "i18n";

type Locale = keyof typeof resources;

type Props = {
  locale?: Locale;
};

const SITE_URL = "https://wildanimalsuffering.org";
const OG_IMAGE = `${SITE_URL}/images/meta.png`;
const locales = Object.keys(resources) as Locale[];

const ogLocales: Record<Locale, string> = {
  ar: "ar_SA",
  de: "de_DE",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  hi: "hi_IN",
  hy: "hy_AM",
  id: "id_ID",
  it: "it_IT",
  ja: "ja_JP",
  ko: "ko_KR",
  lt: "lt_LT",
  nl: "nl_NL",
  pl: "pl_PL",
  pt: "pt_PT",
  ru: "ru_RU",
  th: "th_TH",
  tr: "tr_TR",
  vi: "vi_VN",
  zh: "zh_CN",
};

function localeUrl(locale: Locale) {
  return locale === "en" ? `${SITE_URL}/` : `${SITE_URL}/${locale}/`;
}

export function Seo({ locale = "en" }: Props) {
  const { t } = useTranslation();

  const title = `${t("common.name", { lng: locale })} ${t("introduction.tagline", { lng: locale })}`;
  const description = t("introduction.overview", { lng: locale });
  const url = localeUrl(locale);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {locales.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={localeUrl(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />

      <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/logo-180.png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wild Animal Suffering" />
      <meta property="og:locale" content={ogLocales[locale]} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  );
}
