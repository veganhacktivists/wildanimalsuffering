import { Asap_Condensed, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import "~/styles/globals.css";
import i18n, { defaultNS } from "../i18n";

const asapCondensed = Asap_Condensed({
  subsets: ["latin"],
  variable: "--font-asap-condensed",
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const locale = pageProps.locale ?? "en";

  if (pageProps.messages && !i18n.hasResourceBundle(locale, defaultNS)) {
    i18n.addResourceBundle(locale, defaultNS, pageProps.messages);
  }

  i18n.changeLanguage(locale);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-asap-condensed: ${asapCondensed.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* A copy of analytics.veganhacktivists.org/script.js, so the CSP only
            has to trust this site's own scripts. */}
        <script
          defer
          src="/umami/script.js"
          data-website-id="ccc23fb2-c4bc-4192-bfac-1b765758a52a"
          data-host-url="https://analytics.veganhacktivists.org"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
