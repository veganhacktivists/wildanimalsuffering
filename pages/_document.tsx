import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.props.pageProps.locale ?? "en";
  const dir = ["ar"].includes(currentLocale) ? "rtl" : "ltr";

  return (
    <Html lang={currentLocale} className="scroll-smooth" dir={dir}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="title"
          content="Wild Animal Suffering — The scale, the problem, and why it matters"
        />
        <meta
          name="description"
          content="We tend to idealize nature and the lives of wild animals, but in reality, their lives can be really tough. The suffering of wild animals matters. It matters to them, and it should matter to us."
        />
        <meta
          name="keywords"
          content="wild, animal, suffering, animal, rights, vegan, veganism, factory farms, rewilding, wildlife, farmed animals, wild animals"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Vegan Hacktivists" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wildanimalsuffering.org/" />
        <meta
          property="og:title"
          content="Wild Animal Suffering — The scale, the problem, and why it matters"
        />
        <meta
          property="og:description"
          content="We tend to idealize nature and the lives of wild animals, but in reality, their lives can be really tough. The suffering of wild animals matters. It matters to them, and it should matter to us."
        />
        <meta property="og:image" content="/images/meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://wildanimalsuffering.org/"
        />
        <meta
          property="twitter:title"
          content="Wild Animal Suffering — The scale, the problem, and why it matters"
        />
        <meta
          property="twitter:description"
          content="We tend to idealize nature and the lives of wild animals, but in reality, their lives can be really tough. The suffering of wild animals matters. It matters to them, and it should matter to us."
        />
        <meta property="twitter:image" content="/images/meta.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
