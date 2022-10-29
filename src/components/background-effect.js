import { FireEffect } from "./fire-effect";
import { FogEffect } from "./fog-effect";
import { LeavesEffect } from "./leaves-effect";
import { RainfallEffect } from "./rain-effect";
import { SnowfallEffect } from "./snowfall-effect";

const effectComponents = {
  "common-objections-screen": LeavesEffect,
  "even-worse-screen": RainfallEffect,
  "how-you-can-help-screen": FireEffect,
  "videos-screen": SnowfallEffect,
  "wild-animal-suffering-screen": FogEffect,
};

export function BackgroundEffect({ type }) {
  const EffectComponent = effectComponents[type];

  if (!EffectComponent) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed z-20 h-screen w-screen">
      <EffectComponent />
    </div>
  );
}
