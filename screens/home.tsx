import { useRef } from "react";
import { Header } from "~/components/header";
import { Seo } from "~/components/seo";
import { CommonObjections } from "~/screens/common-objections";
import { Conclusion } from "~/screens/conclusion";
import { HowToHelp } from "~/screens/how-to-help";
import { QuoteSection } from "~/screens/quote-section";
import { Introduction } from "~/screens/introduction";
import { Organizations } from "~/screens/organizations";
import { PopulationDynamics } from "~/screens/population-dynamics";
import { ProposedSolutions } from "~/screens/proposed-solutions";
import { Resources } from "~/screens/resources";
import { ScaleOfSuffering } from "~/screens/scale-of-suffering";
import { TypesOfSuffering } from "~/screens/types-of-suffering";
import { Videos } from "~/screens/videos";
import { useLazyBackgrounds } from "~/utils/use-lazy-backgrounds";
import { useVisitorStats } from "~/utils/use-visitor-stats";
import type { Locale } from "../i18n";

type Props = {
  locale?: Locale;
};

export default function Home({ locale }: Props) {
  const visitors = useVisitorStats();
  const mainRef = useRef<HTMLElement>(null);
  useLazyBackgrounds(mainRef);

  return (
    <>
      <Seo locale={locale} />
      <Header locale={locale} />
      <main ref={mainRef}>
        <Introduction />
        <ScaleOfSuffering />
        <TypesOfSuffering />
        <PopulationDynamics />
        <ProposedSolutions />
        <Videos />
        <CommonObjections />
        <QuoteSection />
        <HowToHelp />
        <Organizations />
        <Resources />
        <Conclusion locale={locale} visitors={visitors} />
      </main>
    </>
  );
}
