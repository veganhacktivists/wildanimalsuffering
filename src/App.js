import { Header } from "./components/header";
import { CommonObjections } from "./screens/common-objections";
import { EvenWorse } from "./screens/even-worse";
import { HowYouCanHelp } from "./screens/how-you-can-help";
import { Organizations } from "./screens/organizations";
import { OtherResources } from "./screens/other-resources";
import { PopulationDynamics } from "./screens/population-dynamics";
import { PopulationScale } from "./screens/population-scale";
import { TogetherWeCan } from "./screens/together-we-can";
import { VideosYouMightLike } from "./screens/videos-you-might-like";
import { WhyItMatters } from "./screens/why-it-matters";

export function App() {
  return (
    <>
      <Header />
      <WhyItMatters />
      <PopulationScale />
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
