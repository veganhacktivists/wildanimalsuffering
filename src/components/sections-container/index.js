import { useContext, useEffect } from "react";
import { CommonObjections } from "../common-objections";
import { EvenWorse } from "../even-worse";
import { HowYouCanHelp } from "../how-you-can-help";
import { HumanPopulation } from "../human-population";
import { Organizations } from "../organizations";
import { OtherResources } from "../other-resources";
import { PopulationDynamics } from "../population-dynamics";
import { Context } from "../../state";
import { TogetherWeCan } from "../together-we-can";
import { VideosYouMightLike } from "../videos-you-might-like";
import { WhyItMatters } from "../why-it-matters";
import { WildAnimalStats } from "../wild-animal-stats";
import { NavigationMenu } from "../navigation-menu";

const SectionsContainer = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const screenContentElements = document.querySelectorAll(".screen-content");
    dispatch({
      type: "REGISTER_SCREEN_CONTENT_ELEMENTS",
      payload: { screenContentElements },
    });
  }, []);

  // useEffect(() => {
  // 	if (state.screenId) {
  // 		document
  // 			.getElementById(state.screenId)
  // 			.scrollIntoView({ behavior: 'smooth' });
  // 		const location = window.location.toString().split('#')[0];
  // 		history.replaceState(null, null, location + '#' + state.screenId);
  // 	}
  // }, [state.screenId]);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const screenId = window.location.hash?.substring(1);
    dispatch({ type: "GO_TO_SCREEN_BY_ID", payload: { screenId } });
  }, [window.location.hash]);

  return (
    <>
      <NavigationMenu />
      <div className="scrollsnap-y">
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
      </div>
    </>
  );
};

export { SectionsContainer };
