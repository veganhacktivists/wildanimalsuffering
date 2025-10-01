import { Asap_Condensed, Poppins } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import "~/styles/globals.css";
import i18n from "../i18n";

// Fonts
const asapCondensed = Asap_Condensed({
  subsets: ["latin"],
  variable: "--font-asap-condensed",
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  i18n.changeLanguage(pageProps.locale ?? "en");

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
        <title>
          Wild Animal Suffering — The scale, the problem, and why it matters
        </title>
        <script defer src="https://analytics.veganhacktivists.org/script.js" data-website-id="ccc23fb2-c4bc-4192-bfac-1b765758a52a"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
