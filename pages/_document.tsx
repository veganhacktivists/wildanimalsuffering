import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.props.pageProps.locale ?? "en";
  const dir = ["ar"].includes(currentLocale) ? "rtl" : "ltr";

  return (
    <Html lang={currentLocale} className="motion-safe:scroll-smooth" dir={dir}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#28323a" />
        <meta name="author" content="Vegan Hacktivists" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
