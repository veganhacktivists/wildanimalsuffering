import { Header } from "~/components/header";
import { CommonObjections } from "~/screens/common-objections";
import { Conclusion } from "~/screens/conclusion";
import { HowToHelp } from "~/screens/how-to-help";
import { Introduction } from "~/screens/introduction";
import { Organizations } from "~/screens/organizations";
import { PopulationDynamics } from "~/screens/population-dynamics";
import { ProposedSolutions } from "~/screens/proposed-solutions";
import { Resources } from "~/screens/resources";
import { ScaleOfSuffering } from "~/screens/scale-of-suffering";
import { TypesOfSuffering } from "~/screens/types-of-suffering";
import { Videos } from "~/screens/videos";
import { useVisitorStats } from "~/utils/use-visitor-stats";
import type { resources } from "../i18n";

type Props = {
  locale?: keyof typeof resources;
};

export default function Home({ locale }: Props) {
  const visitors = useVisitorStats();

  return (
    <>
      <Header locale={locale} />
      <main>
        <Introduction />
        <ScaleOfSuffering />
        <TypesOfSuffering />
        <PopulationDynamics />
        <ProposedSolutions />
        <Videos />
        <CommonObjections />
        <HowToHelp />
        <Organizations />
        <Resources />
        <Conclusion locale={locale} visitors={visitors} />
      </main>
    </>
  );
}
