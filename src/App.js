import { Header } from "./components/header";
import { CommonObjections } from "./screens/common-objections";
import { Conclusion } from "./screens/conclusion";
import { HowToHelp } from "./screens/how-to-help";
import { Introduction } from "./screens/introduction";
import { Organizations } from "./screens/organizations";
import { PopulationDynamics } from "./screens/population-dynamics";
import { Resources } from "./screens/resources";
import { ScaleOfSuffering } from "./screens/scale-of-suffering";
import { TypesOfSuffering } from "./screens/types-of-suffering";
import { Videos } from "./screens/videos";
import { useVisitorStats } from "./utils/use-visitor-stats";

export function App() {
  const visitors = useVisitorStats();

  return (
    <>
      <Header />
      <Introduction />
      <ScaleOfSuffering />
      <TypesOfSuffering />
      <PopulationDynamics />
      <Videos />
      <CommonObjections />
      <HowToHelp />
      <Organizations />
      <Resources />
      <Conclusion visitors={visitors} />
    </>
  );
}
