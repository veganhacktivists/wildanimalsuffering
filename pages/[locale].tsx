import { type Locale, locales } from "i18n";
import Home from "~/screens/home";

type Props = {
  locale: Locale;
};

export default function LocalePage({ locale }: Props) {
  return <Home locale={locale} />;
}

export function getStaticPaths() {
  return {
    paths: locales
      .filter((locale) => locale !== "en")
      .map((locale) => ({ params: { locale } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Props }) {
  const { default: messages } = await import(`../lang/${params.locale}.json`);

  return {
    props: {
      locale: params.locale,
      messages,
    },
  };
}
