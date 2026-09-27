import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://visitors.wildanimalsuffering.org https://analytics.veganhacktivists.org",
  "frame-src https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.props.pageProps.locale ?? "en";
  const dir = ["ar"].includes(currentLocale) ? "rtl" : "ltr";

  return (
    <Html
      lang={currentLocale}
      className="motion-safe:scroll-smooth"
      dir={dir}
      data-scroll-behavior="smooth"
    >
      <Head>
        <meta charSet="UTF-8" />
        {/* `next dev` needs eval, which this policy blocks. */}
        {process.env.NODE_ENV === "production" && (
          <meta
            httpEquiv="Content-Security-Policy"
            content={contentSecurityPolicy}
          />
        )}
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
