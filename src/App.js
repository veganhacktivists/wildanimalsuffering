import { Header } from "./components/header";
import { CommonObjections } from "./screens/common-objections";
import { EvenWorse } from "./screens/even-worse";
import { HowYouCanHelp } from "./screens/how-you-can-help";
import { HumanPopulation } from "./screens/human-population";
import { Organizations } from "./screens/organizations";
import { OtherResources } from "./screens/other-resources";
import { PopulationDynamics } from "./screens/population-dynamics";
import { TogetherWeCan } from "./screens/together-we-can";
import { VideosYouMightLike } from "./screens/videos-you-might-like";
import { WhyItMatters } from "./screens/why-it-matters";
import { WildAnimalStats } from "./screens/wild-animal-stats";

export function App() {
  return (
    <>
      <Header />
      <WhyItMatters />
      <HumanPopulation />
      <WildAnimalStats />
      <EvenWorse />
      <PopulationDynamics />
      <VideosYouMightLike />
      <CommonObjections />
      <HowYouCanHelp />
      <Organizations />
      <OtherResources />
      <TogetherWeCan />
    </>
  );
}
