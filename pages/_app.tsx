import { Asap_Condensed, Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/header";
import "../styles/globals.css";

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
  return (
    <>
      <style jsx global>{`
        :root {
          --font-asap-condensed: ${asapCondensed.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>
          Wild Animal Suffering — The scale, the problem, and why it matters
        </title>
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
