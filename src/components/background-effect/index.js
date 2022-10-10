import { useContext } from "react";
import { Context } from "../../state";

import { FallingLeavesEffect } from "./falling-leaves";
import { FireSparksEffect } from "./fire-sparks";
import { FogEffect } from "./fog";
import { RainfallEffect } from "./rainfall";
import { SnowfallEffect } from "./snowfall";

const findEffectComponent = (screenId) => {
  switch (screenId) {
    case undefined:
    case "wild-animal-suffering-screen":
      return FogEffect;
    case "even-worse-screen":
      return RainfallEffect;
    case "videos-screen":
      return SnowfallEffect;
    case "common-objections-screen":
      return FallingLeavesEffect;
    case "how-you-can-help-screen":
      return FireSparksEffect;
  }

  return null;
};

const BackgroundEffect = () => {
  const [state] = useContext(Context);

  const EffectComponent = findEffectComponent(state.screenId);

  if (EffectComponent === null) {
    return null;
  }

  return (
    <div className="fixed w-screen h-screen pointer-events-none">
      <EffectComponent />
    </div>
  );
};

export { BackgroundEffect };
